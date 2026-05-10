const brand = {
  phone: "(405) 000-0000",
  email: "info@mvpestcontrolokc.com",
  city: "Mustang, Oklahoma",
};

const services = [
  {
    title: "Quarterly Pest Protection",
    description:
      "Year-round treatment plans for ants, spiders, roaches, earwigs, and other common Oklahoma pests.",
  },
  {
    title: "Rodent Control",
    description:
      "Inspection, exclusion recommendations, and targeted treatment to stop recurring rodent activity.",
  },
  {
    title: "Termite Inspections",
    description:
      "Proactive inspections with clear recommendations to protect your home and your investment.",
  },
  {
    title: "One-Time Service",
    description:
      "Fast response for immediate pest issues when you need a quick and practical solution.",
  },
];

const areas = [
  "Mustang",
  "Yukon",
  "Tuttle",
  "Newcastle",
  "Southwest OKC",
  "Nearby communities",
];

const reasons = [
  "Locally focused service built for Oklahoma pest patterns",
  "Straightforward communication and practical recommendations",
  "Consistent scheduling and dependable follow-through",
  "Professional team and clean, branded service trucks",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-emerald-900/60 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-bold tracking-wide">MVP Pest Control</p>
            <p className="text-xs text-emerald-300">{brand.city}</p>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
          >
            Get a Free Quote
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(16,185,129,.22),transparent_40%),radial-gradient(circle_at_90%_0%,rgba(250,204,21,.12),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-300">
              Local • Family focused • Reliable
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Pest control that keeps your home protected year-round.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-zinc-300">
              Serving Mustang and nearby Oklahoma communities with dependable pest control,
              clear communication, and service plans that are easy to maintain.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${brand.phone.replace(/[^\d]/g, "")}`}
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-200"
              >
                Call {brand.phone}
              </a>
              <a
                href="#services"
                className="rounded-full border border-zinc-600 px-5 py-3 text-sm font-semibold hover:bg-zinc-800"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-2xl">
            <p className="text-sm font-semibold text-emerald-300">Trusted Local Service</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-zinc-700 bg-zinc-800/70 p-4">
              <p className="text-xs uppercase tracking-wide text-zinc-400">Fast Contact</p>
              <p className="mt-2 text-xl font-semibold">{brand.phone}</p>
              <p className="text-sm text-zinc-400">{brand.email}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold tracking-tight">Services</h2>
        <p className="mt-2 text-zinc-300">
          Flexible treatment options for homes and businesses.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5"
            >
              <h3 className="text-lg font-semibold text-emerald-300">{service.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-zinc-900/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Service Area</h2>
            <p className="mt-2 text-zinc-300">
              Based in Mustang and serving nearby areas across the OKC metro.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-700 bg-zinc-950 p-5">
            <h3 className="text-lg font-semibold">Truck + Brand Visual Direction</h3>
            <p className="mt-2 text-sm text-zinc-300">
              This layout is ready for real truck photos from MVP Pest Control socials to
              match the business style. Replace these placeholders in the next pass with
              official images for a fully authentic look.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="h-28 rounded-lg border border-zinc-700 bg-zinc-800/70" />
              <div className="h-28 rounded-lg border border-zinc-700 bg-zinc-800/70" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready to get started?
          </h2>
          <p className="mt-2 text-zinc-200">
            Call now or send an email and we’ll help you choose the right next step.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${brand.phone.replace(/[^\d]/g, "")}`}
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-200"
            >
              Call {brand.phone}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Email {brand.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
