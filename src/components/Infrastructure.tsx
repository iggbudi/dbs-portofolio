import { infrastructure } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Infrastructure() {
  return (
    <section id="infra" className="relative overflow-hidden border-t border-ink-900 py-20 sm:py-28">
      <div className="glow-teal pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-teal-400/80">
            // infrastructure
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            Not just code. The whole operation.
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-mist">
            Every project above runs on infrastructure I configure and maintain
            myself. Shipping is only useful when it stays online.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="group mt-8 overflow-hidden rounded-xl border border-ink-800 bg-ink-900/50 transition-all duration-300 hover:border-teal-500/30">
            <div className="border-b border-ink-800 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-teal-400/80">
              deployment spec
            </div>
            <dl className="px-6">
              {infrastructure.map((row) => (
                <div
                  key={row.key}
                  className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-ink-800/60 py-3.5 font-mono text-sm last:border-0"
                >
                  <dt className="text-teal-400/80 transition-colors group-hover:text-teal-400">{row.label.toLowerCase()}</dt>
                  <dd className="text-mist">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
