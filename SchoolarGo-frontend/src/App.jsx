import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DaftarBeasiswa from "./pages/DaftarBeasiswa";
import Bookmark from "./pages/Bookmark";
import FAQ from "./pages/FAQ";
import Artikel from "./pages/Artikel";
import DetailArtikel from "./pages/DetailArtikel";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/daftar-beasiswa" element={<DaftarBeasiswa />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/artikel/:id" element={<DetailArtikel />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}