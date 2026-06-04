import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle, Instagram } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Fitafiko" },
      { name: "description", content: "Contactez la maison Fitafiko pour un rendez-vous, une commande sur-mesure ou toute question." },
      { property: "og:title", content: "Contact — Fitafiko" },
      { property: "og:description", content: "Prenez rendez-vous avec notre atelier." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="container-x grid gap-16 py-16 md:grid-cols-2 md:py-24">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Parlons de votre projet.</h1>
        <p className="mt-6 text-muted-foreground">
          Que ce soit pour une pièce sur-mesure, une commande spéciale ou
          simplement une question, nous serions ravis de vous lire.
        </p>

        <ul className="mt-10 space-y-4 text-sm">
          <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /> Antananarivo, Madagascar</li>
          <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> +261 00 000 00 00</li>
          <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /> contact@fitafiko.com</li>
        </ul>

        <div className="mt-8 flex gap-3">
          <a
            href="https://wa.me/261000000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/5"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="rounded-md border border-border bg-card p-8 shadow-sm"
      >
        <h2 className="text-2xl">Écrivez-nous</h2>
        {sent ? (
          <p className="mt-6 rounded-md bg-secondary p-4 text-sm">
            Merci ! Nous reviendrons vers vous très vite.
          </p>
        ) : (
          <div className="mt-6 space-y-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Nom</label>
              <input required className="mt-1 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
              <input type="email" required className="mt-1 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Votre message</label>
              <textarea rows={5} required className="mt-1 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            </div>
            <button className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Envoyer
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
