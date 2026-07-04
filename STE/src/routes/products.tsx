import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { doors } from "@/lib/doors";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Door Collection — EstDoor Composite Doors" },
      {
        name: "description",
        content:
          "Browse EstDoor's nine composite door models — interior and exterior, in oak, walnut, beech and contemporary finishes.",
      },
      { property: "og:title", content: "Door Collection — EstDoor" },
      { property: "og:description", content: "Nine composite door models for interior and exterior." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  const [filter, setFilter] = useState<"All" | "Interior" | "Exterior">("All");
  const filtered = doors.filter((d) => filter === "All" || d.category === filter);
  return (
    <div className="min-h-screen">
      <SiteNav />
      <section className="container-x py-20">
        <span className="eyebrow">The Collection</span>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl">
          Doors, framed by a <span className="italic text-[color:var(--color-gold)]">stainless steel</span> spine.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Every model in stock. Prices include the stainless steel frame and
          insulation. Same-day measurement appointments available.
        </p>

        <div className="mt-10 flex gap-2">
          {(["All", "Interior", "Exterior"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                filter === f
                  ? "border-[color:var(--color-gold)] bg-[color:var(--color-gold)] text-[color:var(--color-cocoa)]"
                  : "border-border text-muted-foreground hover:border-[color:var(--color-gold)]/60 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
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
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-xl">{d.name}</h2>
                    <p className="mt-1 text-xs text-muted-foreground">{d.tagline}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[color:var(--color-gold)]">{d.price}</p>
                    {d.oldPrice && <p className="text-xs text-muted-foreground line-through">{d.oldPrice}</p>}
                  </div>
                </div>
                <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  {d.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-gold)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
