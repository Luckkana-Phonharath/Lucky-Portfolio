import { Button } from '../../components/button';
import {
  ArrowOutwardIcon,
  DownloadIcon,
  GithubIcon,
  LinkedInIcon,
} from '../../components/icons';

export function HeroSection() {

  // function handleMouseMove(e) {
  //   // Always target the outer orb so --glow-x/y are on the right element
  //   const orb = e.currentTarget.closest('.hero-orb') ?? e.currentTarget;
  //   const rect = orb.getBoundingClientRect();
  //   const x = ((e.clientX - rect.left) / rect.width) * 100;
  //   const y = ((e.clientY - rect.top) / rect.height) * 100;
  //   orb.style.setProperty('--glow-x', `${x}%`);
  //   orb.style.setProperty('--glow-y', `${y}%`);
  // }

  return (
    <section className="relative overflow-hidden px-10 pt-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="relative pl-5 z-10 max-w-xl animate-[fadeSlideIn_1.0s_ease-out_forwards] opacity-0">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-blue-500">
            Hello, I&apos;m
          </p>

          <h1 className="text-6xl font-bold text-white">
            Lucky Phonharath
          </h1>

          <h2 className="mt-2 bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-6xl font-bold text-transparent">
            a Full-Stack Developer
          </h2>

          <p className="mt-8 max-w-md text-lg text-slate-300">
            Transforming complex business workflows into simple, scalable software.
          </p>

          <div className="mt-6 flex gap-4">
            <Button
             to="/projects"
              variant="filled"
              shape="square"
              icon={ArrowOutwardIcon}
              className="nav-link-enter"
              size='lg'
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              shape="square"
              icon={DownloadIcon}
              className="nav-link-enter"
              size='lg'
            >
              Download Resume
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/Luckkana-Phonharath"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-blue-500/40 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
            >
              <GithubIcon className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/luckkana-phonharath/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-blue-500/40 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
         {/* <div
          className="hero-orb"
          onMouseMove={handleMouseMove}
        >
          <div className="hero-orb-secondary" />
        </div> */}
      </div>
    </section>
  );
}