import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Article } from './pages/Article';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
      </Route>
    </Routes>
  );
}
