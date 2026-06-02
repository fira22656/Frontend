import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

import kip from "../assets/kip.png";
import ayoPintar from "../assets/ayo-pintar.png";
import ruangEdukasi from "../assets/ruang-edukasi.png";
import sangSurya from "../assets/sang-surya.png";
import luarNegri from "../assets/luar negri.png";
import japfa from "../assets/japfa.png";
import glowandlove from "../assets/glowandlovely.png";
import inspiratif from "../assets/inspiratif.png";

function Bookmark() {
  const navigate = useNavigate();

  const [bookmarks, setBookmarks] = useState([
    {
      title: "Beasiswa KIP-KULIAH",
      deadline: "Deadline 30 Maret 2026",
      image: kip,
      description:
        "Melalui beasiswa ini, penerima akan mendapatkan pembiayaan kuliah secara penuh serta bantuan uang saku untuk mendukung kebutuhan selama masa studi.",
      description2:
        "Dengan adanya program KIP-Kuliah, mahasiswa diharapkan dapat lebih fokus mengembangkan prestasi akademik maupun non-akademik.",
      link: "https://kip-kuliah.kemdikbud.go.id/",
    },
    {
      title: "Beasiswa Pendidikan Ayo Pintar",
      deadline: "Deadline 24 Maret 2026",
      image: ayoPintar,
      description:
        "Beasiswa Pendidikan Ayo Pintar ditujukan untuk membantu pelajar dan mahasiswa agar tetap semangat dalam menempuh pendidikan.",
      description2:
        "Program ini memberikan dukungan biaya pendidikan sehingga penerima dapat lebih fokus belajar dan mengembangkan kemampuan diri.",
      link: "https://www.google.com/search?q=beasiswa+pendidikan+ayo+pintar",
    },
    {
      title: "Beasiswa Pendidikan Ruang Edukasi",
      deadline: "Deadline 25 Mei 2026",
      image: ruangEdukasi,
      description:
        "Beasiswa Pendidikan Ruang Edukasi merupakan program bantuan pendidikan untuk mendukung pelajar dan mahasiswa yang membutuhkan.",
      description2:
        "Melalui beasiswa ini, penerima diharapkan dapat terus melanjutkan pendidikan dengan baik dan meningkatkan prestasi.",
      link: "https://www.google.com/search?q=beasiswa+ruang+edukasi",
    },
    {
      title: "Beasiswa Sang Surya",
      deadline: "Deadline 31 Juli 2026",
      image: sangSurya,
      description:
        "Beasiswa Sang Surya memberikan kesempatan bagi pelajar dan mahasiswa untuk memperoleh bantuan pendidikan.",
      description2:
        "Program ini dapat membantu meringankan biaya pendidikan dan mendukung penerima agar tetap berprestasi.",
      link: "https://www.google.com/search?q=beasiswa+sang+surya",
    },
    {
      title: "Beasiswa Luar Negeri",
      deadline: "Deadline 10 Juni 2026",
      image: luarNegri,
      description:
        "Beasiswa Luar Negeri memberikan peluang bagi mahasiswa untuk melanjutkan studi di luar negeri.",
      description2:
        "Program ini cocok bagi mahasiswa yang ingin memperluas pengalaman akademik dan mengembangkan wawasan internasional.",
      link: "https://www.google.com/search?q=beasiswa+luar+negeri+2026",
    },
    {
      title: "Beasiswa JAPFA",
      deadline: "Deadline 15 Juni 2026",
      image: japfa,
      description:
        "Beasiswa JAPFA merupakan bantuan pendidikan yang diberikan kepada pelajar atau mahasiswa berprestasi.",
      description2:
        "Program ini dapat membantu penerima dalam memenuhi kebutuhan pendidikan dan mengembangkan potensi diri.",
      link: "https://www.google.com/search?q=beasiswa+japfa",
    },
    {
      title: "Beasiswa Glow & Lovely",
      deadline: "Deadline 20 Juni 2026",
      image: glowandlove,
      description:
        "Beasiswa Glow & Lovely ditujukan untuk mendukung perempuan muda dalam melanjutkan pendidikan.",
      description2:
        "Program ini membantu penerima agar lebih percaya diri, mandiri, dan mampu mengembangkan cita-citanya.",
      link: "https://www.google.com/search?q=beasiswa+glow+and+lovely",
    },
    {
      title: "Beasiswa Inspiratif",
      deadline: "Deadline 25 Juni 2026",
      image: inspiratif,
      description:
        "Beasiswa Inspiratif merupakan program bantuan pendidikan untuk pelajar dan mahasiswa yang memiliki semangat belajar tinggi.",
      description2:
        "Beasiswa ini diharapkan dapat membantu penerima dalam mengembangkan prestasi dan mencapai tujuan pendidikannya.",
      link: "https://www.google.com/search?q=beasiswa+inspiratif",
    },
  ]);

  const [search, setSearch] = useState("");

  const handleHapus = (indexHapus) => {
    const konfirmasi = window.confirm(
      "Apakah kamu yakin ingin menghapus beasiswa ini dari bookmark?"
    );

    if (konfirmasi) {
      const dataBaru = bookmarks.filter((_, index) => index !== indexHapus);
      setBookmarks(dataBaru);
    }
  };

  const handleTambah = () => {
    navigate("/daftar-beasiswa");
  };

  const hasilSearch = bookmarks.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bookmark-page">
      <aside className="bookmark-sidebar">
        <img src={logo} alt="SchoolarGo Logo" className="bookmark-logo" />

        <Link to="/" className="bookmark-menu-item">
          <span>🏠</span>
          <p>Dashboard</p>
        </Link>

        <Link to="/bookmark" className="bookmark-menu-item">
          <span>📬</span>
          <p>Bookmark</p>
        </Link>

        <Link to="/faq" className="bookmark-menu-item">
          <span>💬</span>
          <p> FAQ</p>
        </Link>
      </aside>

      <main className="bookmark-main">
        <header className="bookmark-header">
          <h1>My Bookmark</h1>

          <div className="bookmark-search">
            <input
              type="text"
              placeholder="pencarian"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span>⌕</span>
          </div>
        </header>

        <section className="bookmark-hero">
          <h2>Beasiswa Tersimpan</h2>

          <button type="button" onClick={handleTambah}>
            Tambahkan
          </button>
        </section>

        <section className="bookmark-list">
          {hasilSearch.length === 0 ? (
            <p className="bookmark-empty">Beasiswa tidak ditemukan.</p>
          ) : (
            <div className="bookmark-grid">
              {hasilSearch.map((item, index) => (
                <div className="bookmark-card" key={index}>
                  <div
                    className="bookmark-card-content"
                    onClick={() => navigate("/detail-beasiswa", { state: item })}
                  >
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.deadline}</p>
                  </div>

                  <button
                    type="button"
                    className="bookmark-delete"
                    onClick={() => handleHapus(index)}
                  >
                    Hapus
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Bookmark;