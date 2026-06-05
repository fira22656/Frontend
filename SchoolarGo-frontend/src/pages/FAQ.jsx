import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";
import logo from "../assets/logo.png";

function FAQ() {
  const [search, setSearch] = useState("");
  const [hasil, setHasil] = useState([]);

  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getFaqs = async () => {
  try {
    const response = await API.get("/faqs");

    console.log("Data FAQ:", response.data);

    setFaqs(response.data);
  } catch (err) {
    console.log("Gagal ambil FAQ:", err.response?.data);
    setError("Gagal memuat data FAQ.");
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  getFaqs();
}, []);

const handleSearch = () => {
  if (search.trim() === "") {
    alert("Masukkan pertanyaan terlebih dahulu!");
    setHasil([]);
    return;
  }

  const filtered = faqs.filter((item) =>
    item.pertanyaan.toLowerCase().includes(search.toLowerCase())
  );

  setHasil(filtered);
};

 const tampilFaq = hasil.length > 0 ? hasil : faqs;

 if (loading) {
  return <p>Memuat data FAQ...</p>;
}

if (error) {
  return <p style={{ color: "red" }}>{error}</p>;
}

  return (
    <div className="fq-page">
      <nav className="fq-navbar">
        <img src={logo} alt="SchoolarGo Logo" />

        <div className="fq-menu">
          <Link to="/bookmark">
            <button>BOOKMARK</button>
          </Link>

          <Link to="/faq">
            <button>FAQ</button>
          </Link>

          <Link to="/">
            <button>DASHBOARD</button>
          </Link>

          <Link to="/register">
            <button>LOG OUT</button>
          </Link>
        </div>
      </nav>

      <section className="fq-hero">
        <h1>FAQ</h1>
        <p>Find answers to commonly asked questions.</p>

        <input
          type="text"
          placeholder="Search for questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </section>

      <section className="fq-content">
        <div className="fq-row">
          <h2>Popular Questions</h2>

         <div className="fq-list">
  {tampilFaq.length === 0 ? (
    <p>Belum ada data FAQ.</p>
  ) : (
    tampilFaq.map((item) => (
      <div className="fq-item" key={item.id_faq}>
        <div className="fq-icon">?</div>
        <p className="fq-question">{item.pertanyaan}</p>
        <p className="fq-answer">{item.jawaban}</p>
      </div>
    ))
  )}
</div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
