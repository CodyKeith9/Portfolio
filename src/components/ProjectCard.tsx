import type { Project } from "../data/projects";

function StatusPill({ status }: { status?: Project["status"] }) {
  if (!status) return null;

  const cls =
    status === "Live"
      ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-200"
      : status === "In Progress"
      ? "border-white/15 bg-white/5 text-white/70"
      : "border-amber-300/25 bg-amber-300/10 text-amber-200";

  return (
    <span className={`text-xs rounded-full border px-2.5 py-1 ${cls}`}>
      {status}
    </span>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/5 hover:bg-white/7 transition overflow-hidden">
      {/* Top bar accent */}
      <div className="h-1 w-full bg-linear-to-r from-emerald-300/40 via-white/10 to-transparent" />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-h2">{project.title}</h3>
              <StatusPill status={project.status} />
            </div>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              {project.summary}
            </p>
          </div>
        </div>

        {/* Stack tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="text-xs rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="mt-5 space-y-2 text-sm text-white/70">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-200/70 shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              target={l.href === "#" ? undefined : "_blank"}
              rel={l.href === "#" ? undefined : "noreferrer"}
              className="inline-flex items-center rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-emerald-300/30"
            >
              {l.label} →
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
