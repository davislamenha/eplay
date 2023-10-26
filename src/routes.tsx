import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Category'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categories />} />
  </Routes>
)

export default Rotas
