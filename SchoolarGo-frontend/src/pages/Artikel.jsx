import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import pertamina from "../assets/pertamina-1.png";
import tangerang from "../assets/tangerang-2.png";
import lpdp from "../assets/lpdp-3.png";

function Artikel() {
  const artikelList = [
    {
      title: "Cara Mendaftar Beasiswa Pertamina",
      image: pertamina,
      time: "3 hari lalu",
      description:
        "Beasiswa Pertamina merupakan salah satu program bantuan pendidikan yang dapat membantu mahasiswa dalam meringankan biaya kuliah. Untuk mendaftar, calon penerima perlu memperhatikan persyaratan, jadwal pendaftaran, serta dokumen yang harus disiapkan agar proses seleksi dapat berjalan dengan baik.",
      description2:
        "Selain melengkapi dokumen, pendaftar juga perlu menyiapkan motivasi yang kuat dan menunjukkan keaktifan dalam bidang akademik maupun non-akademik. Dengan persiapan yang matang, peluang untuk lolos seleksi beasiswa akan menjadi lebih besar.",
    },
    {
      title: "Informasi Beasiswa Tangerang Gemilang",
      image: tangerang,
      time: "1 bulan lalu",
      description:
        "Beasiswa Tangerang Gemilang merupakan program bantuan pendidikan yang ditujukan untuk mendukung pelajar dan mahasiswa agar dapat melanjutkan pendidikan dengan lebih baik. Program ini membantu meringankan kebutuhan biaya pendidikan bagi penerima yang memenuhi persyaratan.",
      description2:
        "Pendaftar perlu memperhatikan ketentuan yang berlaku, mulai dari persyaratan administrasi, jadwal pendaftaran, hingga dokumen pendukung. Dengan persiapan yang tepat, peluang untuk mengikuti seleksi beasiswa ini akan menjadi lebih maksimal.",
    },
    {
      title: "Tips Lolos Beasiswa LPDP",
      image: lpdp,
      time: "2 bulan lalu",
      description:
        "Beasiswa LPDP menjadi salah satu beasiswa yang banyak diminati karena memberikan dukungan pendidikan yang cukup lengkap. Untuk mengikuti seleksi, pendaftar perlu menyiapkan dokumen, rencana studi, serta alasan yang kuat dalam memilih program pendidikan.",
      description2:
        "Selain kemampuan akademik, pendaftar juga perlu menunjukkan visi, pengalaman, dan kontribusi yang ingin diberikan setelah menyelesaikan studi. Persiapan yang matang akan sangat membantu dalam menghadapi setiap tahap seleksi.",
    },
  ];

  return (
    <div className="artx-page">
      <aside className="artx-sidebar">
        <img src={logo} alt="SchoolarGo Logo" />

        <nav>
          <Link to="/artikel">📑 Berita</Link>
          <Link to="/"> 🏠 Dashboard</Link>
          <Link to="/bookmark"> 📬 Bookmark</Link>
          <Link to="/faq"> 💬FAQ</Link>
        </nav>
      </aside>

      <main className="artx-main">
        <header className="artx-header">
          <h1>ARTIKEL</h1>

          <div className="artx-header-right">
            <Link to="/">
              <button>Dashboard</button>
            </Link>

            <div className="artx-search">
              <input type="text" placeholder="Search in site" />
              <span>⌕</span>
            </div>
          </div>
        </header>

        <section className="artx-list">
          {artikelList.map((item, index) => (
            <Link
              to="/detail-artikel"
              state={item}
              className="artx-item"
              key={index}
            >
              <div className="artx-img-box">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="artx-text">
                <h2>{item.title}</h2>
                <p>▦ {item.time}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Artikel;