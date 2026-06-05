import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";
import logo from "../assets/logo.png";

import pertamina from "../assets/pertamina-1.png";
import tangerang from "../assets/tangerang-2.png";
import lpdp from "../assets/lpdp-3.png";

function Artikel() {
  const navigate = useNavigate();

const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

const getArticles = async () => {
  try {
    const response = await API.get("/articles");

    console.log("Data artikel:", response.data);

    setArticles(response.data.data);
  } catch (err) {
    console.log("Gagal ambil artikel:", err.response?.data);
    setError("Gagal memuat data artikel.");
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  getArticles();
}, []);

if (loading) {
  return <p>Memuat data artikel...</p>;
}

if (error) {
  return <p style={{ color: "red" }}>{error}</p>;
}

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
  {articles.length === 0 ? (
    <p>Belum ada data artikel.</p>
  ) : (
    articles.map((item) => (
      <Link
        to="/detail-artikel"
        state={item}
        className="artx-item"
        key={item.id_article}
      >
        <div className="artx-img-box">
          <img
            src={`/images/${item.gambar}`}
            alt={item.judul}
          />
        </div>

        <div className="artx-text">
          <h2>{item.judul}</h2>
          <p>
            {new Date(item.created_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </Link>
    ))
  )}
</section>
      </main>
    </div>
  );
}

export default Artikel;
