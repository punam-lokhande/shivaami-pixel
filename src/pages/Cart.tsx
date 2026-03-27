import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/phones";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { useRazorpay } from "@/hooks/useRazorpay";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const { initiatePayment } = useRazorpay();

  const handleCheckout = () => {
    if (items.length === 0) return;

    const gstTotal = items.reduce((sum, i) => sum + Math.round(i.phone.price * i.phone.gstRate / 100) * i.quantity, 0);
    const grandTotal = totalPrice + gstTotal;
    const productNames = items.map(i => i.phone.name).join(", ");

    setIsProcessing(true);

    initiatePayment(
      {
        amount: grandTotal,
        productName: productNames,
      },
      (response) => {
        setIsProcessing(false);
        clearCart();
        toast.success("Payment successful!", {
          description: `Payment ID: ${response.razorpay_payment_id}`,
        });
      },
      (error) => {
        setIsProcessing(false);
        if (error !== "Payment cancelled by user") {
          toast.error("Payment failed", { description: error });
        }
      }
    );
  };

  if (items.length === 0) {
    return (
      <div className="container flex flex-col items-center justify-center py-32 text-center">
        <ShoppingBag className="h-16 w-16 text-muted-foreground/30" />
        <h2 className="mt-4 text-2xl font-bold">Your cart is empty</h2>
        <p className="mt-1 text-muted-foreground">Start shopping to add items</p>
        <Link to="/products"><Button className="mt-6 gradient-cta border-0 text-primary-foreground">Browse Phones</Button></Link>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <motion.div key={item.phone.id} layout className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
              <img src={item.phone.image} alt={item.phone.name} className="h-24 w-24 mx-auto sm:mx-0 rounded-xl object-contain bg-secondary" loading="lazy" width={96} height={96} />
              <div className="flex flex-1 flex-col justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-foreground">{item.phone.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.phone.color}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.phone.id, item.quantity - 1)} className="rounded-full p-1 hover:bg-secondary"><Minus className="h-4 w-4" /></button>
                    <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.phone.id, item.quantity + 1)} className="rounded-full p-1 hover:bg-secondary"><Plus className="h-4 w-4" /></button>
                  </div>
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="font-semibold text-foreground">{formatPrice(item.phone.price * item.quantity)}</span>
                    <span className="text-[10px] text-google-green font-medium">Exclusive of GST</span>
                  </div>
                    <button onClick={() => removeFromCart(item.phone.id)} className="rounded-full p-1 text-destructive hover:bg-destructive/10"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-semibold text-foreground">Order Summary</h3>
            {(() => {
              const gstTotal = items.reduce((sum, i) => sum + Math.round(i.phone.price * i.phone.gstRate / 100) * i.quantity, 0);
              const grandTotal = totalPrice + gstTotal;
              return (
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span className="text-foreground">{formatPrice(totalPrice)}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">GST (18%)</span><span className="text-foreground">{formatPrice(gstTotal)}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Shipping</span><span className="text-google-green font-medium">Free</span></div>
                  <div className="border-t border-border pt-2 flex justify-between font-semibold"><span>Total (incl. GST)</span><span>{formatPrice(grandTotal)}</span></div>
                </div>
              );
            })()}
            <Button
              className="mt-6 w-full gradient-cta border-0 text-primary-foreground"
              onClick={handleCheckout}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Pay with Razorpay"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
