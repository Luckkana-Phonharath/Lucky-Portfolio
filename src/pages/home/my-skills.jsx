const skills = [
  { name: 'React', short: '⚛' },
  { name: 'TypeScript', short: 'TS' },
  { name: 'Node.js', short: 'Node' },
  { name: 'Laravel', short: 'Lv' },
  { name: 'REST APIs', short: 'API' },
  { name: 'MySQL', short: 'SQL' },
  { name: 'Redux Toolkit', short: 'RTK' },
  { name: 'Docker', short: 'Dk' },
  { name: 'Azure', short: 'Az' },
];

export function MySkills() {
  return (
    <section className="relative overflow-hidden px-10 py-10">
      <div className="mx-auto max-w-7xl px-5">
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-blue-500">
          My Skills
        </p>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              style={{ animationDelay: `${index * 120}ms` }}
              className="group flex items-center gap-3 rounded-xl border border-blue-500/10 bg-slate-900/70 px-5 py-4 text-white opacity-0 shadow-[0_0_30px_rgba(37,99,235,0.08)] transition-all duration-300 animate-[fadeSlideIn_0.6s_ease-out_forwards] hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-sm font-bold text-blue-400 transition-all duration-300 group-hover:bg-blue-500/25 group-hover:text-white">
                {skill.short}
              </div>

              <span className="text-sm font-semibold text-slate-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}