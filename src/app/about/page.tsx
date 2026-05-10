import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-lg font-bold tracking-wide text-blue-900">MVP Pest Control</p>
          <Link href="/" className="text-sm font-semibold text-blue-800 hover:text-blue-600">
            Back to Home
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_420px] lg:items-start">
        <div>
        <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
          About MVP Pest Control
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-blue-950 sm:text-5xl">
          Local pest control with pride in the details.
        </h1>

        <div className="mt-8 space-y-4 text-lg text-slate-700">
          <p>
            MVP Pest Control serves Mustang and nearby Oklahoma communities with
            reliable service, practical solutions, and clear communication.
          </p>
          <p>
            Aaron Lasseter is also a purple belt in jiu-jitsu and is very proud of it.
          </p>
        </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-lg">
          <Image
            src="/aaron-reference.jpg"
            alt="Aaron Lasseter of MVP Pest Control"
            width={1200}
            height={1200}
            className="h-auto w-full rounded-xl"
            priority
          />
        </div>
      </section>
    </main>
  );
}
