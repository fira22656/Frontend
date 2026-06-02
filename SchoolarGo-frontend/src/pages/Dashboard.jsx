import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

import kip from "../assets/kip.png";
import pertamina from "../assets/pertamina.png";
import biru from "../assets/biru.png";
import bca from "../assets/bca.png";
import djarum from "../assets/djarum.png";
import bri from "../assets/bri.png";

import fira from "../assets/fira.png";
import nisa from "../assets/nisa.png";
import koirotun from "../assets/koirotun.png";
import lukito from "../assets/lukito.png";

function Dashboard() {
  const beasiswaList = [
    {
      title: "Beasiswa KIPK 2026",
      image: kip,
      description:
        "Melalui beasiswa ini, penerima akan mendapatkan pembiayaan kuliah secara penuh serta bantuan uang saku untuk mendukung kebutuhan selama masa studi. Dengan adanya program KIP-Kuliah, diharapkan mahasiswa dapat lebih fokus mengembangkan prestasi akademik maupun non-akademik dan mewujudkan cita-cita mereka.",
      description2:
        "Universitas Muhammadiyah Gresik berkomitmen menghadirkan pendidikan yang berkualitas, inklusif, dan mudah diakses oleh seluruh generasi muda Indonesia. Beasiswa ini juga menjadi bentuk dukungan kampus dalam menciptakan sumber daya manusia yang unggul, berdaya saing, dan siap menghadapi dunia kerja di masa depan.",
      link: "https://kip-kuliah.kemdikbud.go.id/",
    },
    {
      title: "Beasiswa Pertamina 2026",
      image: pertamina,
      description:
        "Beasiswa Pertamina merupakan program bantuan pendidikan untuk mahasiswa berprestasi dan memiliki kepedulian terhadap lingkungan.",
      description2:
        "Program ini membantu penerima untuk meningkatkan prestasi, aktif dalam kegiatan positif, dan memberikan kontribusi bagi lingkungan sekitar.",
      link: "https://www.google.com/search?q=beasiswa+pertamina+2026",
    },
    {
      title: "Beasiswa BIRU 2026",
      image: biru,
      description:
        "Beasiswa BIRU ditujukan untuk membantu mahasiswa aktif agar tetap dapat melanjutkan pendidikan dengan baik.",
      description2:
        "Program ini memberikan dukungan biaya pendidikan sehingga penerima dapat lebih fokus belajar dan mengembangkan kemampuan diri.",
      link: "https://www.google.com/search?q=beasiswa+biru+2026",
    },
    {
      title: "Beasiswa PPTI BCA",
      image: bca,
      description:
        "Beasiswa PPTI BCA merupakan program pendidikan yang memberikan kesempatan kepada lulusan SMA atau sederajat untuk belajar di bidang teknologi informasi.",
      description2:
        "Program ini dapat menjadi peluang bagi peserta untuk meningkatkan kemampuan dan mempersiapkan diri menghadapi dunia kerja.",
      link: "https://www.google.com/search?q=beasiswa+ppti+bca",
    },
    {
      title: "Beasiswa Djarum 2026",
      image: djarum,
      description:
        "Beasiswa Djarum merupakan program bantuan pendidikan yang diberikan kepada mahasiswa berprestasi.",
      description2:
        "Program ini tidak hanya mendukung biaya pendidikan, tetapi juga memberikan kesempatan untuk mengembangkan soft skill.",
      link: "https://www.google.com/search?q=beasiswa+djarum+2026",
    },
    {
      title: "Beasiswa BRI 2026",
      image: bri,
      description:
        "Beasiswa BRI merupakan program bantuan pendidikan yang membantu pelajar dan mahasiswa dalam meringankan kebutuhan biaya studi.",
      description2:
        "Beasiswa ini juga mendorong penerima untuk terus berprestasi dan aktif mengembangkan potensi diri.",
      link: "https://www.google.com/search?q=beasiswa+BRI+2026",
    },
  ];

  const testimoniList = [
    {
      name: "FIRA_salimah",
      text: "BAGUS BANGEEETTT SANGAT MEMBANTU",
      image: fira,
    },
    {
      name: "Khoirun_Nisa",
      text: "rekomended banget sih website ini buat yang pengen cari beasiswa",
      image: nisa,
    },
    {
      name: "KOIROTUN",
      text: "JUJUR KWEREN",
      image: koirotun,
    },
    {
      name: "LUKITO_ADI",
      text: "KWRENNNNN BANGET PLISSSS",
      image: lukito,
    },
  ];

  return (
    <div className="dashboard-page">
      <header className="dashboard-navbar">
        <img src={logo} alt="SchoolarGo Logo" className="dashboard-logo" />

        <nav className="dashboard-menu">
          <Link to="/bookmark">BOOKMARK</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/login">LOGIN</Link>
          <Link to="/register">LOG OUT</Link>
        </nav>
      </header>

      <section className="dashboard-hero">
        <div className="dashboard-hero-content">
          <h1>Temukan Beasiswa Impianmu</h1>
          <p>Gantungkan Cita-citamu Setinggi Langit Bersama SchoolarGo.</p>

          <div className="dashboard-hero-buttons">
            <Link to="/daftar-beasiswa">
              <button type="button">Cari Beasiswa</button>
            </Link>

            <Link to="/artikel">
              <button type="button">Lihat Artikel</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="dashboard-beasiswa">
        <div className="dashboard-card-row">
          {beasiswaList.map((item, index) => (
            <Link
              to="/detail-beasiswa"
              state={item}
              className="dashboard-card"
              key={index}
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="dashboard-testimoni">
        <h2>Testimoni Pengguna</h2>
        <p>Apa Kata Mereka, Bukti Nyata Kualitas Kami</p>

        <div className="testimoni-grid">
          {testimoniList.map((item, index) => (
            <div className="testimoni-card" key={index}>
              <div className="testimoni-top">
                <div className="testimoni-user">
                  <img src={item.image} alt={item.name} />
                  <strong>{item.name}</strong>
                </div>

                <span>★★★★★</span>
              </div>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
