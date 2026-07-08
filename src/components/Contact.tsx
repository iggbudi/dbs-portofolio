import { profile } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-ink-900 bg-ink-900/40 py-24 sm:py-32"
    >
      <div className="glow-amber pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-amber-400/80">
            // contact
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-paper sm:text-5xl">
            Let&apos;s build something that ships.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-mist">
            Available for freelance full-stack and AI engineering work. Tell me
            what you need to get into production.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-amber-400"
            >
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink-700 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:border-rose-500/40 hover:bg-ink-850"
            >
              GitHub ↗
            </a>
            <a
              href={profile.x}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink-700 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:border-rose-500/40 hover:bg-ink-850"
            >
              X ↗
            </a>
          </div>

          <p className="mt-8 font-mono text-xs text-faint">
            {profile.location} · replies within a day
          </p>
        </Reveal>
      </div>
    </section>
  );
}
