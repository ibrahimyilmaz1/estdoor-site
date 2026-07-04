import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-[color:var(--color-cocoa)]">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-sm bg-[color:var(--color-gold)] font-display text-[color:var(--color-cocoa)]">
              E
            </span>
            <span className="font-display text-lg">
              Est<span className="text-[color:var(--color-gold)]">Door</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Waterproof composite doors, frames and sills — engineered in Gaziantep &
            Şanlıurfa and shipped across Türkiye and beyond.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/estdoorturkey"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-[color:var(--color-gold)]"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/estdoorturkey"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-[color:var(--color-gold)]"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/products" className="text-muted-foreground hover:text-foreground">Door collection</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About EstDoor</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Get in touch</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone className="h-4 w-4 text-[color:var(--color-gold)]" /> +90 536 511 88 43</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-[color:var(--color-gold)]" /> info@estdoor.com</li>
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-gold)]" /> Oğuzeli, Gaziantep · Eyyübiye, Şanlıurfa</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} EstDoor Kompozit. All rights reserved.</p>
          <p>Gaziantep · Şanlıurfa · Türkiye</p>
        </div>
      </div>
    </footer>
  );
}
