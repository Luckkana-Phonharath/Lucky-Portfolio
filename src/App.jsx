import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/page';
import { About } from './pages/about/page';
import { Work } from './pages/work/page';
import { Contact } from './pages/contact/page';
import { MainLayout } from './components/layout/main-layout';


export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}