import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Building2, Phone, Mail, User, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { phones } from "@/data/phones";
import { z } from "zod";
import { API_ENDPOINTS } from "@/utils/api";

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Valid phone number required").max(15),
  gstNumber: z.string().trim().max(15, "GST number must be 15 characters").optional().or(z.literal("")),
  quantity: z.string().min(1, "Select quantity range"),
  model: z.string().min(1, "Select a model"),
  message: z.string().trim().max(1000).optional(),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

const quantityOptions = [
  "1 - 5 devices",
  "6 - 10 devices",
  "11 - 25 devices",
  "26 - 50 devices",
  "51 - 100 devices",
  "100+ devices",
];

const EnquiryForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormValues, string>>>({});
  const [form, setForm] = useState<EnquiryFormValues>({
    name: "",
    company: "",
    email: "",
    phone: "",
    gstNumber: "",
    quantity: "",
    model: "",
    message: "",
  });

  const handleChange = (field: keyof EnquiryFormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof EnquiryFormValues, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof EnquiryFormValues;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(API_ENDPOINTS.INSERT_GOOGLE_PIXEL_ENQUIRY_DETAILS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "An error occurred on the server." }));
        throw new Error(errorData.message || `Server responded with status: ${response.status}`);
      }
      setErrors({});
      navigate("/thank-you");
      toast({ title: "Enquiry Submitted!", description: "Our team will get back to you within 24 hours." });
    } catch (error) {
      console.error("Failed to submit enquiry:", error);
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Your full name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className={`pl-10 ${errors.name ? "border-destructive" : ""}`} maxLength={100} />
          </div>
          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Company Name *</label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Your company" value={form.company} onChange={(e) => handleChange("company", e.target.value)} className={`pl-10 ${errors.company ? "border-destructive" : ""}`} maxLength={100} />
          </div>
          {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Business Email *</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="email" placeholder="you@company.com" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className={`pl-10 ${errors.email ? "border-destructive" : ""}`} maxLength={255} />
          </div>
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className={`pl-10 ${errors.phone ? "border-destructive" : ""}`} maxLength={15} />
          </div>
          {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-foreground mb-1.5 block">GST Number</label>
        <Input type="text" placeholder="e.g. 22AAAAA0000A1Z5" value={form.gstNumber} onChange={(e) => handleChange("gstNumber", e.target.value.toUpperCase())} className={`${errors.gstNumber ? "border-destructive" : ""}`} maxLength={15} />
        {errors.gstNumber && <p className="text-xs text-destructive mt-1">{errors.gstNumber}</p>}
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
          <Textarea placeholder="Any specific requirements, preferred colors, delivery timeline..." value={form.message} onChange={(e) => handleChange("message", e.target.value)} className="pl-10 min-h-[100px]" maxLength={1000} />
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto gradient-cta border-0 text-primary-foreground rounded-full px-10 py-5 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 gap-2" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : (<>Submit Enquiry <ArrowRight className="h-5 w-5" /></>)}
      </Button>
    </form>
  );
};

export default EnquiryForm;
