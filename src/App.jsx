import { Routes, Route } from 'react-router-dom'
import Layout          from './components/layout/Layout'
import ScrollToTop     from './components/ScrollToTop'
import HomePage        from './pages/HomePage'
import HistoirePage    from './pages/HistoirePage'
import PrestationsPage from './pages/PrestationsPage'
import GaleriePage     from './pages/GaleriePage'
import FaqPage         from './pages/FaqPage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"               element={<HomePage />} />
          <Route path="/notre-histoire" element={<HistoirePage />} />
          <Route path="/prestations"    element={<PrestationsPage />} />
          <Route path="/galerie"        element={<GaleriePage />} />
          <Route path="/faq"            element={<FaqPage />} />
        </Route>
      </Routes>
    </>
  )
}
