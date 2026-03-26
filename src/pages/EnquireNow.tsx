import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Phone, Mail, User, Users, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { phones } from "@/data/phones";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Valid phone number required").max(15),
  quantity: z.string().min(1, "Select quantity range"),
  model: z.string().min(1, "Select a model"),
  message: z.string().trim().max(1000).optional(),
});

type EnquiryForm = z.infer<typeof enquirySchema>;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const quantityOptions = [
  "5 - 10 devices",
  "11 - 25 devices",
  "26 - 50 devices",
  "51 - 100 devices",
  "100+ devices",
];

const benefits = [
  "Exclusive corporate pricing on all Pixel models",
  "Proper GST invoicing with input tax credit",
  "Free 2-year device protection by OneAssist",
  "1 extra year of warranty — only at Shivaami",
  "Zero Touch Deployment — devices arrive ready to use",
  "Free pan-India pickup & drop in the first year",
];

const EnquireNow = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryForm, string>>>({});
  const [form, setForm] = useState<EnquiryForm>({
    name: "",
    company: "",
    email: "",
    phone: "",
    quantity: "",
    model: "",
    message: "",
  });

  const handleChange = (field: keyof EnquiryForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof EnquiryForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof EnquiryForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast({ title: "Enquiry Submitted!", description: "Our team will get back to you within 24 hours." });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-google-green/10">
            <CheckCircle2 className="h-10 w-10 text-google-green" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Thank You!</h2>
          <p className="text-muted-foreground mb-6">
            Your bulk order enquiry has been submitted successfully. Our team will reach out to you within 24 hours with a custom quote.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full px-6">
            Submit Another Enquiry
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-gradient-to-br from-background via-secondary/40 to-background">
        <div className="container px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left — Form */}
            <motion.div {...fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                Bulk Order Enquiry
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight mb-2">
                Get a Custom Quote for Your Team
              </h1>
              <p className="text-muted-foreground mb-8 max-w-md">
                Fill in the details below and our team will get back to you within 24 hours with exclusive corporate pricing.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={`pl-10 ${errors.name ? "border-destructive" : ""}`}
                        maxLength={100}
                      />
                    </div>
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Company Name *</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Your company"
                        value={form.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className={`pl-10 ${errors.company ? "border-destructive" : ""}`}
                        maxLength={100}
                      />
                    </div>
                    {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`pl-10 ${errors.email ? "border-destructive" : ""}`}
                        maxLength={255}
                      />
                    </div>
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={`pl-10 ${errors.phone ? "border-destructive" : ""}`}
                        maxLength={15}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Quantity *</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                      <Select value={form.quantity} onValueChange={(v) => handleChange("quantity", v)}>
                        <SelectTrigger className={`pl-10 ${errors.quantity ? "border-destructive" : ""}`}>
                          <SelectValue placeholder="Select quantity" />
                        </SelectTrigger>
                        <SelectContent>
                          {quantityOptions.map((q) => (
                            <SelectItem key={q} value={q}>{q}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {errors.quantity && <p className="text-xs text-destructive mt-1">{errors.quantity}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Model *</label>
                    <Select value={form.model} onValueChange={(v) => handleChange("model", v)}>
                      <SelectTrigger className={errors.model ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        {phones.map((p) => (
                          <SelectItem key={p.id} value={p.name}>{p.name}</SelectItem>
                        ))}
                        <SelectItem value="Multiple Models">Multiple Models</SelectItem>
                        <SelectItem value="Need Recommendation">Need Recommendation</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.model && <p className="text-xs text-destructive mt-1">{errors.model}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Additional Requirements</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      placeholder="Any specific requirements, preferred colors, delivery timeline..."
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="pl-10 min-h-[100px]"
                      maxLength={1000}
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto gradient-cta border-0 text-primary-foreground rounded-full px-10 py-5 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 gap-2">
                  Submit Enquiry <ArrowRight className="h-5 w-5" />
                </Button>
              </form>
            </motion.div>

            {/* Right — Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h3 className="text-lg font-bold text-foreground mb-6">Why Order from Shivaami?</h3>
                <ul className="space-y-4">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-google-green shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-xl bg-primary/5 p-5">
                  <p className="text-sm font-semibold text-foreground mb-1">Need help choosing?</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Not sure which model or quantity is right for your team? Select "Need Recommendation" and our team will help you find the perfect fit.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnquireNow;
