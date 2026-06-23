import { NavLink } from 'react-router-dom';
import { ArrowOutwardIcon } from '../icons';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Work', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

export function NavBar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050814]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <NavLink
          to="/"
          className="nav-link-enter text-2xl font-bold text-white"
          style={{ animationDelay: '0ms' }}
        >
          LP
          <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-400" />
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `group relative inline-block text-sm transition-all duration-300 nav-link-enter ${
                  isActive
                    ? 'scale-110 font-semibold text-blue-400!'
                    : 'scale-100 text-slate-300 hover:scale-105 hover:text-white'
                }`
              }
              style={{ animationDelay: `${(index + 1) * 120}ms` }}
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-400 transition-all duration-300 ${
                      isActive
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 group-hover:opacity-100 group-hover:scale-125'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="nav-link-enter group flex items-center gap-1 rounded-full border border-blue-500/40 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
          style={{ animationDelay: `${(navLinks.length + 1) * 120}ms` }}
        >
          Let’s Talk
          <ArrowOutwardIcon className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </NavLink>
      </nav>
    </header>
  );
}