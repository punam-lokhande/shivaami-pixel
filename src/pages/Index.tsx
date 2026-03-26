import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Camera, Cpu, Battery, Shield, ArrowRight, Sparkles, Zap, ChevronRight, ShieldCheck, GraduationCap, Cloud, Receipt, Settings, Bot, Truck } from "lucide-react";
import { phones, formatPrice } from "@/data/phones";
import PhoneCard from "@/components/PhoneCard";
import { Button } from "@/components/ui/button";
import pixelLogo from "@/assets/pixel-logo.svg";
import heroPhoneImg from "@/assets/pixel-10a-hero.png";

const Phone3DViewer = lazy(() => import("@/components/Phone3DViewer"));

const features = [
  { icon: Camera, title: "AI Camera", desc: "Camera Coach, Add Me, Magic Eraser — every photo is stunning", color: "text-google-blue", bg: "bg-google-blue/10" },
  { icon: Battery, title: "30+ Hours Battery", desc: "All-day power with fast charging and wireless charging", color: "text-google-green", bg: "bg-google-green/10" },
  { icon: Cpu, title: "Tensor G5 Chip", desc: "Next-gen chip built by Google for peak AI performance", color: "text-google-red", bg: "bg-google-red/10" },
  { icon: Shield, title: "Titan M2 Security", desc: "7 years of updates, IP68 water resistance, built to last", color: "text-google-yellow", bg: "bg-google-yellow/10" },
];


const heroPhone = phones.find((p) => p.id === "pixel-10a")!;

const Index = () => (
  <div className="min-h-screen">
    {/* Hero — Pixel 10a */}
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/40 to-background hero-section">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-google-blue/30 blur-[100px] animate-float" />
        <div className="absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-google-green/25 blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/3 left-1/3 h-[350px] w-[350px] rounded-full bg-google-yellow/20 blur-[80px] animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 right-1/4 h-[300px] w-[300px] rounded-full bg-google-red/15 blur-[90px] animate-float" style={{ animationDelay: "2s" }} />
        {/* Moving particles */}
        <div className="absolute top-[10%] left-[15%] h-3 w-3 rounded-full bg-google-blue/50 animate-hero-particle" />
        <div className="absolute top-[30%] right-[20%] h-2.5 w-2.5 rounded-full bg-google-red/40 animate-hero-particle" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[60%] left-[10%] h-2 w-2 rounded-full bg-google-green/50 animate-hero-particle" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[20%] right-[35%] h-3 w-3 rounded-full bg-google-yellow/40 animate-hero-particle" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-[20%] right-[10%] h-2.5 w-2.5 rounded-full bg-google-blue/40 animate-hero-particle" style={{ animationDelay: "4s" }} />
        {/* Rotating rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full border-2 border-google-blue/15 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full border-2 border-dashed border-google-green/12 animate-spin-slow-reverse" />
      </div>

      <div className="container relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 py-4 sm:py-6 md:py-10 lg:py-14 min-h-[calc(100vh-80px)] md:min-h-0 md:h-auto">
          {/* Left — Text content */}
          <div className="flex-1 text-center md:text-left order-1 md:order-1 pt-2 sm:pt-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-google-blue/20 bg-google-blue/5 px-4 py-1.5 text-xs sm:text-sm font-semibold text-google-blue backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-google-blue opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-google-blue" />
              </span>
              Just Launched — Pixel 10a
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-4 sm:mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
              AI in Your Palm.{" "}
              <span className="text-gradient">The Future in Your Pocket</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-3 sm:mt-4 max-w-lg text-sm text-muted-foreground leading-relaxed sm:text-base md:text-lg mx-auto md:mx-0">
              <strong className="text-foreground">Smarter AI</strong>, <strong className="text-foreground">Safer Devices</strong>, <strong className="text-foreground">Smoother Workflows</strong>. India's first authorised Google Pixel reseller, starting at just{" "}
              <span className="font-bold text-foreground">{formatPrice(heroPhone.price)}</span> <span className="text-xs text-google-green">+ GST</span>
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-5 sm:mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
              <Link to={`/product/${heroPhone.slug}`}>
                <Button size="lg" className="w-full sm:w-auto gradient-cta border-0 text-primary-foreground gap-2 rounded-full px-8 py-5 text-sm sm:text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-105 transition-all duration-300">
                  Buy Now <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to={`/product/${heroPhone.slug}`}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 py-5 text-sm sm:text-base font-semibold hover:bg-secondary transition-all duration-300">
                  Explore Features
                </Button>
              </Link>
            </motion.div>

            {/* Feature icons row */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-5 sm:mt-6 flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              {[
                { icon: Camera, label: "50MP Camera", color: "text-google-blue", bg: "bg-google-blue/10" },
                { icon: Battery, label: "30+ Hrs Battery", color: "text-google-green", bg: "bg-google-green/10" },
                { icon: Cpu, label: "Tensor G5", color: "text-google-red", bg: "bg-google-red/10" },
                { icon: Shield, label: "7 Yrs Updates", color: "text-google-yellow", bg: "bg-google-yellow/10" },
              ].map((f, i) => (
                <motion.div key={f.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.55 + i * 0.08 }} className="flex items-center gap-1.5">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${f.bg}`}>
                    <f.icon className={`h-3.5 w-3.5 ${f.color}`} />
                  </div>
                  <span className="text-xs font-medium text-foreground">{f.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Phone with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-1 flex justify-center order-2 md:order-2 h-[320px] sm:h-[400px] md:h-[500px] lg:h-[560px]"
          >
            {/* Vibrant glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[250px] sm:h-[350px] md:h-[450px] w-[250px] sm:w-[350px] md:w-[450px] rounded-full bg-gradient-to-br from-google-blue/25 via-primary/20 to-google-green/15 blur-[60px] sm:blur-[80px] animate-pulse-glow" />

            {/* 3D Phone Viewer */}
            <div className="relative z-10 w-full h-full">
              <Suspense fallback={
                <div className="flex items-center justify-center h-full">
                  <img src={heroPhoneImg} alt={heroPhone.name} className="h-[280px] sm:h-[360px] md:h-[460px] lg:h-[520px] w-auto object-contain animate-pulse" />
                </div>
              }>
                <Phone3DViewer modelSrc="/pixel-10a.glb" alt={heroPhone.name} poster={heroPhoneImg} />
              </Suspense>
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground/60 select-none">Drag to rotate</p>
            </div>

            {/* New Launch badge */}
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring", stiffness: 200 }} className="absolute top-[3%] right-[15%] flex items-center gap-1.5 rounded-full bg-google-red px-3 py-1.5 text-[10px] sm:text-xs font-bold text-primary-foreground shadow-lg shadow-google-red/30 z-20">
              <Sparkles className="h-3 w-3" /> New Launch
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* The Shivaami Advantage */}
    <section className="relative py-10 sm:py-14 md:py-20 overflow-hidden">
      {/* Animated background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-secondary/30" />
      <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-google-blue/5 blur-[100px] animate-float" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-google-green/5 blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-google-yellow/3 blur-[80px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, delay: 0.1 }} className="inline-flex items-center gap-2 rounded-full border border-google-green/20 bg-google-green/5 px-5 py-2 text-sm font-semibold text-google-green">
            <Sparkles className="h-4 w-4 animate-pulse" /> Only at Shivaami
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-5 text-3xl font-extrabold md:text-5xl text-foreground">
            The Shivaami Advantage
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Every Pixel purchased from Shivaami comes with exclusive benefits you won't find anywhere else.
          </motion.p>
        </motion.div>

        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-2 sm:px-0">
          {[
            { icon: ShieldCheck, title: "2-Year Device Protection", desc: "Accidental & liquid damage covered by OneAssist — at no extra cost", color: "text-google-blue", bg: "bg-google-blue/10", accentBg: "bg-google-blue", border: "border-google-blue/20", highlight: true },
            { icon: Bot, title: "1 Year Google Gemini AI Free", desc: "Your team starts using AI from day one — included with every device", color: "text-google-red", bg: "bg-google-red/10", accentBg: "bg-google-red", border: "border-google-red/20", highlight: true },
            { icon: GraduationCap, title: "AI Workshops by Google & Shivaami", desc: "Hands-on training so your team actually uses what they have", color: "text-google-yellow", bg: "bg-google-yellow/10", accentBg: "bg-google-yellow", border: "border-google-yellow/20" },
            { icon: Cloud, title: "Free Google Cloud Storage", desc: "3 / 6 / 12 months free — backup contacts, photos & videos", color: "text-google-green", bg: "bg-google-green/10", accentBg: "bg-google-green", border: "border-google-green/20" },
            { icon: Receipt, title: "Corporate Pricing + GST Benefits", desc: "Proper invoicing, input tax credit, and real savings for your business", color: "text-google-blue", bg: "bg-google-blue/10", accentBg: "bg-google-blue", border: "border-google-blue/20" },
            { icon: Settings, title: "Zero Touch Deployment", desc: "Devices arrive pre-configured and ready to use — zero setup needed", color: "text-google-red", bg: "bg-google-red/10", accentBg: "bg-google-red", border: "border-google-red/20" },
            { icon: Sparkles, title: "6 Months Gemini AI Free", desc: "Hit the ground running with Google's most capable AI from day one", color: "text-google-yellow", bg: "bg-google-yellow/10", accentBg: "bg-google-yellow", border: "border-google-yellow/20", highlight: true },
            { icon: Truck, title: "Free Pan-India Pickup & Drop", desc: "We collect and deliver across India — your team does nothing", color: "text-google-green", bg: "bg-google-green/10", accentBg: "bg-google-green", border: "border-google-green/20" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
              className={`group relative rounded-2xl border bg-card p-6 transition-shadow duration-300 hover:shadow-hover cursor-default ${item.highlight ? `${item.border} shadow-lg` : "border-border shadow-soft"}`}
            >
              {item.highlight && (
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 300 }} className="absolute -top-2.5 right-4 rounded-full bg-google-red px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-md">
                  Popular
                </motion.div>
              )}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
              >
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </motion.div>
              <h3 className="mt-4 font-bold text-foreground leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              {/* Animated bottom accent line */}
              <div className={`mt-4 h-0.5 w-0 rounded-full ${item.accentBg} group-hover:w-full transition-all duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-12 text-center">
          <Link to="/products">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Button size="lg" className="gradient-cta border-0 text-primary-foreground gap-2 rounded-full px-10 py-6 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl transition-shadow duration-300">
                Shop with Shivaami Advantage <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Brand bar */}
    <section className="border-y border-border bg-secondary/30">
      <div className="container flex items-center justify-center gap-4 py-5">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Official Partner</span>
        <img src={pixelLogo} alt="Google Pixel" className="h-5 w-auto opacity-60" />
      </div>
    </section>

    {/* Product Showcase Grid */}
    <section className="relative py-10 sm:py-14 md:py-20">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container relative px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">The Lineup</span>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl text-foreground">Explore the Collection</h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">Find the perfect Pixel for your lifestyle</p>
        </motion.div>
        <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
    <section className="container py-10 sm:py-14 md:py-20 px-4 sm:px-6">
      <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border p-6 sm:p-10 md:p-14 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-google-blue/5 via-transparent to-google-green/5" />
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-google-yellow/8 blur-3xl" />
        <div className="relative">
          <Zap className="mx-auto h-10 w-10 text-google-yellow mb-4" />
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl text-foreground">Not Sure Which to Pick?</h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-md mx-auto">Compare all 6 Pixel models side by side and find your perfect match</p>
          <Link to="/compare">
            <Button size="lg" className="mt-8 gradient-cta border-0 text-primary-foreground gap-2 rounded-full px-10 shadow-lg shadow-primary/25">
              Compare All Models <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>

    {/* Feature Highlights (Why Pixel) */}
    <section className="container py-10 sm:py-14 md:py-20 px-4 sm:px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Why Pixel</span>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl text-foreground">Built Different. Built Better.</h2>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">Every Pixel phone is designed with cutting-edge AI, premium materials, and Google's best software.</p>
      </motion.div>
      <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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

    {/* Newsletter */}
    <section className="container py-10 sm:py-14 px-4 sm:px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl sm:rounded-3xl gradient-hero border border-border p-6 sm:p-10 md:p-14 text-center">
        <h2 className="text-xl font-bold sm:text-2xl md:text-3xl text-foreground">Stay in the Loop</h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">Get notified about new Pixel drops and exclusive offers</p>
        <div className="mt-6 flex flex-col sm:flex-row max-w-md mx-auto gap-3">
          <input type="email" placeholder="Enter your email" className="flex-1 rounded-full border border-border bg-background px-5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
          <Button className="gradient-cta border-0 text-primary-foreground rounded-full px-6">Subscribe</Button>
        </div>
      </motion.div>
    </section>
  </div>
);

export default Index;
