import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — EstDoor Composite Doors" },
      {
        name: "description",
        content:
          "Reach EstDoor by phone, WhatsApp or email. Factories in Gaziantep and Şanlıurfa. Same-day measurement appointments.",
      },
      { property: "og:title", content: "Contact EstDoor" },
      { property: "og:description", content: "Phone, WhatsApp and factory addresses in Gaziantep and Şanlıurfa." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <section className="container-x py-20">
        <span className="eyebrow">Get in touch</span>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-6xl">
          Book a measurement — usually the same day.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          The fastest way is WhatsApp. Send us the address and we'll confirm a slot,
          bring finish samples and quote firmly on site.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <a
            href="https://wa.me/905365118843"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-[color:var(--color-gold)]"
          >
            <MessageCircle className="h-6 w-6 text-[color:var(--color-gold)]" />
            <p className="mt-6 font-display text-2xl">WhatsApp</p>
            <p className="mt-2 text-muted-foreground">+90 536 511 88 43 — measurements, quotes, delivery.</p>
            <p className="mt-4 text-sm text-[color:var(--color-gold)]">Open chat →</p>
          </a>
          <a
            href="mailto:info@estdoor.com"
            className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-[color:var(--color-gold)]"
          >
            <Mail className="h-6 w-6 text-[color:var(--color-gold)]" />
            <p className="mt-6 font-display text-2xl">Email</p>
            <p className="mt-2 text-muted-foreground">info@estdoor.com — for catalogues, dealer & export enquiries.</p>
            <p className="mt-4 text-sm text-[color:var(--color-gold)]">Write to us →</p>
          </a>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <MapPin className="h-6 w-6 text-[color:var(--color-gold)]" />
            <p className="mt-6 font-display text-2xl">Gaziantep Factory</p>
            <p className="mt-2 text-muted-foreground">
              Körkün Mah. Koray Aydın Cad. No:27<br />Oğuzeli / Gaziantep
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <MapPin className="h-6 w-6 text-[color:var(--color-gold)]" />
            <p className="mt-6 font-display text-2xl">Şanlıurfa Factory</p>
            <p className="mt-2 text-muted-foreground">
              Koçören Mah. 221. Cad. No:16<br />Eyyübiye / Şanlıurfa 2. OSB
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4 text-[color:var(--color-gold)]" />
          Or call: <a href="tel:+905365118843" className="text-foreground hover:text-[color:var(--color-gold)]">+90 536 511 88 43</a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
