import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Phone } from "@/data/phones";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

const PhoneCard = ({ phone, index = 0 }: { phone: Phone; index?: number }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
    >
      <Link to={`/product/${phone.slug}`}>
        <div className="gradient-card overflow-hidden rounded-xl aspect-square flex items-center justify-center p-6">
          <img src={phone.image} alt={phone.name} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
        </div>
      </Link>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">{phone.name}</h3>
          <span className="text-sm font-medium text-primary">${phone.price}</span>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2">{phone.shortDesc}</p>
        <div className="flex items-center gap-2 pt-2">
          <Link to={`/product/${phone.slug}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full text-xs">View Details</Button>
          </Link>
          <Button size="sm" className="flex-1 gap-1 text-xs gradient-cta border-0 text-primary-foreground" onClick={() => addToCart(phone)}>
            <ShoppingCart className="h-3 w-3" /> Buy Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneCard;
