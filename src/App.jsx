import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"

import Home from "./pages/Home"
import Business from "./pages/Business"
import Azienda from "./pages/Azienda"
import LavoraConNoi from "./pages/LavoraConNoi"
import Contatti from "./pages/Contatti"

export default function App() {

  return (
    <BrowserRouter>
    <Routes>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/azienda" element={<Azienda />} />
        <Route path="/lavora-con-noi" element={<LavoraConNoi />} />
        <Route path="/contatti" element={<Contatti />} />
      </Route>

    </Routes>
    </BrowserRouter>
  )
}
