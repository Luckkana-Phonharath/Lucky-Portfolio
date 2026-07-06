import { Outlet } from 'react-router-dom';
import { NavBar } from './navbar';
// import { Footer } from './Footer';
import { ScrollToTop } from '../extra/scroll-to-top';

export function MainLayout() {
  return (
    <div className="min-h-screen  flex flex-col">
      <ScrollToTop />
      <NavBar />

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}