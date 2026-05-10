const services = [
  {
    title: "General Pest Control",
    description:
      "Recurring protection for common Oklahoma pests including ants, spiders, roaches, and more.",
  },
  {
    title: "Rodent Control",
    description:
      "Inspection, targeted treatment, and prevention steps to keep rodents out for good.",
  },
  {
    title: "Termite Inspections",
    description:
      "Proactive inspections and treatment recommendations to protect your home and investment.",
  },
];

const areas = [
  "Mustang",
  "Yukon",
  "Southwest Oklahoma City",
  "Tuttle",
  "Newcastle",
  "Nearby communities",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <header className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-lg font-semibold">MVP Pest Control</p>
          <a
            href="#contact"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700"
          >
            Get a Free Quote
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            Local Pest Control in Mustang, Oklahoma
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Fast, reliable pest control for your home or business.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-600">
            Protect your property with straightforward service, clear communication,
            and treatments designed for Oklahoma pests.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-700"
            >
              Request Service
            </a>
            <a
              href="tel:+14050000000"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold hover:bg-zinc-50"
            >
              Call (405) 000-0000
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Why homeowners choose MVP</h2>
          <ul className="mt-4 space-y-3 text-zinc-700">
            <li>• Local team that understands Oklahoma pest patterns</li>
            <li>• Practical treatment plans with clear next steps</li>
            <li>• Friendly service and quick scheduling</li>
          </ul>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-semibold tracking-tight">Services</h2>
        <p className="mt-2 text-zinc-600">
          Simple plans for ongoing protection and one-time pest issues.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-zinc-200 p-5"
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-semibold tracking-tight">Service Area</h2>
          <p className="mt-2 text-zinc-600">
            Based in Mustang and serving surrounding communities.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-semibold tracking-tight">About MVP Pest Control</h2>
        <p className="mt-3 max-w-3xl text-zinc-600">
          We help local families and businesses stay pest-free with dependable
          service and honest recommendations. Our goal is simple: solve the issue,
          prevent it from coming back, and make the process easy from start to finish.
        </p>
      </section>

      <section id="contact" className="bg-zinc-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Need pest control now?</h2>
            <p className="mt-2 text-zinc-300">
              Call or request a quote and we’ll help you choose the right next step.
            </p>
          </div>
          <div className="rounded-xl bg-zinc-800 p-5">
            <p className="text-sm text-zinc-300">Contact</p>
            <p className="mt-2 text-xl font-semibold">(405) 000-0000</p>
            <p className="mt-1 text-zinc-300">info@mvpestcontrolokc.com</p>
            <a
              href="mailto:info@mvpestcontrolokc.com"
              className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
