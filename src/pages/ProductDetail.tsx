import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Star, Check } from "lucide-react";
import { getPhoneBySlug, phones } from "@/data/phones";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import PhoneCard from "@/components/PhoneCard";

const ProductDetail = () => {
  const { slug } = useParams();
  const phone = getPhoneBySlug(slug || "");
  const { addToCart } = useCart();

  if (!phone) return <div className="container py-20 text-center text-muted-foreground">Phone not found</div>;

  const others = phones.filter((p) => p.id !== phone.id).slice(0, 3);
  const specs = Object.entries(phone.specs);

  return (
    <div className="container py-10">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="gradient-card rounded-2xl border border-border p-8 flex items-center justify-center">
          <img src={phone.image} alt={phone.name} className="max-h-[500px] object-contain" width={500} height={500} />
        </motion.div>

        {/* Info */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
          <div>
            <p className="text-sm font-medium text-primary">{phone.category === "foldable" ? "Foldable" : phone.category === "flagship" ? "Flagship" : "Mid-Range"}</p>
            <h1 className="mt-1 text-3xl font-bold md:text-4xl">{phone.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`h-4 w-4 ${i < Math.floor(phone.rating) ? "fill-google-yellow text-google-yellow" : "text-border"}`} />)}</div>
              <span className="text-sm text-muted-foreground">{phone.rating} ({phone.reviews} reviews)</span>
            </div>
          </div>

          <p className="text-2xl font-bold text-foreground">${phone.price}</p>
          <p className="text-muted-foreground">{phone.description}</p>

          <div>
            <h3 className="font-semibold">Key Features</h3>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {phone.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-google-green" /> {f}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <Button size="lg" className="flex-1 gradient-cta border-0 text-primary-foreground gap-2" onClick={() => addToCart(phone)}>
              <ShoppingCart className="h-4 w-4" /> Add to Cart
            </Button>
            <Link to="/cart">
              <Button size="lg" variant="outline" onClick={() => addToCart(phone)}>Buy Now</Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Specs */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Specifications</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {specs.map(([key, val]) => (
            <div key={key} className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
              <span className="text-sm font-medium capitalize text-muted-foreground">{key}</span>
              <span className="text-sm font-semibold text-foreground">{val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="mt-16">
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

      {/* Related */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">You May Also Like</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p, i) => <PhoneCard key={p.id} phone={p} index={i} />)}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
