import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Truck, Bot, Shield, Cloud, Receipt, Settings, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const shivaamiAdvantages = [
  { icon: ShieldCheck, title: "2-Year Device Protection", desc: "Drop it, spill on it, crack it, your Pixel is covered. Every bulk order includes free accidental and liquid damage protection by OneAssist, at zero extra cost.", color: "text-google-blue", bg: "bg-google-blue/10", accentBg: "bg-google-blue", border: "border-google-blue/20", highlight: true },
  { icon: Truck, title: "Free Pan-India Pickup & Drop - First Year", desc: "Any return, replacement, or service request in the first year? We handle the full pickup and drop across all pincodes. Your team doesn't lift a finger.", color: "text-google-green", bg: "bg-google-green/10", accentBg: "bg-google-green", border: "border-google-green/20" },
  { icon: Bot, title: "Google Gemini AI - Free with Every Device", desc: "Get 6 to 12 months of Google Gemini AI included, depending on your Pixel model. Your team starts working smarter from day one, and no extra purchase is needed.", color: "text-google-red", bg: "bg-google-red/10", accentBg: "bg-google-red", border: "border-google-red/20", highlight: true },
  { icon: Shield, title: "1+1 Warranty Advantage — Only at Shivaami", desc: "Get 2 years of total protection on every Pixel. More coverage. More confidence. More value.", color: "text-google-yellow", bg: "bg-google-yellow/10", accentBg: "bg-google-yellow", border: "border-google-yellow/20", highlight: true },
  { icon: Cloud, title: "Free Google Cloud Storage", desc: "Never lose a contact, photo, or file again. Get up to 12 months of free Google Cloud Storage with every device. Choose 3, 6, or 12 months based on your plan.", color: "text-google-green", bg: "bg-google-green/10", accentBg: "bg-google-green", border: "border-google-green/20" },
  { icon: Receipt, title: "Corporate Pricing + GST Savings", desc: "Better prices. Full GST benefits. More value on every order.", color: "text-google-blue", bg: "bg-google-blue/10", accentBg: "bg-google-blue", border: "border-google-blue/20" },
  { icon: Settings, title: "Zero Touch Deployment", desc: "No IT headaches. Devices arrive fully configured and ready to use straight out of the box. Your team just switches on and gets to work.", color: "text-google-red", bg: "bg-google-red/10", accentBg: "bg-google-red", border: "border-google-red/20" },
  { icon: GraduationCap, title: "AI Workshops by Google & Shivaami", desc: "Buying devices is only half the job. We run hands-on AI workshops, so your team actually knows how to use what they have and gets real value from day one.", color: "text-google-yellow", bg: "bg-google-yellow/10", accentBg: "bg-google-yellow", border: "border-google-yellow/20" },
];

const ShivaamiAdvantage = () => (
  <section className="relative py-10 sm:py-14 md:py-20 overflow-hidden">
    {/* Animated background accents */}
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-secondary/30" />
    <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-google-blue/5 blur-[100px] animate-float" />
    <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-google-green/5 blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-google-yellow/3 blur-[80px] animate-float" style={{ animationDelay: "3s" }} />

    <div className="container relative">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border-2 border-google-green/40 bg-gradient-to-r from-google-green/15 via-google-blue/10 to-google-yellow/10 px-6 py-2.5 text-sm sm:text-base font-bold text-google-green shadow-lg shadow-google-green/20 backdrop-blur-sm"
        >
          <motion.span animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
            <Sparkles className="h-5 w-5" />
          </motion.span>
          Only at Shivaami
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-5 text-3xl font-extrabold md:text-5xl text-foreground">
          The Shivaami Advantage
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          Every Pixel purchased from Shivaami comes with exclusive benefits you won't find anywhere else.
        </motion.p>
      </motion.div>

      <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-2 sm:px-0">
        {shivaamiAdvantages.map((item, i) => (
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
);

export default ShivaamiAdvantage;
