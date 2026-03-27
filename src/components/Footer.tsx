import { Link } from "react-router-dom";
import shivaamiLogo from "@/assets/shivaami-logo.png";
import pixelLogo from "@/assets/pixel-logo.svg";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50">
    <div className="container py-8 sm:py-12 px-4 sm:px-6">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={shivaamiLogo} alt="Shivaami" className="h-7 w-auto" />
            <span className="text-muted-foreground">×</span>
            <img src={pixelLogo} alt="Google Pixel" className="h-5 w-auto" />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Your trusted Google Pixel partner. Experience the best of Google, delivered to your doorstep.</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Shop</h4>
          <div className="mt-3 flex flex-col gap-2">
            <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">All Phones</Link>
            <Link to="/compare" className="text-sm text-muted-foreground hover:text-primary transition-colors">Compare</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Support</h4>
          <div className="mt-3 flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">FAQ</span>
            <span className="text-sm text-muted-foreground">Shipping</span>
            <span className="text-sm text-muted-foreground">Returns</span>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms and Conditions</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Contact</h4>
          <div className="mt-3 flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">1001, 10th Floor, Runwal R Square, LBS Road, Mulund West, Mumbai - 400080</span>
            <a href="tel:917272072072" className="text-sm text-muted-foreground hover:text-primary transition-colors">+91 72720 72072</a>
            <a href="mailto:maaz@shivaami.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">maaz@shivaami.com</a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2026 Shivaami. Google Pixel is a trademark of Google LLC.
      </div>
    </div>
  </footer>
);

export default Footer;
