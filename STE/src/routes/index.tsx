import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Flame, Volume2, Droplets, Ruler, Factory } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { doors } from "@/lib/doors";
import heroDoor from "@/assets/hero-door.jpg";
import layers from "@/assets/layers.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <Hero />
      <Marquee />
      <Features />
      <FeaturedDoors />
      <Layers />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x grid gap-12 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
        <div className="flex flex-col justify-center">
          <span className="eyebrow">Gaziantep & Şanlıurfa Manufacture</span>
          <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl">
            Every layer,
            <br />
            <span className="italic text-[color:var(--color-gold)]">deliberately</span> built.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            A stainless steel core, insulated composite body and a low-maintenance
            finish — nine designs for interior and exterior, at factory-direct pricing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--color-gold)] px-6 py-3 text-sm font-medium text-[color:var(--color-cocoa)] transition-transform hover:-translate-y-0.5"
            >
              Explore the collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://wa.me/905365118843"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-[color:var(--color-gold)]"
            >
              Message on WhatsApp →
            </a>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "9", v: "Door models" },
              { k: "2", v: "Factories" },
              { k: "100%", v: "Stainless core" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl text-[color:var(--color-gold)]">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[color:var(--color-gold)]/20 via-transparent to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <img
              src={heroDoor}
              alt="EstDoor composite entrance door with brass inlay"
              width={1280}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-border/70 bg-[color:var(--color-cocoa)]/85 px-4 py-3 backdrop-blur">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Signature model</p>
              <p className="font-display text-lg">Arcadia · Brass Line</p>
            </div>
            <span className="text-sm text-[color:var(--color-gold)]">₺2.900</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Waterproof", "Fire Resistant", "Sound Insulated", "Stainless Steel Core", "9 Designs", "Factory Direct"];
  return (
    <div className="border-y border-border/60 bg-[color:var(--color-cocoa)] py-4">
      <div className="container-x flex flex-wrap items-center justify-between gap-x-8 gap-y-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
        {items.map((i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[color:var(--color-gold)]" />
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function Features() {
  const items = [
    { icon: Droplets, title: "Waterproof body", copy: "Composite skin resists rain, humidity and steam without swelling." },
    { icon: Volume2, title: "Sound & heat insulated", copy: "Foam-filled core keeps interiors quiet and thermally stable." },
    { icon: ShieldCheck, title: "Stainless steel frame", copy: "Long-life, non-deforming structure engineered for daily use." },
    { icon: Flame, title: "Fire resistant", copy: "Composite layering slows flame spread on exterior installations." },
    { icon: Ruler, title: "Made to measure", copy: "Same-day measurement appointment across our service regions." },
    { icon: Factory, title: "Two factories", copy: "In-house production in Gaziantep and Şanlıurfa keeps prices honest." },
  ];
  return (
    <section id="why" className="container-x py-24">
      <div className="max-w-2xl">
        <span className="eyebrow">Why EstDoor</span>
        <h2 className="mt-4 text-4xl md:text-5xl">Engineered for the way homes are actually lived in.</h2>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <div key={f.title} className="bg-card p-8 transition-colors hover:bg-[color:var(--color-cocoa)]">
            <f.icon className="h-6 w-6 text-[color:var(--color-gold)]" />
            <h3 className="mt-6 font-display text-xl">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedDoors() {
  return (
    <section className="container-x pb-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <span className="eyebrow">The Collection</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Nine doors. One quiet standard.</h2>
        </div>
        <Link to="/products" className="hidden text-sm text-[color:var(--color-gold)] hover:underline md:inline">
          See all doors →
        </Link>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {doors.slice(0, 3).map((d) => (
          <article key={d.slug} className="group overflow-hidden rounded-xl border border-border bg-card">
            <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--color-cocoa)]">
              <img
                src={d.image}
                alt={`${d.name} composite door`}
                loading="lazy"
                width={800}
                height={1100}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-[color:var(--color-cocoa)]/80 px-3 py-1 text-xs uppercase tracking-wider">
                {d.category}
              </span>
            </div>
            <div className="flex items-center justify-between p-6">
              <div>
                <h3 className="font-display text-xl">{d.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{d.tagline}</p>
              </div>
              <div className="text-right">
                <p className="text-[color:var(--color-gold)]">{d.price}</p>
                {d.oldPrice && <p className="text-xs text-muted-foreground line-through">{d.oldPrice}</p>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Layers() {
  return (
    <section className="border-t border-border/60 bg-[color:var(--color-cocoa)] py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">Inside the door</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Four layers doing quiet work.</h2>
          <ul className="mt-8 space-y-5">
            {[
              { t: "Outer composite skin", d: "Waterproof, UV-stable, colour-locked." },
              { t: "Insulation foam", d: "Dampens sound, holds interior temperature." },
              { t: "Stainless steel frame", d: "Structural spine. Won't warp or rust." },
              { t: "Inner composite face", d: "Matched interior finish, low maintenance." },
            ].map((l, i) => (
              <li key={l.t} className="flex gap-4 border-b border-border/60 pb-5 last:border-0">
                <span className="font-display text-2xl text-[color:var(--color-gold)]">0{i + 1}</span>
                <div>
                  <p className="font-medium">{l.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{l.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border">
          <img src={layers} alt="Composite door layer diagram" loading="lazy" width={1400} height={900} className="w-full" />
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-x py-24">
      <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-gold)]/30 bg-gradient-to-br from-[color:var(--color-cocoa)] via-[color:var(--color-card)] to-[color:var(--color-cocoa)] p-10 md:p-16">
        <div className="max-w-2xl">
          <span className="eyebrow">Same-day measurement</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Ready to pick your door?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Message us on WhatsApp with your address — we'll book a free measurement
            and give you a firm quote in hours, not weeks.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/905365118843"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[color:var(--color-gold)] px-6 py-3 text-sm font-medium text-[color:var(--color-cocoa)]"
            >
              WhatsApp +90 536 511 88 43
            </a>
            <Link to="/contact" className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-[color:var(--color-gold)]">
              Send a message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
