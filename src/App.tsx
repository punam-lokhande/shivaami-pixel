import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Compare from "./pages/Compare";
import Cart from "./pages/Cart";
import SMB from "./pages/SMB";
import EnquireNow from "./pages/EnquireNow";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartProvider>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/smb" element={<SMB />} />
            <Route path="/enquire" element={<EnquireNow />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
