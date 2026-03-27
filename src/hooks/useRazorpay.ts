/**
 * Razorpay Checkout Hook
 * 
 * IMPORTANT: Update RAZORPAY_KEY_ID and BACKEND_URL before going live.
 */

// ⚠️ Replace with your Razorpay Key ID (publishable key — safe for frontend)
const RAZORPAY_KEY_ID = "rzp_test_XXXXXXXXXXXX";

// ⚠️ Replace with your Python backend URL
const BACKEND_URL = "http://localhost:5000";

interface RazorpayOrderData {
  amount: number; // in INR (rupees)
  productName: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => {
      open: () => void;
      on: (event: string, callback: () => void) => void;
    };
  }
}

export const useRazorpay = () => {
  const initiatePayment = async (
    orderData: RazorpayOrderData,
    onSuccess: (response: RazorpayResponse) => void,
    onFailure?: (error: string) => void
  ) => {
    try {
      // Step 1: Create order on your backend
      const res = await fetch(`${BACKEND_URL}/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: orderData.amount,
          currency: "INR",
          receipt: `order_${Date.now()}`,
          notes: {
            product: orderData.productName,
            customer_name: orderData.customerName || "",
            customer_email: orderData.customerEmail || "",
          },
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to create order");
      }

      const order = await res.json();

      // Step 2: Open Razorpay checkout
      const options = {
        key: order.key_id || RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Shivaami × Google Pixel",
        description: orderData.productName,
        order_id: order.id,
        handler: async (response: RazorpayResponse) => {
          // Step 3: Verify payment on backend
          try {
            const verifyRes = await fetch(`${BACKEND_URL}/api/verify-payment`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });

            const verifyData = await verifyRes.json();

            if (verifyData.verified) {
              onSuccess(response);
            } else {
              onFailure?.("Payment verification failed");
            }
          } catch {
            onFailure?.("Payment verification error");
          }
        },
        prefill: {
          name: orderData.customerName || "",
          email: orderData.customerEmail || "",
          contact: orderData.customerPhone || "",
        },
        theme: {
          color: "#4285F4", // Google blue
        },
        modal: {
          ondismiss: () => {
            onFailure?.("Payment cancelled by user");
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      onFailure?.(error instanceof Error ? error.message : "Payment failed");
    }
  };

  return { initiatePayment };
};
