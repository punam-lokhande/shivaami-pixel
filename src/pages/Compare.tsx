import { phones } from "@/data/phones";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const specKeys = [
  { key: "display", label: "Display" },
  { key: "camera", label: "Camera" },
  { key: "battery", label: "Battery" },
  { key: "processor", label: "Processor" },
  { key: "ram", label: "RAM" },
  { key: "storage", label: "Storage" },
  { key: "os", label: "OS" },
  { key: "ai", label: "AI Features" },
] as const;

const Compare = () => (
  <div className="container py-10">
    <h1 className="text-3xl font-bold">Compare Pixel Models</h1>
    <p className="mt-1 text-muted-foreground">See how each Pixel stacks up side by side</p>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 overflow-x-auto rounded-2xl border border-border shadow-soft">
      <table className="w-full min-w-[800px]">
        <thead>
          <tr className="border-b border-border">
            <th className="bg-secondary/50 p-4 text-left text-sm font-semibold text-foreground sticky left-0 z-10">Feature</th>
            {phones.map((p) => (
              <th key={p.id} className="p-4 text-center">
                <img src={p.image} alt={p.name} className="mx-auto h-24 w-24 object-contain" loading="lazy" width={96} height={96} />
                <p className="mt-2 text-xs font-semibold text-foreground">{p.name}</p>
                <p className="text-sm font-bold text-primary">${p.price}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {specKeys.map((spec, i) => (
            <tr key={spec.key} className={i % 2 === 0 ? "bg-secondary/20" : ""}>
              <td className="p-4 text-sm font-medium text-foreground sticky left-0 z-10 bg-inherit">{spec.label}</td>
              {phones.map((p) => (
                <td key={p.id} className="p-4 text-center text-xs text-muted-foreground">{p.specs[spec.key]}</td>
              ))}
            </tr>
          ))}
          <tr className="border-t border-border">
            <td className="p-4 sticky left-0 z-10" />
            {phones.map((p) => (
              <td key={p.id} className="p-4 text-center">
                <Link to={`/product/${p.slug}`}>
                  <Button size="sm" variant="outline" className="text-xs">View Details</Button>
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </motion.div>
  </div>
);

export default Compare;
