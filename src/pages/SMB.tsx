import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck, Bot, GraduationCap, Cloud, Receipt, Settings, Shield, Truck,
  Smartphone, Briefcase, Users, Crown, Zap,
  ChevronRight, MessageCircle, ArrowRight,
  AlertTriangle, Lock, Clock, FileText,
  Camera, Cpu, Battery, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTeamImg from "@/assets/smb-hero-team.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const painPoints = [
  {
    icon: Zap,
    title: "Devices That Can't Keep Up",
    desc: "Slow phones. Dead batteries by 3 pm. Apps are crashing mid-meeting. Your team deserves better.",
    color: "text-google-red",
    bg: "bg-google-red/10",
  },
  {
    icon: Lock,
    title: "Security You Can't See",
    desc: "One unsecured device is all it takes. For an SMB, a breach isn't just an IT problem - it's a business crisis.",
    color: "text-google-blue",
    bg: "bg-google-blue/10",
  },
  {
    icon: Clock,
    title: "No Time to Manage It",
    desc: "You don't have a large IT team. Device setup, repairs, and warranty follow-ups shouldn't be anyone's full-time job.",
    color: "text-google-yellow",
    bg: "bg-google-yellow/10",
  },
  {
    icon: FileText,
    title: "Buying Devices is a Tax Headache",
    desc: "No proper invoice. No input tax credit. Most device purchases leave SMBs with zero financial benefit.",
    color: "text-google-green",
    bg: "bg-google-green/10",
  },
];

const pixelSolutions = [
  { icon: Camera, label: "AI-Powered Camera", desc: "Professional photos and video for marketing, documentation, and client work." },
  { icon: Shield, label: "Titan M2 Security", desc: "Hardware-level security chip protects business data from day one." },
  { icon: Battery, label: "All-Day Battery", desc: "Adaptive battery that lasts well beyond the workday." },
  { icon: Cpu, label: "Tensor G5 Chip", desc: "Purpose-built for AI tasks like transcription, translation, and smart replies." },
  { icon: Sparkles, label: "Google Gemini AI", desc: "Built-in AI assistant for drafting, summarizing, and automating workflows." },
  { icon: Settings, label: "Zero Touch Enrollment", desc: "Devices arrive pre-configured. No IT setup required." },
];

const roleRecommendations = [
  {
    role: "Always On the Move?",
    team: "Field Teams & Sales",
    model: "Pixel 9a",
    color: "border-google-green/30",
    accent: "text-google-green",
    bg: "bg-google-green/5",
    icon: Smartphone,
    slug: "pixel-9a",
  },
  {
    role: "Smart & Budget-Friendly?",
    team: "Growing Teams & New Hires",
    model: "Pixel 10a",
    color: "border-google-blue/30",
    accent: "text-google-blue",
    bg: "bg-google-blue/5",
    icon: Zap,
    slug: "pixel-10a",
  },
  {
    role: "Running the Day-to-Day?",
    team: "Operations & Management",
    model: "Pixel 10",
    color: "border-google-blue/30",
    accent: "text-google-blue",
    bg: "bg-google-blue/5",
    icon: Briefcase,
    slug: "pixel-10",
  },
  {
    role: "Representing the Business?",
    team: "Senior Leadership & Client-Facing",
    model: "Pixel 10 Pro",
    color: "border-google-yellow/30",
    accent: "text-google-yellow",
    bg: "bg-google-yellow/5",
    icon: Users,
    slug: "pixel-10-pro",
  },
  {
    role: "Need to Do It All?",
    team: "Founders & Power Users",
    model: "Pixel 10 Pro Fold",
    color: "border-google-red/30",
    accent: "text-google-red",
    bg: "bg-google-red/5",
    icon: Crown,
    slug: "pixel-10-pro-fold",
  },
];

const shivaamiAdvantages = [
  { icon: ShieldCheck, title: "2-Year Device Protection", desc: "Drop it, spill on it, crack it - your Pixel is covered. Every bulk order includes free accidental and liquid damage protection by OneAssist, at zero extra cost.", color: "text-google-blue", bg: "bg-google-blue/10" },
  { icon: Bot, title: "Google Gemini AI - Free with Every Device", desc: "Don't pay extra for AI. Every Pixel comes with 6 to 12 months of Google Gemini AI included, so your team starts working smarter from day one.", color: "text-google-red", bg: "bg-google-red/10" },
  { icon: GraduationCap, title: "AI Workshops by Google & Shivaami", desc: "Buying devices is only half the job. We run hands-on AI workshops, so your team actually knows how to use what they have and gets real value from day one.", color: "text-google-yellow", bg: "bg-google-yellow/10" },
  { icon: Cloud, title: "Free Google Cloud Storage", desc: "Never lose a contact, photo, or file again. Get up to 12 months of free Google Cloud Storage with every device. Choose 3, 6, or 12 months based on your plan.", color: "text-google-green", bg: "bg-google-green/10" },
  { icon: Receipt, title: "Corporate Pricing + GST Benefits", desc: "Bulk orders deserve better pricing. Get exclusive corporate rates, proper GST invoicing, and input tax credit on every purchase, real savings that show up on your balance sheet.", color: "text-google-blue", bg: "bg-google-blue/10" },
  { icon: Settings, title: "Zero Touch Deployment", desc: "No IT headaches. Devices arrive fully configured and ready to use straight out of the box; your team just switches on and gets to work.", color: "text-google-red", bg: "bg-google-red/10" },
  { icon: Shield, title: "1 Extra Year of Warranty - Only at Shivaami", desc: "Every Pixel comes with Google's standard 1-year warranty. Shivaami adds one more year on top, so your devices stay covered, and your investment stays protected.", color: "text-google-yellow", bg: "bg-google-yellow/10" },
  { icon: Truck, title: "Free Pan-India Pickup & Drop - First Year", desc: "Any return, replacement, or service request in the first year? We handle the full pickup and drop across all pincodes. Your team doesn't lift a finger.", color: "text-google-green", bg: "bg-google-green/10" },
];

const faqs = [
  { q: "What is the minimum order for bulk pricing?", a: "Bulk corporate pricing applies to 5 devices and above. Contact us for a custom quote based on your team size and budget." },
  { q: "Do I get a GST invoice?", a: "Yes. Every order includes a proper GST invoice so you can claim input tax credit and reduce your net purchase cost." },
  { q: "How long does delivery take?", a: "Most bulk orders are delivered within 5 to 7 business days across India. Devices are pre-configured before shipping at no extra charge." },
  { q: "Which Pixel model is right for my team?", a: "It depends on your team's roles and budget. Our account managers will help you pick the right model, get in touch, and we'll sort it out in one call." },
  { q: "What if a device needs to be returned or replaced?", a: "We offer free pickup and drop-off for any return, replacement, or service request within the first year, across all pincodes in India." },
];

const SMB = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SECTION 1 - Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/40 to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-google-blue/20 blur-[100px]" />
          <div className="absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-google-green/15 blur-[100px]" />
        </div>
        <div className="container relative px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 py-8 sm:py-12 md:py-16 lg:py-20">
            {/* Left - Text */}
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <motion.span {...fadeUp} className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4 sm:mb-6">
                Authorised Google Pixel Reseller - India
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                Your Team is Growing.{" "}
                <span className="text-gradient">Make Sure Their Tools Are Too.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-4 max-w-lg text-sm text-muted-foreground leading-relaxed sm:text-base md:text-lg mx-auto md:mx-0">
                Give every employee a phone that works as hard as they do, with AI built in, security out of the box, and zero setup needed. Starting at <span className="font-bold text-foreground">&#8377;40,627 + GST</span>.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-5 sm:mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-3">
                <Button size="lg" className="w-full sm:w-auto gradient-cta border-0 text-primary-foreground gap-2 rounded-full px-8 py-5 text-sm sm:text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Get a Bulk Quote <ArrowRight className="h-5 w-5" />
                </Button>
                <Link to="/products">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 py-5 text-sm sm:text-base font-semibold hover:bg-foreground hover:text-background transition-all duration-300">
                    Explore Pixel Models
                  </Button>
                </Link>
              </motion.div>
            </div>
            {/* Right - Team Image */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex-1 order-1 md:order-2 w-full max-w-lg md:max-w-none">
              <img src={heroTeamImg} alt="Team working in modern office" width={1920} height={1080} className="w-full h-auto rounded-2xl shadow-hover object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Pain Points */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container px-4 sm:px-6 py-14 sm:py-20">
          <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Running a Business is Hard Enough</h2>
          </motion.div>
          <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} mb-4`}>
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - Why Pixel */}
      <section className="border-t border-border">
        <div className="container px-4 sm:px-6 py-14 sm:py-20">
          <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">One Device. Everything Your Team Needs.</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Google Pixel combines AI, security, and performance in one device - purpose-built for the way modern teams work.</p>
          </motion.div>
          <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {pixelSolutions.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:shadow-md transition-all duration-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{item.label}</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Role Recommendations */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container px-4 sm:px-6 py-14 sm:py-20">
          <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">The Right Pixel for Every Role in Your Team</h2>
          </motion.div>
          <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {roleRecommendations.map((item, i) => (
              <motion.div
                key={item.model}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group rounded-2xl border-2 ${item.color} ${item.bg} p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="mb-4">
                  <item.icon className={`h-8 w-8 ${item.accent}`} />
                </div>
                <p className={`text-sm font-semibold ${item.accent} mb-1`}>{item.role}</p>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.model}</h3>
                <p className="text-xs text-muted-foreground mb-4">{item.team}</p>
                <Link to={`/product/${item.slug}`}>
                  <Button variant="outline" size="sm" className="rounded-full text-xs gap-1 group-hover:bg-foreground group-hover:text-background transition-all">
                    View Details <ChevronRight className="h-3 w-3" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - Shivaami Advantage */}
      <section className="border-t border-border">
        <div className="container px-4 sm:px-6 py-14 sm:py-20">
          <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground uppercase tracking-wider mb-4">
              <Sparkles className="h-3.5 w-3.5" /> Exclusive Benefits
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">The Shivaami Advantage - Exclusively for SMBs</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Every Pixel you buy from Shivaami comes with benefits no other reseller in India offers.</p>
          </motion.div>
          <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {shivaamiAdvantages.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group flex items-start gap-3 rounded-xl border border-border bg-card p-5 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.bg}`}>
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground leading-tight">{item.title}</h4>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gradient-cta border-0 text-primary-foreground rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 gap-2">
              Get a Bulk Quote Today <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 6 - FAQ */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container px-4 sm:px-6 py-14 sm:py-20">
          <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Questions SMBs Ask Us Most</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-5 overflow-hidden">
                  <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECTION 7 - Bottom CTA */}
      <section className="border-t border-border">
        <div className="container px-4 sm:px-6 py-16 sm:py-24">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Your Team Deserves Smarter Tools.{" "}
              <span className="text-primary">Let's Make It Happen.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Get exclusive SMB pricing, GST benefits, and a dedicated Shivaami account manager, all in one call.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gradient-cta border-0 text-primary-foreground rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 gap-2">
                Get a Bulk Quote Today <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SMB;
