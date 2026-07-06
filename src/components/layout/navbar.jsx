import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowOutwardIcon } from '../icons';
import { Button } from '../button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
];

export function NavBar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
     <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#050814]/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
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
          <Button
            to="/contact"
            variant="outline"
            shape="rounded"
            icon={ArrowOutwardIcon}
            className="nav-link-enter"
            style={{ animationDelay: `${(navLinks.length + 1) * 120}ms` }}
          >
            Let’s Talk
          </Button>
      </nav>
    </header>
  );
}