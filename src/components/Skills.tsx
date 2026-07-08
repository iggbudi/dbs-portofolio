import { skillGroups } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

const levelStyles: Record<string, string> = {
  Expert: "border-violet-500/30 bg-violet-500/10 text-violet-400",
  Advanced: "border-ink-600 bg-ink-850 text-paper",
  Intermediate: "border-ink-700 bg-ink-900 text-faint",
};

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-t border-ink-900 py-20 sm:py-28">
      <div className="glow-violet pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-violet-400/80">
            // skills
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            A wide stack, owned end to end.
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-mist">
            From PHP and Node on the server to Solana on-chain and scikit-learn
            models. Depth where it matters, breadth where the work demands it.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 60}>
              <div className="group h-full rounded-xl border border-ink-800 bg-ink-900/50 p-5 transition-all duration-300 hover:border-violet-500/30">
                <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-violet-400/80">
                  {group.title}
                </h3>
                <ul className="mt-3">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between gap-3 border-b border-ink-800/60 py-2.5 last:border-0"
                    >
                      <div className="min-w-0">
                        <div className="truncate text-sm text-paper">
                          {item.name}
                        </div>
                        {item.note && (
                          <div className="truncate font-mono text-[11px] text-faint">
                            {item.note}
                          </div>
                        )}
                      </div>
                      {item.level && (
                        <span
                          className={`shrink-0 rounded border px-1.5 py-0.5 font-mono text-[10px] ${
                            levelStyles[item.level] ?? levelStyles.Advanced
                          }`}
                        >
                          {item.level}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
