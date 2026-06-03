import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Home, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => (
  <div className="min-h-screen bg-background flex items-center justify-center px-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-lg w-full text-center"
    >
      {/* Animated checkmark */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-google-green/10"
      >
        <CheckCircle2 className="h-10 w-10 text-google-green" />
      </motion.div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
        Thank You!
      </h1>
      <p className="text-muted-foreground mb-2 leading-relaxed">
        Your bulk order enquiry has been submitted successfully.
      </p>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        Our team will reach out to you within <span className="font-semibold text-foreground">24 hours</span> with a custom quote.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <Link to="/products">
          <Button
            size="lg"
            className="w-full sm:w-auto gradient-cta border-0 text-primary-foreground rounded-full px-8 py-5 text-sm sm:text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-105 transition-all duration-300 gap-2"
          >
            <Package className="h-5 w-5" />
            Explore Pixel Models
          </Button>
        </Link>
        <Link to="/">
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto rounded-full px-8 py-5 text-sm sm:text-base font-semibold hover:bg-foreground hover:text-background transition-all duration-300 gap-2"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Contact info */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-10 rounded-2xl border border-border bg-card p-5 sm:p-6"
      >
        <p className="text-sm font-semibold text-foreground mb-2">
          Need urgent assistance?
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Call us at{" "}
          <a href="tel:+919022223600" className="text-primary font-medium hover:underline">
            +91 90222 23600
          </a>{" "}
          or email{" "}
          <a href="mailto:pixel@shivaami.com" className="text-primary font-medium hover:underline">
            pixel@shivaami.com
          </a>
        </p>
      </motion.div>
    </motion.div>
  </div>
);

export default ThankYou;
