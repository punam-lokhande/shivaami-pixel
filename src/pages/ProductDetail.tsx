import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, Check, ShieldCheck, Bot, GraduationCap, Cloud, Receipt, Settings, Sparkles, Truck } from "lucide-react";
import { getPhoneBySlug, phones, formatPrice } from "@/data/phones";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import PhoneCard from "@/components/PhoneCard";

const shivaamiAdvantages = [
  { icon: ShieldCheck, title: "2-Year Device Protection", desc: "Accidental & liquid damage covered by OneAssist — free", color: "text-google-blue", bg: "bg-google-blue/10" },
  { icon: Bot, title: "1 Year Google Gemini AI Free", desc: "Your team starts using AI from day one", color: "text-google-red", bg: "bg-google-red/10" },
  { icon: GraduationCap, title: "AI Workshops", desc: "Hands-on training by Google & Shivaami", color: "text-google-yellow", bg: "bg-google-yellow/10" },
  { icon: Cloud, title: "Free Cloud Storage", desc: "3 / 6 / 12 months free backup", color: "text-google-green", bg: "bg-google-green/10" },
  { icon: Receipt, title: "Corporate Pricing + GST", desc: "Proper invoicing & input tax credit", color: "text-google-blue", bg: "bg-google-blue/10" },
  { icon: Settings, title: "Zero Touch Deployment", desc: "Devices arrive pre-configured", color: "text-google-red", bg: "bg-google-red/10" },
  { icon: Sparkles, title: "6 Months Gemini AI Free", desc: "Hit the ground running with AI", color: "text-google-yellow", bg: "bg-google-yellow/10" },
  { icon: Truck, title: "Free Pan-India Pickup & Drop", desc: "We collect and deliver across India", color: "text-google-green", bg: "bg-google-green/10" },
];

const ProductDetail = () => {
  const { slug } = useParams();
  const phone = getPhoneBySlug(slug || "");
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);

  if (!phone) return <div className="container py-20 text-center text-muted-foreground">Phone not found</div>;

  const others = phones.filter((p) => p.id !== phone.id).slice(0, 3);
  const specs = Object.entries(phone.specs);

  return (
    <div className="container py-6 sm:py-10 px-4 sm:px-6">
      <div className="grid gap-6 sm:gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="relative gradient-card rounded-2xl border border-border p-4 sm:p-8 flex items-center justify-center">
          {phone.tag && (
            <span className="absolute top-4 left-4 rounded-full bg-google-red px-3 py-1 text-xs font-bold text-primary-foreground shadow">{phone.tag}</span>
          )}
          <img src={phone.image} alt={phone.name} className="max-h-[300px] sm:max-h-[500px] object-contain" width={500} height={500} />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
          <div>
            <p className="text-sm font-medium text-primary">{phone.category === "foldable" ? "Foldable" : phone.category === "flagship" ? "Flagship" : "Mid-Range"}</p>
            <h1 className="mt-1 text-3xl font-bold md:text-4xl">{phone.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`h-4 w-4 ${i < Math.floor(phone.rating) ? "fill-google-yellow text-google-yellow" : "text-border"}`} />)}</div>
              <span className="text-sm text-muted-foreground">{phone.rating} ({phone.reviews} reviews)</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <p className="text-2xl font-bold text-foreground">{formatPrice(phone.price)}</p>
              {phone.originalPrice && (
                <p className="text-lg text-muted-foreground line-through">{formatPrice(phone.originalPrice)}</p>
              )}
            </div>
            <p className="mt-1 text-sm text-google-green font-medium">Exclusive of GST</p>
          </div>

          {/* Color options */}
          <div>
            <h3 className="font-semibold text-sm">Available Colors</h3>
            <div className="mt-2 flex items-center gap-3">
              {phone.colors.map((c) => (
                <div key={c.name} className="flex flex-col items-center gap-1">
                  <span
                    className="h-8 w-8 rounded-full border-2 border-border/60 shadow-sm"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className="text-[10px] text-muted-foreground">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-muted-foreground">{phone.description}</p>

          <div>
            <h3 className="font-semibold">Key Features</h3>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {phone.features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-google-green shrink-0" /> {f}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="flex-1 gradient-cta border-0 text-primary-foreground gap-2" onClick={() => addToCart(phone)}>
              <ShoppingCart className="h-4 w-4" /> Add to Cart
            </Button>
            <Link to="/cart" className="sm:flex-none">
              <Button size="lg" variant="outline" className="w-full" onClick={() => addToCart(phone)}>Buy Now</Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Shivaami Advantages — Highlighted Banner */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16"
      >
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-google-green/5 to-google-yellow/5 p-6 sm:p-10">
          {/* Decorative glows */}
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-[60px]" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-google-green/10 blur-[60px]" />

          <div className="relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
              <motion.span
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground uppercase tracking-wider shadow-lg shadow-primary/30"
              >
                <Sparkles className="h-3.5 w-3.5" /> Exclusive Benefits
              </motion.span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground">
                The Shivaami Advantage
              </h2>
            </div>

            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {shivaamiAdvantages.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex items-start gap-3 rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.bg}`}>
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground leading-tight">{item.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <section className="mt-12 sm:mt-16">
        <h2 className="text-2xl font-bold">Specifications</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {specs.map(([key, val]) => (
            <div key={key} className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
              <span className="text-sm font-medium capitalize text-muted-foreground">{key}</span>
              <span className="text-sm font-semibold text-foreground text-right max-w-[60%]">{val}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 sm:mt-16">
        <h2 className="text-2xl font-bold">Reviews</h2>
        <div className="mt-6 space-y-4">
          {[{ name: "Alex T.", text: `Absolutely love the ${phone.name}. Best purchase this year!`, rating: 5 }, { name: "Maria L.", text: "Camera quality is incredible. The AI features actually make a difference.", rating: 4 }].map((r) => (
            <div key={r.name} className="rounded-xl border border-border bg-card p-5">
              <div className="flex gap-0.5">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-google-yellow text-google-yellow" />)}</div>
              <p className="mt-2 text-sm text-muted-foreground">"{r.text}"</p>
              <p className="mt-2 text-xs font-semibold text-foreground">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 sm:mt-16">
        <h2 className="text-2xl font-bold">You May Also Like</h2>
        <div className="mt-6 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p, i) => <PhoneCard key={p.id} phone={p} index={i} />)}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
