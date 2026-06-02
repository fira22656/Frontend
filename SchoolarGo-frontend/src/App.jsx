import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import DaftarBeasiswa from "./pages/DaftarBeasiswa";
import DetailBeasiswa from "./pages/DetailBeasiswa";
import Artikel from "./pages/Artikel";
import DetailArtikel from "./pages/DetailArtikel";
import Bookmark from "./pages/Bookmark";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/daftar-beasiswa" element={<DaftarBeasiswa />} />
        <Route path="/detail-beasiswa" element={<DetailBeasiswa />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/detail-artikel" element={<DetailArtikel />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
