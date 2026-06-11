import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/collection", label: "Boutique" },
  { to: "/personnalisation", label: "Personnalisation" },
  { to: "/mesures", label: "Mesures" },
  { to: "/galerie", label: "Galerie" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img src={logo} alt="Fitafiko" className="h-12 w-auto" />
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <Link
            to="/compte"
            className="hidden items-center gap-2 text-sm text-foreground/80 hover:text-primary md:inline-flex"
            aria-label="Mon compte"
          >
            <User className="h-4 w-4" />
          </Link>
          <Link
            to="/panier"
            className="hidden items-center gap-2 text-sm text-foreground/80 hover:text-primary md:inline-flex"
            aria-label="Panier"
          >
            <ShoppingBag className="h-4 w-4" />
          </Link>
          <button
            className="rounded-md p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-base text-foreground/80 hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/compte" onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-base text-foreground/80 hover:bg-muted">Mon compte</Link>
            <Link to="/panier" onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-base text-foreground/80 hover:bg-muted">Panier</Link>
          </div>
        </div>
      )}
    </header>
  );
}
