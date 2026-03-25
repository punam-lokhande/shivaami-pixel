import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Camera, Cpu, Battery, Shield, Star, ArrowRight } from "lucide-react";
import { phones } from "@/data/phones";
import PhoneCard from "@/components/PhoneCard";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { icon: Camera, title: "AI Camera", desc: "Capture stunning photos with Google's advanced AI processing", color: "text-google-blue" },
  { icon: Cpu, title: "Performance", desc: "Powered by Google Tensor — fast, smart, and efficient", color: "text-google-red" },
  { icon: Battery, title: "All-Day Battery", desc: "Up to 5,500 mAh keeps you going from morning to night", color: "text-google-green" },
  { icon: Shield, title: "Titan M2 Security", desc: "Industry-leading security with 7 years of guaranteed updates", color: "text-google-yellow" },
];

const testimonials = [
  { name: "Sarah K.", role: "Photographer", text: "The Pixel camera is simply unmatched. Night mode shots look like they were taken by a professional.", rating: 5 },
  { name: "James R.", role: "Developer", text: "Stock Android experience with AI features that actually work. Best phone I've ever owned.", rating: 5 },
  { name: "Priya M.", role: "Content Creator", text: "Magic Eraser and Video Boost changed how I create content. Absolutely love my Pixel 10 Pro.", rating: 5 },
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative overflow-hidden gradient-hero">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="container relative py-20 md:py-32">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Experience the Power of <span className="text-gradient">Google Pixel</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">Discover the latest Google Pixel smartphones — where AI meets beautiful design. From Shivaami, your trusted Pixel partner.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products">
              <Button size="lg" className="gradient-cta border-0 text-primary-foreground gap-2">
                Shop Now <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/compare">
              <Button size="lg" variant="outline">Compare Models</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="container py-16 md:py-24">
      <h2 className="text-center text-3xl font-bold">Why Choose Pixel?</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-border bg-card p-6 shadow-soft text-center">
            <f.icon className={`mx-auto h-10 w-10 ${f.color}`} />
            <h3 className="mt-4 font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Phone Grid */}
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container">
        <h2 className="text-center text-3xl font-bold">Explore the Lineup</h2>
        <p className="mt-2 text-center text-muted-foreground">Find the perfect Pixel for you</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {phones.map((phone, i) => <PhoneCard key={phone.id} phone={phone} index={i} />)}
        </div>
      </div>
    </section>

    {/* Comparison Preview */}
    <section className="container py-16 md:py-24">
      <div className="rounded-2xl gradient-hero border border-border p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold">Not Sure Which to Pick?</h2>
        <p className="mt-2 text-muted-foreground">Compare all 5 Pixel models side by side</p>
        <Link to="/compare">
          <Button size="lg" className="mt-6 gradient-cta border-0 text-primary-foreground gap-2">
            Compare All Models <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>

    {/* Testimonials */}
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container">
        <h2 className="text-center text-3xl font-bold">What Pixel Fans Say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex gap-0.5">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-google-yellow text-google-yellow" />)}</div>
              <p className="mt-3 text-sm text-muted-foreground">"{t.text}"</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Index;
