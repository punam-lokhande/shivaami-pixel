import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Camera, Cpu, Battery, Shield, Star, ArrowRight, Sparkles, Zap, ChevronRight } from "lucide-react";
import { phones, formatPrice } from "@/data/phones";
import PhoneCard from "@/components/PhoneCard";
import { Button } from "@/components/ui/button";
import pixelLogo from "@/assets/pixel-logo.svg";
import heroPhoneImg from "@/assets/pixel-10a-hero.png";

const features = [
  { icon: Camera, title: "AI Camera", desc: "Camera Coach, Add Me, Magic Eraser — every photo is stunning", color: "text-google-blue", bg: "bg-google-blue/10" },
  { icon: Battery, title: "30+ Hours Battery", desc: "All-day power with fast charging and wireless charging", color: "text-google-green", bg: "bg-google-green/10" },
  { icon: Cpu, title: "Tensor G5 Chip", desc: "Next-gen chip built by Google for peak AI performance", color: "text-google-red", bg: "bg-google-red/10" },
  { icon: Shield, title: "Titan M2 Security", desc: "7 years of updates, IP68 water resistance, built to last", color: "text-google-yellow", bg: "bg-google-yellow/10" },
];

const testimonials = [
  { name: "Sarah K.", role: "Photographer", text: "The Pixel camera is simply unmatched. Night Sight shots look like they were taken by a professional.", rating: 5, avatar: "S" },
  { name: "James R.", role: "Developer", text: "Stock Android experience with AI features that actually work. Best phone I've ever owned.", rating: 5, avatar: "J" },
  { name: "Priya M.", role: "Content Creator", text: "Magic Eraser and Video Boost changed how I create content. Absolutely love my Pixel 10 Pro.", rating: 5, avatar: "P" },
];

const heroPhone = phones.find((p) => p.id === "pixel-10a")!;

const Index = () => (
  <div className="min-h-screen">
    {/* Hero — Pixel 10a */}
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-google-blue/10 blur-[100px] animate-float" />
        <div className="absolute top-1/2 -left-32 h-[500px] w-[500px] rounded-full bg-google-green/8 blur-[100px] animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute -bottom-20 right-1/4 h-[400px] w-[400px] rounded-full bg-google-yellow/8 blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/4 left-1/2 h-[300px] w-[300px] rounded-full bg-google-red/5 blur-[80px] animate-float" style={{ animationDelay: "3s" }} />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="container relative py-20 md:py-28 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Copy */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="inline-flex items-center gap-2 rounded-full border border-google-blue/20 bg-google-blue/5 px-4 py-1.5 text-xs font-semibold text-google-blue backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-google-blue opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-google-blue" />
              </span>
              Just Launched
            </motion.div>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl text-foreground">
              Meet the New<br />
              <span className="text-gradient bg-clip-text">Google Pixel 10a</span>
            </h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed md:text-xl">
              Everything you need, powered by Google AI. Stunning camera, all-day battery — starting at just{" "}
              <span className="inline-flex items-baseline gap-1 font-bold text-foreground text-xl">{formatPrice(heroPhone.price)}</span>
            </motion.p>

            {/* Stats row */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 grid grid-cols-4 gap-3">
              {[
                { value: "50MP", label: "AI Camera", color: "border-google-blue/20 bg-google-blue/5" },
                { value: "30+hrs", label: "Battery", color: "border-google-green/20 bg-google-green/5" },
                { value: "Tensor G5", label: "Chip", color: "border-google-red/20 bg-google-red/5" },
                { value: "7 Years", label: "Updates", color: "border-google-yellow/20 bg-google-yellow/5" },
              ].map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.08 }} className={`rounded-xl border ${s.color} p-3 text-center backdrop-blur-sm`}>
                  <p className="text-lg font-bold text-foreground md:text-xl leading-tight">{s.value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-10 flex flex-wrap gap-3">
              <Link to={`/product/${heroPhone.slug}`}>
                <Button size="lg" className="gradient-cta border-0 text-primary-foreground gap-2 rounded-full px-10 py-6 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02] transition-all duration-300">
                  Buy Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to={`/product/${heroPhone.slug}`}>
                <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-base hover:bg-secondary transition-all duration-300">
                  Explore Features
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Product showcase */}
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.25, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="relative hidden lg:flex items-center justify-center">
            {/* Glow ring behind phone */}
            <div className="absolute inset-0 m-auto h-[420px] w-[420px] rounded-full bg-gradient-to-br from-google-blue/15 via-google-green/10 to-google-yellow/10 blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
            
            {/* Glass card */}
            <div className="relative rounded-[2rem] border border-border/40 bg-gradient-to-b from-card/80 to-card/40 p-10 backdrop-blur-xl shadow-[0_30px_80px_-20px_hsl(var(--google-blue)/0.15)]">
              {/* Decorative rings */}
              <div className="absolute -top-8 -left-8 h-16 w-16 rounded-full border border-google-blue/10" />
              <div className="absolute -bottom-6 -right-6 h-12 w-12 rounded-full border border-google-green/10" />
              
              <img src={heroPhone.image} alt={heroPhone.name} className="h-[340px] w-auto object-contain animate-float drop-shadow-2xl" width={400} height={400} />
              
              {/* Badge */}
              <motion.div initial={{ scale: 0, rotate: -12 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.8, type: "spring", stiffness: 200 }} className="absolute -top-4 -right-4 flex items-center gap-1.5 rounded-full bg-google-red px-4 py-2 text-xs font-bold text-primary-foreground shadow-lg shadow-google-red/30">
                <Sparkles className="h-3.5 w-3.5" /> New Launch
              </motion.div>

              {/* Price tag */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-6 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border/50 p-4 text-center">
                <p className="font-bold text-lg text-foreground">{heroPhone.name}</p>
                <p className="text-sm text-muted-foreground mt-0.5">Starting at <span className="text-google-blue font-semibold">{formatPrice(heroPhone.price)}</span></p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <div className="h-8 w-[1px] bg-gradient-to-b from-muted-foreground/40 to-transparent animate-pulse" />
      </motion.div>
    </section>

    {/* Brand bar */}
    <section className="border-y border-border bg-secondary/30">
      <div className="container flex items-center justify-center gap-4 py-5">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Official Partner</span>
        <img src={pixelLogo} alt="Google Pixel" className="h-5 w-auto opacity-60" />
      </div>
    </section>

    {/* Feature Highlights */}
    <section className="container py-20 md:py-28">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Why Pixel</span>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl text-foreground">Built Different. Built Better.</h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">Every Pixel phone is designed with cutting-edge AI, premium materials, and Google's best software.</p>
      </motion.div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group rounded-2xl border border-border bg-card p-6 shadow-soft text-center transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
            <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${f.bg} transition-transform duration-300 group-hover:scale-110`}>
              <f.icon className={`h-7 w-7 ${f.color}`} />
            </div>
            <h3 className="mt-4 font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Product Showcase Grid */}
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">The Lineup</span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl text-foreground">Explore the Collection</h2>
          <p className="mt-3 text-muted-foreground">Find the perfect Pixel for your lifestyle</p>
        </motion.div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {phones.map((phone, i) => <PhoneCard key={phone.id} phone={phone} index={i} />)}
        </div>
        <div className="mt-10 text-center">
          <Link to="/products">
            <Button variant="outline" className="rounded-full gap-2 px-8">
              View All Phones <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Comparison CTA */}
    <section className="container py-20 md:py-28">
      <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-google-blue/5 via-transparent to-google-green/5" />
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-google-yellow/8 blur-3xl" />
        <div className="relative">
          <Zap className="mx-auto h-10 w-10 text-google-yellow mb-4" />
          <h2 className="text-3xl font-bold md:text-4xl text-foreground">Not Sure Which to Pick?</h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">Compare all 6 Pixel models side by side and find your perfect match</p>
          <Link to="/compare">
            <Button size="lg" className="mt-8 gradient-cta border-0 text-primary-foreground gap-2 rounded-full px-10 shadow-lg shadow-primary/25">
              Compare All Models <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>

    {/* Testimonials */}
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Testimonials</span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl text-foreground">Loved by Pixel Fans</h2>
        </motion.div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-hover">
              <div className="flex gap-0.5">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-google-yellow text-google-yellow" />)}</div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">{t.avatar}</div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Newsletter */}
    <section className="container py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl gradient-hero border border-border p-10 md:p-14 text-center">
        <h2 className="text-2xl font-bold md:text-3xl text-foreground">Stay in the Loop</h2>
        <p className="mt-2 text-muted-foreground">Get notified about new Pixel drops and exclusive offers</p>
        <div className="mt-6 flex max-w-md mx-auto gap-3">
          <input type="email" placeholder="Enter your email" className="flex-1 rounded-full border border-border bg-background px-5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
          <Button className="gradient-cta border-0 text-primary-foreground rounded-full px-6">Subscribe</Button>
        </div>
      </motion.div>
    </section>
  </div>
);

export default Index;
