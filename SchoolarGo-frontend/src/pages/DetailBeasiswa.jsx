import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import hero from "../assets/hero.png";
import kip from "../assets/kip.png";

function DetailBeasiswa() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(false);

  const dataDefault = {
    title: "Beasiswa KIP-KULIAH",
    image: kip,
    description:
      "Melalui beasiswa ini, penerima akan mendapatkan pembiayaan kuliah secara penuh serta bantuan uang saku untuk mendukung kebutuhan selama masa studi. Dengan adanya program KIP-Kuliah, diharapkan mahasiswa dapat lebih fokus mengembangkan prestasi akademik maupun non-akademik dan mewujudkan cita-cita mereka.",
    description2:
      "Universitas Muhammadiyah Gresik berkomitmen menghadirkan pendidikan yang berkualitas, inklusif, dan mudah diakses oleh seluruh generasi muda Indonesia. Beasiswa ini juga menjadi bentuk dukungan kampus dalam menciptakan sumber daya manusia yang unggul, berdaya saing, dan siap menghadapi dunia kerja di masa depan.",
    link: "https://kip-kuliah.kemdikbud.go.id/",
  };

  const beasiswa = location.state || dataDefault;

  const handleDaftar = () => {
    setShowInfo(!showInfo);
  };

  const handleSimpan = () => {
    alert("Beasiswa berhasil disimpan ke Bookmark!");
    navigate("/bookmark");
  };

  return (
    <div className="detail-page">
      <header className="detail-navbar">
        <img src={logo} alt="SchoolarGo Logo" className="detail-logo" />

        <nav className="detail-menu">
          <Link to="/bookmark">BOOKMARK</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/">DASHBOARD</Link>
          <Link to="/register">LOGOUT</Link>
        </nav>
      </header>

      <section className="detail-hero">
        <div className="detail-hero-content">
          <h1>Temukan Beasiswa Impianmu</h1>
          <p>Gantungkan Cita-citamu Setinggi Langit Bersama SchoolarGo.</p>

          <Link to="/daftar-beasiswa">
            <button type="button">Cari Beasiswa</button>
          </Link>
        </div>
      </section>

      <section className="detail-card">
        <div className="detail-text">
          <h2>{beasiswa.title}</h2>

          <p>{beasiswa.description}</p>

          <p>{beasiswa.description2}</p>
        </div>

        <div className="detail-image-box">
          <img src={beasiswa.image} alt={beasiswa.title} />
        </div>
      </section>

      <div className="detail-buttons">
        <button type="button" onClick={handleDaftar}>
          Daftar
        </button>

        <button type="button" onClick={handleSimpan}>
          Simpan
        </button>
      </div>

      {showInfo && (
        <section className="detail-info">
          <p>
            Untuk informasi lengkap mengenai syarat dan tata cara pendaftaran,
            silakan kunjungi link berikut:
          </p>

          <a href={beasiswa.link} target="_blank" rel="noreferrer">
            {beasiswa.link}
          </a>
        </section>
      )}
    </div>
  );
}

export default DetailBeasiswa;