import { Outlet } from 'react-router-dom';
import { NavBar } from './navbar';
// import { Footer } from './Footer';
import { ScrollToTop } from '../extra/scroll-to-top';

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <NavBar />

      <main className="flex-1">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}