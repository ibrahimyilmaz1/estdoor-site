import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Doors" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-border)]/60 bg-[color:var(--color-cocoa)]/80 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-sm bg-[color:var(--color-gold)] font-display text-[color:var(--color-cocoa)]">
            E
          </span>
          <span className="font-display text-lg tracking-wide">
            Est<span className="text-[color:var(--color-gold)]">Door</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/905365118843"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[color:var(--color-gold)] px-4 py-2 text-sm font-medium text-[color:var(--color-cocoa)] transition-transform hover:-translate-y-0.5"
          >
            WhatsApp
          </a>
        </nav>
        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="container-x flex flex-col gap-4 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/905365118843"
              className="rounded-full bg-[color:var(--color-gold)] px-4 py-2 text-center text-sm font-medium text-[color:var(--color-cocoa)]"
            >
              WhatsApp +90 536 511 88 43
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
