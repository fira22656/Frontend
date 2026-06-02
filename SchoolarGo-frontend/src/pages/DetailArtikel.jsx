import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo.png";
import pertamina from "../assets/pertamina.png";

function DetailArtikel() {
  const location = useLocation();

  const artikel = location.state || {
    image: pertamina,
    title: "Cara Mendaftar Beasiswa Pertamina",
    description:
      "Artikel ini membahas langkah-langkah mendaftar Beasiswa Pertamina, mulai dari memahami syarat pendaftaran, menyiapkan dokumen, mengisi formulir, hingga mengecek kembali data sebelum dikirim.",
    description2:
      "Beasiswa Pertamina biasanya ditujukan untuk pelajar atau mahasiswa yang memiliki semangat belajar tinggi dan ingin mendapatkan dukungan pendidikan.",
    link: "https://www.google.com/search?q=beasiswa+pertamina+2026",
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
            <h2>{artikel.title}</h2>

            <p>{artikel.description}</p>

            <p>{artikel.description2}</p>
          </div>

          <div className="detailArtikel-imageBox">
            <img src={artikel.image} alt={artikel.title} />
          </div>
        </div>

        <div className="detailArtikel-buttons">
          

          
        </div>
      </section>
    </div>
  );
}

export default DetailArtikel;