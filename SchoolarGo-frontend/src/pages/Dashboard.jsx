import Navbar from "../components/Navbar";
import ScholarshipCard from "../components/ScholarshipCard";
import { beasiswaData } from "../data/dummyData";
import hero from "../assets/hero.png";

export default function Dashboard() {
  return (
    <div className="page">
      <Navbar />

      <section
        className="hero"
        style={{ backgroundImage: `linear-gradient(rgba(173,216,230,.65), rgba(173,216,230,.65)), url(${hero})` }}
      >
        <h1>Temukan Beasiswa Impianmu</h1>
        <p>Gantungkan Cita-citamu Setinggi Langit Bersama SchoolarGo.</p>

        <div className="hero-buttons">
          <a href="/daftar-beasiswa">Cari Beasiswa</a>
          <a href="/artikel">Lihat Artikel</a>
        </div>
      </section>

      <section className="card-row">
        {beasiswaData.map((item) => (
          <ScholarshipCard key={item.id} item={item} />
        ))}
      </section>

      <section className="testimoni">
        <h2>Testimoni Pengguna</h2>
        <p>Apa Kata Mereka, Bukti Nyata Kualitas Kami</p>

        <div className="testimoni-grid">
          <div className="testimoni-card">
            <h4>FIRA_salimah ⭐⭐⭐⭐⭐</h4>
            <p>BAGUS BANGEETTT SANGAT MEMBANTU</p>
          </div>

          <div className="testimoni-card">
            <h4>Khoirun_Nisa ⭐⭐⭐⭐⭐</h4>
            <p>Rekomended banget buat yang pengen cari beasiswa.</p>
          </div>

          <div className="testimoni-card">
            <h4>KOIROTUN ⭐⭐⭐⭐⭐</h4>
            <p>JUJUR KWEREN</p>
          </div>

          <div className="testimoni-card">
            <h4>LUKITO_ADI ⭐⭐⭐⭐⭐</h4>
            <p>KERENNNNN BANGET PLISSSS</p>
          </div>
        </div>
      </section>
    </div>
  );
}