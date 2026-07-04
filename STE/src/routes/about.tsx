import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import factory from "@/assets/factory.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — EstDoor Composite Doors" },
      {
        name: "description",
        content:
          "EstDoor is a Turkish composite door manufacturer with factories in Gaziantep and Şanlıurfa, producing waterproof, insulated doors for interior and exterior use.",
      },
      { property: "og:title", content: "About EstDoor" },
      { property: "og:description", content: "Two factories, one standard — waterproof composite doors made in Türkiye." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <section className="container-x py-20">
        <span className="eyebrow">Our story</span>
        <h1 className="mt-4 max-w-4xl text-5xl md:text-6xl">
          Built in Türkiye, from the frame out.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          EstDoor manufactures composite doors, frames and sills at two facilities in
          Gaziantep and Şanlıurfa. Every door leaves the factory with a stainless
          steel spine, an insulated core and a finish designed to age quietly.
        </p>
      </section>

      <section className="container-x">
        <div className="overflow-hidden rounded-2xl border border-border">
          <img src={factory} alt="EstDoor factory floor" loading="lazy" width={1400} height={900} className="w-full" />
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Principles</span>
          <h2 className="mt-4 text-4xl">Fewer promises. More layers.</h2>
        </div>
        <div className="space-y-8">
          {[
            {
              t: "Factory-direct honesty",
              d: "Both facilities are ours. There's no middle layer inflating your quote — the price you're shown is the price we build for.",
            },
            {
              t: "Materials chosen once, well",
              d: "Stainless steel frame, closed-cell insulating foam, waterproof composite skin. The specification doesn't change model to model.",
            },
            {
              t: "Design that stays put",
              d: "Nine considered designs — enough to fit a home without turning your entryway into a decision.",
            },
          ].map((p) => (
            <div key={p.t} className="border-b border-border pb-8 last:border-0">
              <h3 className="font-display text-2xl">{p.t}</h3>
              <p className="mt-2 text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
