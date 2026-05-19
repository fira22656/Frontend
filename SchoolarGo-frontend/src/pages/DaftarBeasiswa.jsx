import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ScholarshipCard from "../components/ScholarshipCard";
import { beasiswaData } from "../data/dummyData";

export default function DaftarBeasiswa() {
  const [jenjang, setJenjang] = useState("");
  const [semester, setSemester] = useState("");
  const [prodi, setProdi] = useState("");

  const hasilFilter = beasiswaData.filter((item) => {
    return (
      (jenjang === "" || item.jenjang.includes(jenjang)) &&
      (semester === "" || item.semester === semester) &&
      (prodi === "" || item.prodi.toLowerCase().includes(prodi.toLowerCase()))
    );
  });

  return (
    <div>
      <Sidebar title="Daftar Beasiswa" />

      <main className="content">
        <section className="filter-header">
          <h1>Temukan Beasiswa yang Sesuai untukmu</h1>
          <p>Tentukan pilihan beasiswa berdasarkan kriteria yang diinginkan.</p>
        </section>

        <section className="filter-box">
          <div className="filter-card">
            <h3>Jurusan</h3>
            <select onChange={(e) => setProdi(e.target.value)}>
              <option value="">Semua Prodi</option>
              <option value="Umum">Umum</option>
              <option value="IPA">IPA</option>
              <option value="Teknologi Informasi">Teknologi Informasi</option>
              <option value="Ekonomi">Ekonomi</option>
            </select>
          </div>

          <div className="filter-card">
            <h3>Jenjang</h3>
            <select onChange={(e) => setJenjang(e.target.value)}>
              <option value="">Semua Jenjang</option>
              <option value="D3">D3</option>
              <option value="S1">S1</option>
              <option value="S2">S2</option>
            </select>
          </div>

          <div className="filter-card">
            <h3>Semester</h3>
            <select onChange={(e) => setSemester(e.target.value)}>
              <option value="">Semua Semester</option>
              <option value="1">Semester 1</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
            </select>
          </div>
        </section>

        <h1 className="section-title">Daftar Beasiswa</h1>

        <section className="grid-beasiswa">
          {hasilFilter.map((item) => (
            <ScholarshipCard key={item.id} item={item} />
          ))}
        </section>
      </main>
    </div>
  );
}