"use client";

import { useState } from "react";
import { projects, categories, type Project } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const category = categories.find((c) => c.slug === project.category);
  return (
    <div className="group flex flex-col rounded-xl border border-ink-800 bg-ink-900/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-ink-850">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-400/80">
          {category?.label}
        </span>
        <span className="font-mono text-[10px] text-ink-600">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-3 text-base font-semibold tracking-tight text-paper">
        {project.name}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-mist">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-ink-700 bg-ink-850 px-2 py-0.5 font-mono text-[10px] text-faint"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  const activeCategory = categories.find((c) => c.slug === active);

  return (
    <section id="work" className="relative overflow-hidden border-t border-ink-900 py-20 sm:py-28">
      <div className="glow-emerald pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-400/80">
            // work
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            Proof, shipped and hosted.
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-mist">
            Thirty-six projects across eight domains, deployed on self-managed
            infrastructure. Filter by domain to narrow the view.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActive("all")}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                active === "all"
                  ? "bg-emerald-500 text-ink-950"
                  : "border border-ink-700 text-mist hover:border-emerald-500/40 hover:text-paper"
              }`}
            >
              All
              <span className="ml-1.5 font-mono text-[10px] opacity-70">
                {projects.length}
              </span>
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActive(category.slug)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  active === category.slug
                    ? "bg-emerald-500 text-ink-950"
                    : "border border-ink-700 text-mist hover:border-emerald-500/40 hover:text-paper"
                }`}
              >
                {category.label}
                <span className="ml-1.5 font-mono text-[10px] opacity-70">
                  {projects.filter((p) => p.category === category.slug).length}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-5 flex items-baseline gap-3 font-mono text-xs text-faint">
          <span>
            showing {filtered.length} of {projects.length}
          </span>
          {activeCategory && (
            <>
              <span className="text-ink-700">·</span>
              <span>{activeCategory.blurb}</span>
            </>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-xl border border-ink-800 bg-ink-900/40 px-6 py-14 text-center">
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
              no results
            </div>
            <p className="mt-2 text-sm text-mist">
              No projects in this domain yet. Try{" "}
              <button
                onClick={() => setActive("all")}
                className="underline transition-colors hover:text-paper"
              >
                viewing all
              </button>.
            </p>
          </div>
        ) : (
          <div
            key={active}
            className="animate-fade-in mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
