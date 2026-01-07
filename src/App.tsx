import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/50 backdrop-blur-md">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 grid place-items-center">
                <span className="text-sm font-semibold">CK</span>
              </div>
              <div className="leading-tight">
                <div className="font-semibold">Cody Keith</div>
                <div className="text-xs text-white/60">Software Engineer</div>
              </div>
            </div>

            <nav className="flex items-center gap-2 text-sm">
              <a className="px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition" href="#projects">
                Projects
              </a>
              <a className="px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition" href="#about">
                About
              </a>
              <a className="px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition" href="#contact">
                Contact
              </a>

              <a
                className="ml-2 inline-flex items-center rounded-xl bg-emerald-300/15 border border-emerald-300/25 px-3 py-2 text-emerald-200 hover:bg-emerald-300/20 transition"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-14 sm:py-20">
          <div className="w-full px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  React • TypeScript • UI Engineering • I Ship
                </div>

                <h1 className="text-display">
                  Building clean, production-minded web apps with{" "}
                  <span className="ui-emphasis">strong UI</span>.
                </h1>

                <p className="mt-4 text-body max-w-2xl">
                  I'm Cody Keith. I ship React + TypeScript applications that balance UX polish, maintainable structure,
                  and practical delivery constraints.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-300/15 border border-emerald-300/25 px-4 py-2 text-emerald-100 hover:bg-emerald-300/20 transition"
                  >
                    View Projects
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-white/80 hover:bg-white/10 hover:text-white transition"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="text-sm text-white/60">Current focus</div>
                  <div className="mt-2 text-lg font-semibold">Tailwind + Modern CSS</div>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    <li>• Layout, spacing, and typography</li>
                    <li>• Components that scale</li>
                    <li>• Accessibility-first interaction</li>
                  </ul>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
                    This site is intentionally built to showcase front-end styling skill.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
         <section id="projects" className="py-12 border-t border-white/10">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
             <h2 className="text-h1">Projects</h2>
              <p className="mt-2 text-body max-w-2xl">
                Selected work showcasing real-world constraints, UI craftsmanship,
                and systems thinking.
              </p>

              <div className="mt-6 grid md:grid-cols-2 gap-5">
                 {projects.map((p) => (
                     <ProjectCard key={p.slug} project={p} />
                    ))}
               </div>
            </div>
        </section>


        <section id="about" className="py-12 border-t border-white/10">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">About</h2>

            <p className="mt-3 text-body max-w-3xl">
              I'm Cody. I'm 34, and I took an unconventional path into software engineering.
            </p>

            <p className="mt-4 text-body max-w-3xl">
              I worked extremely hard to reshape my life and career, and I don't take where I'm at lightly.
              I care deeply about writing quality code, understanding why things work the way they do,
              and continuing to grow in the areas I'm still learning.
            </p>

            <p className="mt-4 text-body max-w-3xl">
              Coming from a nontraditional background forced me to be self-directed, disciplined,
              and honest about what I do and don't know. I take risks on myself, actively seek feedback,
              and value doing things the right way ... even when it takes longer.
            </p>

            <p className="mt-4 text-body max-w-3xl">
              I'm passionate about building software that's clear, durable, and respectful of the people
              who use it and maintain it. I chose this path deliberately, and I'm committed to growing
              into the best engineer I can be.
            </p>
         </div>
       </section>


        {/* Contact */}
        <section id="contact" className="py-12 border-t border-white/10">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
            <p className="mt-2 text-white/70">Email is best.</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/60">Email</div>
              <a className="mt-1 block text-white/80 hover:text-white transition" href="Codykeith9@gmail.com">
                Codykeith9@gmail.com
              </a>

              <div className="mt-4 text-sm text-white/60">Links</div>
              <div className="mt-2 flex flex-wrap gap-3">
                <a className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/80 hover:bg-white/10 transition"
                   href="https://github.com/CodyKeith9" target="_blank" rel="noreferrer">
                  GitHub →
                </a>
                <a className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/80 hover:bg-white/10 transition"
                   href="https://www.linkedin.com/in/cody-keith-9884b38a/" target="_blank" rel="noreferrer">
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="py-8 text-sm text-white/60 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Cody Keith</div>
            <div className="text-white/50">Built with Vite • React • TypeScript • Tailwind</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

