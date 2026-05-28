import { useState } from "react";
import { phones, Phone } from "@/data/phones";
import PhoneCard from "@/components/PhoneCard";

type SortKey = "price-asc" | "price-desc" | "rating";
type CategoryFilter = "all" | "flagship" | "mid-range" | "foldable";

const Products = () => {
  const [sort, setSort] = useState<SortKey>("price-asc");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const filtered = phones
    .filter((p) => category === "all" || p.category === category)
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return b.rating - a.rating;
    });

  const categories: { value: CategoryFilter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "flagship", label: "Flagship" },
    { value: "mid-range", label: "Mid-Range" },
    { value: "foldable", label: "Foldable" },
  ];

  return (
    <div className="container py-6 sm:py-10 px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold">Google Pixel Phones</h1>
      <p className="mt-1 text-muted-foreground">Browse our complete collection</p>

      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3">
        <div className="flex gap-2">
          {categories.map((c) => (
            <button key={c.value} onClick={() => setCategory(c.value)} className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${category === c.value ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-surface-hover"}`}>
              {c.label}
            </button>
          ))}
        </div>
        <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)} className="sm:ml-auto rounded-lg border border-border bg-card px-3 py-1.5 text-xs outline-none w-full sm:w-auto">
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((phone, i) => <PhoneCard key={phone.id} phone={phone} index={i} />)}
      </div>
    </div>
  );
};

export default Products;
