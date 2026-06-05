import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";

import logo from "../assets/logo.png";

function Bookmark() {
  const navigate = useNavigate();

  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getBookmarks = async () => {
  try {
    const response = await API.get("/bookmarks");

    console.log("Data bookmark:", response.data);

    setBookmarks(response.data.data ?? response.data);
  } catch (err) {
    console.log("Gagal ambil bookmark:", err.response?.data);
    setError("Gagal memuat bookmark. Pastikan kamu sudah login.");
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  getBookmarks();
}, []);

  const [search, setSearch] = useState("");

  const handleHapus = async (idBookmark) => {
  const konfirmasi = window.confirm(
    "Apakah kamu yakin ingin menghapus beasiswa ini dari bookmark?"
  );

  if (!konfirmasi) return;

  try {
    await API.delete(`/bookmarks/${idBookmark}`);

    setBookmarks((prev) =>
      prev.filter((item) => item.id_bookmark !== idBookmark)
    );

    alert("Bookmark berhasil dihapus.");
  } catch (err) {
    console.log("Gagal hapus bookmark:", err.response?.data);
    alert("Gagal menghapus bookmark.");
  }
};

  const handleTambah = () => {
    navigate("/daftar-beasiswa");
  };

  const hasilSearch = bookmarks.filter((item) =>
  item.scholarship?.nama_beasiswa
    ?.toLowerCase()
    .includes(search.toLowerCase())
);

if (loading) {
  return <p>Memuat data bookmark...</p>;
}

if (error) {
  return <p style={{ color: "red" }}>{error}</p>;
}

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
    <p className="bookmark-empty">Belum ada beasiswa yang disimpan.</p>
  ) : (
    <div className="bookmark-grid">
      {hasilSearch.map((item) => {
  const beasiswa = item.scholarship;

  const gambarBookmark = beasiswa?.gambar
    ? beasiswa.gambar.startsWith("/images/")
      ? beasiswa.gambar
      : `/images/${beasiswa.gambar}`
    : "/images/kip.png";

  return (
    <div className="bookmark-card" key={item.id_bookmark}>
      <div
        className="bookmark-card-content"
        onClick={() =>
          navigate("/detail-beasiswa", {
            state: beasiswa,
          })
        }
      >
        <img
          src={gambarBookmark}
          alt={beasiswa?.nama_beasiswa}
        />

        <div className="bookmark-card-title">
          <h3>{beasiswa?.nama_beasiswa}</h3>
        </div>
      </div>

      <button
        type="button"
        className="bookmark-delete"
        onClick={() => handleHapus(item.id_bookmark)}
      >
        Hapus
      </button>
    </div>
  );
})}
    </div>
  )}
</section>
      </main>
    </div>
  );

}

export default Bookmark;
