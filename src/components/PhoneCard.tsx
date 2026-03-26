import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Phone, formatPrice } from "@/data/phones";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

const PhoneCard = ({ phone, index = 0 }: { phone: Phone; index?: number }) => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
    >
      {phone.tag && (
        <span className="absolute top-3 right-3 z-10 rounded-full bg-google-red px-2.5 py-0.5 text-[10px] font-bold text-primary-foreground shadow">
          {phone.tag}
        </span>
      )}
      <Link to={`/product/${phone.slug}`}>
        <div className="gradient-card overflow-hidden rounded-xl h-64 flex items-center justify-center p-2 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={phone.colors[selectedColor]?.hex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.12 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 z-0 rounded-xl"
              style={{ backgroundColor: phone.colors[selectedColor]?.hex }}
            />
          </AnimatePresence>
          <img src={phone.colors[selectedColor]?.image || phone.image} alt={`${phone.name} in ${phone.colors[selectedColor]?.name}`} className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
        </div>
      </Link>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground text-sm">{phone.name}</h3>
        </div>
        {/* Color options */}
        <div className="flex items-center gap-1.5">
          {phone.colors.map((c, i) => (
            <button
              key={c.name}
              title={c.name}
              onClick={(e) => { e.preventDefault(); setSelectedColor(i); }}
              className={`h-4 w-4 rounded-full shadow-sm transition-all duration-200 ${selectedColor === i ? "border-2 border-primary ring-1 ring-primary/30 scale-110" : "border border-border/60 hover:scale-110"}`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-bold text-primary">{formatPrice(phone.price)}</span>
          <span className="text-[10px] text-google-green font-medium">Exclusive of GST</span>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2">{phone.shortDesc}</p>
        <div className="flex items-center gap-2 pt-2">
          <Link to={`/product/${phone.slug}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full text-xs hover:bg-[#00a9ff] hover:text-white hover:border-[#00a9ff] transition-colors">View Details</Button>
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
