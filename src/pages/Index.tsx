import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Camera, Cpu, Battery, Shield, Star, ArrowRight, Sparkles, Zap, ChevronRight } from "lucide-react";
import { phones, formatPrice } from "@/data/phones";
import PhoneCard from "@/components/PhoneCard";
import { Button } from "@/components/ui/button";
import pixelLogo from "@/assets/pixel-logo.svg";

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
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-google-blue/8 blur-3xl animate-float" />
        <div className="absolute top-20 -left-20 h-[400px] w-[400px] rounded-full bg-google-green/6 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-0 right-1/3 h-[300px] w-[300px] rounded-full bg-google-yellow/6 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative py-20 md:py-32 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-google-yellow" />
              New Launch — Google Pixel 10a
            </motion.div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl text-foreground">
              Meet the New<br />
              <span className="text-gradient">Google Pixel 10a</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground leading-relaxed">
              Everything you need, powered by Google AI. Stunning camera, 30+ hour battery, durable design — starting at just <strong className="text-foreground">{formatPrice(heroPhone.price)}</strong>.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { value: "50MP", label: "AI Camera" },
                { value: "30+ hrs", label: "Battery" },
                { value: "Tensor G5", label: "Chip" },
                { value: "7 Years", label: "Updates" },
              ].map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}>
                  <p className="text-xl font-bold text-foreground md:text-2xl">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to={`/product/${heroPhone.slug}`}>
                <Button size="lg" className="gradient-cta border-0 text-primary-foreground gap-2 rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                  Buy Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to={`/product/${heroPhone.slug}`}>
                <Button size="lg" variant="outline" className="rounded-full px-8">Explore Features</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="relative hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-google-blue/10 via-transparent to-google-green/10 blur-2xl" />
            <div className="relative rounded-3xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm shadow-2xl">
              <img src={heroPhone.image} alt={heroPhone.name} className="h-80 w-auto object-contain animate-float" width={400} height={400} />
              <div className="absolute -top-3 -right-3 rounded-full bg-google-red px-3 py-1 text-xs font-bold text-primary-foreground shadow-lg">
                New Launch
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-foreground">{heroPhone.name}</p>
                <p className="text-sm text-muted-foreground">Starting at {formatPrice(heroPhone.price)}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
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
