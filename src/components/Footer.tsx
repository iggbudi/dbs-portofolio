import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-800 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 text-xs text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-mist">© {year} Dwi Budi Santoso</span>
          <span className="text-ink-700">·</span>
          <span>{profile.location}</span>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-mist"
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-mist"
          >
            GitHub
          </a>
          <a
            href={profile.x}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-mist"
          >
            X
          </a>
          <a href="#top" className="transition-colors hover:text-mist">
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}
