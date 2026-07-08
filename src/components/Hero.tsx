import Image from "next/image";
import { profile, stats, categories, categoryCounts, featuredProjects } from "@/lib/data";

const stackTokens = [
  "PHP",
  "TypeScript",
  "Node.js",
  "Python",
  "Next.js",
  "Tailwind",
  "Solana",
  "MySQL",
  "Supabase",
  "MongoDB",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="glow-amber pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <div
            className="animate-fade-up flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-amber-400"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </span>
            Open for freelance work
          </div>

          <h1
            className="animate-fade-up mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            I build software end to end,
            <br className="hidden sm:block" /> and keep it running{" "}
            <span className="text-amber-400">in production</span>.
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {profile.subpitch}
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-amber-400"
            >
              Get in touch
            </a>
            <a
              href="#work"
              className="rounded-full border border-ink-700 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-ink-600 hover:bg-ink-850"
            >
              See 36 shipped projects →
            </a>
          </div>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-xs text-faint"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-mist"
            >
              {profile.githubLabel}
            </a>
            <span className="text-ink-700">·</span>
            <a
              href={profile.x}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-mist"
            >
              {profile.xLabel}
            </a>
            <span className="text-ink-700">·</span>
            <span>{profile.location}</span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div
            className="animate-fade-up mb-5 overflow-hidden rounded-2xl border border-ink-800 shadow-ink"
            style={{ animationDelay: "140ms" }}
          >
            <Image
              src="/dbs.jpg"
              alt="Dwi Budi Santoso — Full-Stack Developer & AI Engineer"
              width={600}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div
            className="animate-fade-up rounded-2xl border border-ink-800 bg-ink-900/70 p-6 shadow-ink sm:p-7"
            style={{ animationDelay: "200ms" }}
          >
            <div className="flex items-center justify-between border-b border-ink-800 pb-4">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
                shipped work // index
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
            </div>

            <div className="grid grid-cols-3 gap-3 py-5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono text-2xl font-medium text-amber-400 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] leading-tight text-faint">
                    {stat.label}
                  </div>
                  {stat.context && (
                    <div className="mt-0.5 font-mono text-[10px] text-ink-600">
                      {stat.context}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-ink-800 pt-4">
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Work domains
              </div>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li
                    key={category.slug}
                    className="flex items-baseline gap-2 text-sm"
                  >
                    <span className="text-mist">{category.label}</span>
                    <span className="mb-1 flex-1 border-b border-dotted border-ink-700" />
                    <span className="font-mono text-xs text-paper">
                      {categoryCounts[category.slug]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 border-t border-ink-800 pt-4">
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {stackTokens.map((token) => (
                  <span
                    key={token}
                    className="rounded-md border border-ink-700 bg-ink-850 px-2 py-1 font-mono text-[11px] text-mist"
                  >
                    {token}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 border-t border-ink-800 pt-4">
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Live projects
              </div>
              <ul className="space-y-2">
                {featuredProjects.map((project) => (
                  <li key={project.name} className="flex items-center justify-between">
                    <div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-paper transition-colors hover:text-amber-400"
                      >
                        {project.name} ↗
                      </a>
                      <div className="font-mono text-[10px] text-ink-600">{project.category}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
