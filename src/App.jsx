import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { MainLayout } from './components/layout/main-layout';


export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}