import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Fitafiko" className="h-14 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Votre style, notre savoir-faire. Maison de couture dédiée à la création
            de pièces uniques, taillées avec passion et précision.
          </p>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/collection" className="hover:text-primary">Collection</Link></li>
            <li><Link to="/atelier" className="hover:text-primary">L'Atelier</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@fitafiko.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +261 00 000 00 00</li>
            <li className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram" className="rounded-full border border-border p-2 hover:border-primary hover:text-primary"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="rounded-full border border-border p-2 hover:border-primary hover:text-primary"><Facebook className="h-4 w-4" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Fitafiko. Tous droits réservés.</p>
          <p className="italic font-display text-sm">Votre style, notre savoir-faire</p>
        </div>
      </div>
    </footer>
  );
}
