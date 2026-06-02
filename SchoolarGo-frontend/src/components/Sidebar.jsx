import { Link } from "react-router-dom";
import { Home, Bookmark, HelpCircle, Newspaper, GraduationCap } from "lucide-react";
import logo from "../assets/logo.png";

export default function Sidebar({ title }) {
  return (
    <>
      <header className="topbar">
        <img src={logo} alt="SchoolarGo" />
        <h2>{title}</h2>
        <input type="text" placeholder="Pencarian" />
      </header>

      <aside className="sidebar">
        <Link to="/">
          <Home size={28} /> Dashboard
        </Link>
        <Link to="/daftar-beasiswa">
          <GraduationCap size={28} /> Daftar Beasiswa
        </Link>
        <Link to="/artikel">
          <Newspaper size={28} /> Berita
        </Link>
        <Link to="/bookmark">
          <Bookmark size={28} /> Bookmark
        </Link>
        <Link to="/faq">
          <HelpCircle size={28} /> FAQ
        </Link>
      </aside>
    </>
  );
}