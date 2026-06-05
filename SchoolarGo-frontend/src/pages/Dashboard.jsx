import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";

import logo from "../assets/logo.png";



import fira from "../assets/fira.png";
import nisa from "../assets/nisa.png";
import koirotun from "../assets/koirotun.png";
import lukito from "../assets/lukito.png";

function Dashboard() {
  const navigate = useNavigate();

  const [beasiswaList, setBeasiswaList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBeasiswa = async () => {
    try {
      const response = await API.get("/scholarships");

      console.log("Data dashboard:", response.data);

      setBeasiswaList(response.data.data ?? response.data);
    } catch (error) {
      console.log(
        "Gagal ambil beasiswa dashboard:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBeasiswa();
  }, []);


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
          <Link to="/register">LOGOUT</Link>
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
    {loading ? (
      <p>Memuat beasiswa...</p>
    ) : (
      beasiswaList.slice(0, 6).map((item) => {
        const gambarBeasiswa = item.gambar
          ? item.gambar.startsWith("/images/")
            ? item.gambar
            : `/images/${item.gambar}`
          : "/images/kip.png";

        return (
          <div
            className="dashboard-card"
            key={item.id_scholarship}
            onClick={() =>
              navigate("/detail-beasiswa", {
                state: item,
              })
            }
          >
            <img src={gambarBeasiswa} alt={item.nama_beasiswa} />
            <h3>{item.nama_beasiswa}</h3>
          </div>
        );
      })
    )}
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
