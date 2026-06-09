import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Work', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

export default function NavBar() {
    return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050814]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <NavLink to="/" className="text-2xl font-bold text-white">
          L
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive
                    ? 'text-blue-400'
                    : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="rounded-full border border-blue-500/40 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-500/10"
        >
          Let’s Talk ↗
        </NavLink>
      </nav>
    </header>
  );
}