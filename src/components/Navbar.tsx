import { useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { phones } from "@/data/phones";
import shivaamiLogo from "@/assets/shivaami-logo.png";
import pixelLogo from "@/assets/pixel-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Phones" },
  { to: "/compare", label: "Compare" },
  { to: "/smb", label: "SMB" },
  { to: "/enquire", label: "Enquire Now" },
];

const Navbar = () => {
  const { totalItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof phones>([]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query.trim().length === 0) {
      setSearchResults([]);
      return;
    }
    const q = query.toLowerCase();
    const results = phones.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.highlights.some((h) => h.toLowerCase().includes(q))
    );
    setSearchResults(results);
  }, []);

  const handleResultClick = (slug: string) => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    navigate(`/product/${slug}`);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={shivaamiLogo} alt="Shivaami" className="h-7 w-auto" />
          <span className="text-xs text-muted-foreground font-medium mx-1">×</span>
          <img src={pixelLogo} alt="Google Pixel" className="h-7 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(""); setSearchResults([]); }} className="rounded-full p-2 transition-colors hover:bg-secondary">
            <Search className="h-5 w-5 text-muted-foreground" />
          </button>
          <Link to="/cart" className="relative rounded-full p-2 transition-colors hover:bg-secondary">
            <ShoppingCart className="h-5 w-5 text-muted-foreground" />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-full p-2 md:hidden hover:bg-secondary">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-border">
            <div className="container py-3 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search Pixel phones..."
                className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
              {searchResults.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-1 mx-4 sm:mx-6 rounded-lg border border-border bg-background shadow-lg z-50 max-h-64 overflow-y-auto">
                  {searchResults.map((phone) => (
                    <button
                      key={phone.id}
                      onClick={() => handleResultClick(phone.slug)}
                      className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-secondary transition-colors border-b border-border last:border-0"
                    >
                      <img src={phone.image} alt={phone.name} className="h-10 w-10 object-contain" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{phone.name}</p>
                        <p className="text-xs text-muted-foreground">{phone.tagline}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
              {searchQuery.trim().length > 0 && searchResults.length === 0 && (
                <div className="absolute left-0 right-0 top-full mt-1 mx-4 sm:mx-6 rounded-lg border border-border bg-background shadow-lg z-50 px-4 py-3">
                  <p className="text-sm text-muted-foreground">No phones found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-border md:hidden">
            <div className="container flex flex-col gap-3 py-4">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className={`text-sm font-medium py-2 ${location.pathname === link.to ? "text-primary" : "text-muted-foreground"}`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;