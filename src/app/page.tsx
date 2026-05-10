import Link from "next/link";

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
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-bold tracking-wide text-blue-900">MVP Pest Control</p>
            <p className="text-xs text-red-600">{brand.city}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/about" className="text-sm font-semibold text-blue-800 hover:text-blue-600">
              About
            </Link>
            <a
              href="#contact"
              className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_65%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(37,99,235,.15),transparent_40%),radial-gradient(circle_at_90%_0%,rgba(220,38,38,.12),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
              Local • Family focused • Reliable
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-5xl">
              Pest control that keeps your home protected year-round.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-700">
              Serving Mustang and nearby Oklahoma communities with dependable pest control,
              clear communication, and service plans that are easy to maintain.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${brand.phone.replace(/[^\d]/g, "")}`}
                className="rounded-full bg-blue-900 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Call {brand.phone}
              </a>
              <a
                href="#services"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
            <p className="text-sm font-semibold text-red-600">Trusted Local Service</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-700" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Fast Contact</p>
              <p className="mt-2 text-xl font-semibold text-blue-900">{brand.phone}</p>
              <p className="text-sm text-slate-600">{brand.email}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold tracking-tight text-blue-950">Services</h2>
        <p className="mt-2 text-slate-700">
          Flexible treatment options for homes and businesses.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <h3 className="text-lg font-semibold text-red-600">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-blue-950/5">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-blue-950">Service Area</h2>
            <p className="mt-2 text-slate-700">
              Based in Mustang and serving nearby areas across the OKC metro.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-blue-950">Truck + Brand Visual Direction</h3>
            <p className="mt-2 text-sm text-slate-700">
              This section is ready for real truck photos to match MVP Pest Control’s
              exact visual style.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="h-28 rounded-lg border border-slate-200 bg-slate-100" />
              <div className="h-28 rounded-lg border border-slate-200 bg-slate-100" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-blue-950">
            Ready to get started?
          </h2>
          <p className="mt-2 text-slate-700">
            Call now or send an email and we’ll help you choose the right next step.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${brand.phone.replace(/[^\d]/g, "")}`}
              className="rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-500"
            >
              Call {brand.phone}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="rounded-full border border-blue-300 px-5 py-3 text-sm font-semibold text-blue-900 hover:bg-white"
            >
              Email {brand.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
