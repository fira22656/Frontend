import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

import kip from "../assets/kip.png";
import biru from "../assets/biru.png";
import bri from "../assets/bri.png";

function DaftarBeasiswa() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [jenjang, setJenjang] = useState("");
  const [semester, setSemester] = useState("");
  const [hasil, setHasil] = useState([]);

  const dataBeasiswa = [
    {
      title: "Beasiswa KIP-KULIAH",
      image: kip,
      jurusan: ["kedokteran", "IPA", "Matematika"],
      jenjang: ["D4/S1", "S2", "D2/D3"],
      semester: ["1", "2", "3", "4", "5", "6", "7"],
      description:
        "Melalui beasiswa ini, penerima akan mendapatkan pembiayaan kuliah secara penuh serta bantuan uang saku untuk mendukung kebutuhan selama masa studi. Dengan adanya program KIP-Kuliah, diharapkan mahasiswa dapat lebih fokus mengembangkan prestasi akademik maupun non-akademik dan mewujudkan cita-cita mereka.",
      description2:
        "Universitas Muhammadiyah Gresik berkomitmen menghadirkan pendidikan yang berkualitas, inklusif, dan mudah diakses oleh seluruh generasi muda Indonesia. Beasiswa ini juga menjadi bentuk dukungan kampus dalam menciptakan sumber daya manusia yang unggul, berdaya saing, dan siap menghadapi dunia kerja di masa depan.",
      link: "https://kip-kuliah.kemdikbud.go.id/",
    },
    {
      title: "Beasiswa BIRU",
      image: biru,
      jurusan: ["IPA", "Matematika"],
      jenjang: ["D4/S1", "S2"],
      semester: ["1", "2", "3", "4", "5", "6"],
      description:
        "Beasiswa BIRU ditujukan untuk membantu mahasiswa aktif agar tetap dapat melanjutkan pendidikan dengan baik.",
      description2:
        "Program ini memberikan dukungan biaya pendidikan sehingga penerima dapat lebih fokus belajar dan mengembangkan kemampuan diri.",
      link: "https://www.google.com/search?q=beasiswa+biru+2026",
    },
    {
      title: "Beasiswa BRI",
      image: bri,
      jurusan: ["kedokteran", "IPA", "Matematika"],
      jenjang: ["D4/S1", "D2/D3"],
      semester: ["1", "2", "3", "4", "5", "6", "7"],
      description:
        "Beasiswa BRI merupakan program bantuan pendidikan yang membantu pelajar dan mahasiswa dalam meringankan kebutuhan biaya studi.",
      description2:
        "Beasiswa ini juga mendorong penerima untuk terus berprestasi dan aktif mengembangkan potensi diri.",
      link: "https://www.google.com/search?q=beasiswa+BRI+2026",
    },
  ];

  const handleCari = () => {
    let data = dataBeasiswa;

    if (search.trim() !== "") {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (jurusan !== "") {
      data = data.filter((item) => item.jurusan.includes(jurusan));
    }

    if (jenjang !== "") {
      data = data.filter((item) => item.jenjang.includes(jenjang));
    }

    if (semester !== "") {
      data = data.filter((item) => item.semester.includes(semester));
    }

    setHasil(data);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleCari();
    }
  };

  const tampilData = hasil.length > 0 ? hasil : dataBeasiswa;

  return (
    <div className="daftar-page">
      <aside className="daftar-sidebar">
        <img src={logo} alt="SchoolarGo Logo" className="daftar-logo" />

        <Link to="/" className="daftar-menu-item">
          <span>🏠</span>
          <p>Dashboard</p>
        </Link>

        <Link to="/daftar-beasiswa" className="daftar-menu-item">
          <span>🎓</span>
          <p>Daftar Beasiswa</p>
        </Link>

        <Link to="/faq" className="daftar-menu-item">
          <span>💬</span>
          <p>FAQ</p>
        </Link>
      </aside>

      <main className="daftar-main">
        <header className="daftar-header">
          <h1>Daftar Beasiswa</h1>

          <div className="daftar-search">
            <input
              type="text"
              placeholder="Pencarian"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleEnter}
            />
            <button type="button" onClick={handleCari}>
              ⌕
            </button>
          </div>
        </header>

        <section className="daftar-banner">
          <h2>
            Temukan Beasiswa yang <br />
            Sesuai untukmu
          </h2>
          <p>Tentukan pilihan beasiswa berdasarkan kriteria yang diinginkan.</p>
        </section>

        <section className="filter-section">
          <div className="filter-card">
            <div className="filter-icon">📖</div>

            <div>
              <h3>Jurusan</h3>

              <div className="filter-options">
                {["kedokteran", "IPA", "Matematika"].map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={jurusan === item ? "active-filter" : ""}
                    onClick={() => setJurusan(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="filter-card">
            <div className="filter-icon">🎓</div>

            <div>
              <h3>Jenjang</h3>

              <div className="filter-options">
                {["D4/S1", "S2", "D2/D3"].map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={jenjang === item ? "active-filter" : ""}
                    onClick={() => setJenjang(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="filter-card">
            <div className="filter-icon">📄</div>

            <div>
              <h3>Semester</h3>

              <div className="filter-options">
                {["1", "2", "3", "4", "5", "6", "7"].map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={semester === item ? "active-filter" : ""}
                    onClick={() => setSemester(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="daftar-button-wrapper">
          <button type="button" className="daftar-cari-button" onClick={handleCari}>
            Cari
          </button>
        </div>

        <section className="daftar-result-section">
          <h2>Daftar Beasiswa</h2>

          <div className="daftar-card-grid">
            {tampilData.map((item, index) => (
              <div
                className="daftar-card"
                key={index}
                onClick={() => navigate("/detail-beasiswa", { state: item })}
              >
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default DaftarBeasiswa;