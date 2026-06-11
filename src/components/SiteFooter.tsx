import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logo} alt="Fitafiko" className="h-14 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Votre style, notre savoir-faire. Maison de couture dédiée à la création
            de pièces uniques, taillées avec passion et précision.
          </p>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Découvrir</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/a-propos" className="hover:text-primary">À propos</Link></li>
            <li><Link to="/atelier" className="hover:text-primary">L'Atelier</Link></li>
            <li><Link to="/galerie" className="hover:text-primary">Galerie</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Commander</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/collection" className="hover:text-primary">Boutique</Link></li>
            <li><Link to="/personnalisation" className="hover:text-primary">Personnalisation</Link></li>
            <li><Link to="/mesures" className="hover:text-primary">Prise de mesures</Link></li>
            <li><Link to="/tarifs" className="hover:text-primary">Tarifs</Link></li>
            <li><Link to="/processus" className="hover:text-primary">Processus</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@fitafiko.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +261 34 00 000 00</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Antananarivo, Madagascar</li>
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
