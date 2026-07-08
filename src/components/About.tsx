import { profile, softSkills, learning } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

const cycle = [
  { step: "01", label: "Architecture", note: "System design and data modeling before a line of code." },
  { step: "02", label: "Build", note: "Server, API, and UI across PHP, Node, and Python." },
  { step: "03", label: "Deploy", note: "VPS, reverse proxy, SSL, and git-based releases." },
  { step: "04", label: "Operate", note: "Monitoring, maintenance, and iteration in production." },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-ink-900 py-20 sm:py-28">
      <div className="glow-blue pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-blue-400/80">
            // about
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            The person behind the stack.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7" delay={60}>
            <p className="text-lg leading-relaxed text-mist">{profile.summary}</p>

            <ul className="mt-8">
              {softSkills.map((skill) => (
                <li
                  key={skill.lead}
                  className="flex gap-3 border-b border-ink-800/60 py-3.5 last:border-0"
                >
                  <span className="mt-1 font-mono text-xs text-blue-400/70">
                    →
                  </span>
                  <p className="text-sm leading-relaxed">
                    <span className="font-medium text-paper">{skill.lead}</span>
                    <span className="text-mist">: {skill.detail}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={140}>
            <div className="rounded-xl border border-ink-800 bg-ink-900/50 p-6 transition-all duration-300 hover:border-blue-500/30">
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-blue-400/80">
                full cycle
              </div>
              <ol className="mt-4 space-y-4">
                {cycle.map((phase) => (
                  <li key={phase.step} className="flex gap-4">
                    <span className="font-mono text-sm text-blue-400">
                      {phase.step}
                    </span>
                    <div>
                      <div className="text-sm font-medium text-paper">
                        {phase.label}
                      </div>
                      <div className="mt-0.5 text-sm leading-relaxed text-faint">
                        {phase.note}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-5 rounded-xl border border-ink-800 bg-ink-900/50 p-6 transition-all duration-300 hover:border-blue-500/30">
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-blue-400/80">
                how I learn
              </div>
              <ul className="mt-3 space-y-2.5">
                {learning.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-mist"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
