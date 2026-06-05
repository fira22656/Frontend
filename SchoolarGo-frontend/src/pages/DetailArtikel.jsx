import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";
import pertamina from "../assets/pertamina.png";

function DetailArtikel() {
  const location = useLocation();

  const artikel = location.state || {
  gambar: "artikel.jpg",
  judul: "Tips Mendapatkan Beasiswa",
  isi_artikel: "Persiapkan dokumen, CV, sertifikat, dan esai dengan baik.",
  link_pendaftaran: "https://contoh.com",
};
  return (
    <div className="detailArtikel-page">
      <header className="detailArtikel-header">
        <img src={logo} alt="SchoolarGo Logo" className="detailArtikel-logo" />

        <nav className="detailArtikel-nav">
          <Link to="/bookmark">BOOKMARK</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/">DASHBOARD</Link>
          <Link to="/login">LOG OUT</Link>
        </nav>
      </header>

      <section className="detailArtikel-hero">
        <h1>Temukan Beasiswa Impianmu</h1>
        <p>Gantungkan Cita-citamu Setinggi Langit Bersama SchoolarGo</p>
        <Link to="/daftar-beasiswa" className="detailArtikel-searchBtn">
          Cari Beasiswa
        </Link>
      </section>

      <section className="detailArtikel-content">
        <div className="detailArtikel-card">
  <div className="detailArtikel-text">
    <h2>{artikel.judul}</h2>

    <p>{artikel.isi_artikel}</p>
  </div>

  <div className="detailArtikel-imageBox">
    <img
      src={
        artikel.gambar?.startsWith("/images/")
          ? artikel.gambar
          : `/images/${artikel.gambar}`
      }
      alt={artikel.judul}
    />
  </div>
</div>
        <div className="detailArtikel-buttons">
          

          
        </div>
      </section>
    </div>
  );
}

export default DetailArtikel;
