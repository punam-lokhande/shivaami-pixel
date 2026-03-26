import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart, Star, Check, ChevronRight,
  Camera, Cpu, Battery, Shield, Smartphone, Droplets, RefreshCw, Fingerprint,
  ShieldCheck, Bot, GraduationCap, Cloud, Receipt, Settings, Sparkles, Truck,
  Monitor, Wifi, Zap, Package
} from "lucide-react";
import { getPhoneBySlug, phones, formatPrice } from "@/data/phones";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import PhoneCard from "@/components/PhoneCard";

// Map spec keys to icons
const specIconMap: Record<string, React.ElementType> = {
  display: Monitor,
  camera: Camera,
  battery: Battery,
  processor: Cpu,
  ram: Zap,
  storage: Package,
  os: Smartphone,
  ai: Sparkles,
};

const shivaamiAdvantages = [
  { icon: ShieldCheck, title: "2-Year Device Protection", desc: "Accidental & liquid damage covered by OneAssist — at no extra cost", color: "text-google-blue", bg: "bg-google-blue/10" },
  { icon: Bot, title: "1 Year Google Gemini AI Free", desc: "Your team starts using AI from day one — included with every device", color: "text-google-red", bg: "bg-google-red/10" },
  { icon: GraduationCap, title: "AI Workshops by Google & Shivaami", desc: "Hands-on training so your team actually uses what they have", color: "text-google-yellow", bg: "bg-google-yellow/10" },
  { icon: Cloud, title: "Free Google Cloud Storage", desc: "3 / 6 / 12 months free — backup contacts, photos & videos", color: "text-google-green", bg: "bg-google-green/10" },
  { icon: Receipt, title: "Corporate Pricing + GST Benefits", desc: "Proper invoicing, input tax credit, and real savings for your business", color: "text-google-blue", bg: "bg-google-blue/10" },
  { icon: Settings, title: "Zero Touch Deployment", desc: "Devices arrive pre-configured and ready to use — zero setup needed", color: "text-google-red", bg: "bg-google-red/10" },
  { icon: Sparkles, title: "6 Months Gemini AI Free", desc: "Hit the ground running with Google's most capable AI from day one", color: "text-google-yellow", bg: "bg-google-yellow/10" },
  { icon: Truck, title: "Free Pan-India Pickup & Drop", desc: "We collect and deliver across India — your team does nothing", color: "text-google-green", bg: "bg-google-green/10" },
];

// Quick highlight icons per category
const getHighlightFeatures = (phone: ReturnType<typeof getPhoneBySlug>) => {
  if (!phone) return [];
  const cat = phone.category;
  if (cat === "foldable") {
    return [
      { icon: Monitor, label: "Flex Display" },
      { icon: Camera, label: "Pro Camera" },
      { icon: Fingerprint, label: "Face Unlock" },
    ];
  }
  return [
    { icon: Camera, label: "AI Camera" },
    { icon: Droplets, label: "IP68 Water Resistant" },
    { icon: RefreshCw, label: "7 Yrs Updates" },
  ];
};

const ProductDetail = () => {
  const { slug } = useParams();
  const phone = getPhoneBySlug(slug || "");
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handler = () => setShowStickyBar(window.scrollY > 300);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!phone) return <div className="container py-20 text-center text-muted-foreground">Phone not found</div>;

  const others = phones.filter((p) => p.id !== phone.id).slice(0, 3);
  const specs = Object.entries(phone.specs);
  const highlights = getHighlightFeatures(phone);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky top bar — Samsung style */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            exit={{ y: -60 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-md shadow-sm"
          >
            <div className="container flex items-center justify-between py-3 px-4 sm:px-6">
              <div>
                {phone.tag && <span className="text-xs font-bold text-google-red mr-2">{phone.tag}</span>}
                <span className="text-sm font-bold text-foreground sm:text-base">{phone.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-sm font-bold text-foreground">{formatPrice(phone.price)}</span>
                  {phone.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">{formatPrice(phone.originalPrice)}</span>
                  )}
                  <span className="text-xs text-google-green font-medium">+ GST</span>
                </div>
                <Button size="sm" className="gradient-cta border-0 text-primary-foreground rounded-full px-6 text-xs font-semibold" onClick={() => addToCart(phone)}>
                  Buy now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Breadcrumb */}
      <div className="container px-4 sm:px-6 pt-4 pb-2">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/products" className="hover:text-foreground transition-colors">Phones</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground font-medium">{phone.name}</span>
        </nav>
      </div>

      {/* Main content — two column */}
      <div className="container px-4 sm:px-6 pb-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px]">

          {/* LEFT — Phone image area */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
            {/* Phone image container */}
            <div className="sticky top-24 rounded-2xl border border-border bg-secondary/30 p-6 sm:p-10 flex flex-col items-center justify-center min-h-[400px] sm:min-h-[520px] overflow-hidden">
              {/* Color tint overlay */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={phone.colors[selectedColor]?.hex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.08 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 z-0 rounded-2xl"
                  style={{ backgroundColor: phone.colors[selectedColor]?.hex }}
                />
              </AnimatePresence>

              {phone.tag && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 left-4 z-20 rounded-full bg-google-red px-3 py-1 text-[10px] font-bold text-primary-foreground shadow-md"
                >
                  {phone.tag}
                </motion.span>
              )}

              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedColor}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={phone.image}
                  alt={`${phone.name} in ${phone.colors[selectedColor]?.name}`}
                  className="relative z-10 max-h-[320px] sm:max-h-[440px] object-contain drop-shadow-2xl"
                  width={500}
                  height={500}
                />
              </AnimatePresence>

              {/* Color name label */}
              <motion.p
                key={phone.colors[selectedColor]?.name}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm font-medium text-foreground"
              >
                {phone.colors[selectedColor]?.name}
              </motion.p>
            </div>

            {/* Feature highlight icons — below image like Samsung */}
            <div className="mt-6 flex items-center justify-center gap-6 sm:gap-10">
              {highlights.map((h) => (
                <div key={h.label} className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary border border-border">
                    <h.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="text-[11px] font-medium text-muted-foreground leading-tight max-w-[70px]">{h.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Configuration panel */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-6">

            {/* Product title & rating */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                {phone.tag && (
                  <span className="text-xs font-bold text-google-red">{phone.tag}</span>
                )}
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {phone.category === "foldable" ? "Foldable" : phone.category === "flagship" ? "Flagship" : "Mid-Range"}
                </span>
              </div>
              <h1 className="text-2xl font-bold md:text-3xl text-foreground leading-tight">{phone.name}</h1>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(phone.rating) ? "fill-google-yellow text-google-yellow" : "text-border"}`} />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">{phone.rating}</span>
                <span className="text-sm text-muted-foreground">({phone.reviews.toLocaleString()})</span>
              </div>
            </div>

            {/* Price */}
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-baseline gap-3">
                <p className="text-2xl font-bold text-foreground">{formatPrice(phone.price)}</p>
                {phone.originalPrice && (
                  <p className="text-base text-muted-foreground line-through">{formatPrice(phone.originalPrice)}</p>
                )}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                MRP: {formatPrice(Math.round(phone.price * 1.18))} <span className="text-muted-foreground/70">(Incl. of all taxes)</span>
              </p>
              {phone.originalPrice && (
                <p className="mt-1.5 text-xs font-semibold text-google-green">
                  Save {formatPrice(phone.originalPrice - phone.price)} on this purchase
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">{phone.description}</p>

            {/* Colour section — Samsung style */}
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">Colour</h3>
              <p className="text-xs text-muted-foreground mb-3">Select your favorite colour.</p>
              <div className="flex items-center gap-4">
                {phone.colors.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(i)}
                    className="group flex flex-col items-center gap-1.5 transition-all"
                  >
                    <span
                      className={`h-10 w-10 rounded-full shadow-sm transition-all duration-200 ${
                        selectedColor === i
                          ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110"
                          : "border-2 border-border/60 hover:border-border group-hover:scale-105"
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className={`text-[11px] font-medium transition-colors ${
                      selectedColor === i ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {c.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-base font-bold text-foreground mb-3">Key Features</h3>
              <div className="grid grid-cols-1 gap-2">
                {phone.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 rounded-lg bg-secondary/50 px-3 py-2.5 text-sm text-foreground">
                    <Check className="h-4 w-4 text-google-green shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <Button
                size="lg"
                className="w-full gradient-cta border-0 text-primary-foreground gap-2 rounded-full py-6 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                onClick={() => addToCart(phone)}
              >
                <ShoppingCart className="h-5 w-5" /> Add to Cart
              </Button>
              <Link to="/cart" onClick={() => addToCart(phone)}>
                <Button size="lg" variant="outline" className="w-full rounded-full py-6 text-base font-semibold hover:bg-secondary transition-all duration-300">
                  Buy Now
                </Button>
              </Link>
            </div>

            {/* Shivaami Advantage — compact */}
            <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-google-green/5 p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-primary-foreground uppercase tracking-wider">
                  <Sparkles className="h-3 w-3" /> Exclusive
                </span>
                <h3 className="text-sm font-bold text-foreground">The Shivaami Advantage</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {shivaamiAdvantages.map((item) => (
                  <div key={item.title} className="flex items-start gap-2.5 rounded-lg bg-card/80 border border-border/50 p-3">
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.bg}`}>
                      <item.icon className={`h-4 w-4 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground leading-tight">{item.title}</p>
                      <p className="mt-0.5 text-[10px] text-muted-foreground leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-width sections below */}
      <div className="border-t border-border">
        {/* Specifications */}
        <section className="container px-4 sm:px-6 py-10 sm:py-14">
          <h2 className="text-xl font-bold sm:text-2xl text-foreground">Specifications</h2>
          <p className="mt-1 text-sm text-muted-foreground">Technical details at a glance</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {specs.map(([key, val]) => {
              const Icon = specIconMap[key] || Smartphone;
              return (
                <div key={key} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:shadow-sm transition-shadow">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium capitalize text-muted-foreground">{key}</span>
                    <p className="text-sm font-semibold text-foreground truncate">{val}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* All Shivaami Advantages */}
        <section className="border-t border-border bg-secondary/20">
          <div className="container px-4 sm:px-6 py-10 sm:py-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" /> Exclusive Benefits
              </span>
              <h2 className="text-xl font-bold sm:text-2xl text-foreground">The Shivaami Advantage</h2>
            </div>
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {shivaamiAdvantages.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
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
        </section>

        {/* You May Also Like */}
        <section className="border-t border-border bg-secondary/20">
          <div className="container px-4 sm:px-6 py-10 sm:py-14">
            <h2 className="text-xl font-bold sm:text-2xl text-foreground">You May Also Like</h2>
            <p className="mt-1 text-sm text-muted-foreground">Explore more from the Pixel lineup</p>
            <div className="mt-6 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p, i) => <PhoneCard key={p.id} phone={p} index={i} />)}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
