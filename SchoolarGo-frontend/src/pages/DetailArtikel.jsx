import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { artikelData } from "../data/dummyData";
import { CalendarDays } from "lucide-react";

export default function DetailArtikel() {
  const { id } = useParams();
  const artikel = artikelData.find((item) => item.id === Number(id));

  return (
    <div>
      <Sidebar title="Berita" />

      <main className="content detail-artikel">
        <h1>{artikel?.title}</h1>
        <img src={artikel?.image} alt={artikel?.title} />

        <p className="date">
          <CalendarDays size={18} /> {artikel?.date}
        </p>

        <p>
          Lolos seleksi beasiswa tidak hanya dilihat dari nilai akademik, tetapi
          juga dari keaktifan, motivasi, dan kontribusi diri terhadap lingkungan
          sekitar. Pastikan seluruh dokumen yang diminta sudah lengkap dan sesuai
          ketentuan.
        </p>

        <p>
          Selain itu, tingkatkan pengalaman organisasi, kemampuan komunikasi,
          serta pemahaman terhadap tujuan beasiswa. Persiapkan esai motivasi
          dengan baik agar peluang diterima semakin besar.
        </p>

        <button className="btn-primary">Daftar</button>

        <div className="info-box">
          <p>
            Untuk informasi lengkap mengenai syarat dan tata cara pendaftaran,
            silakan kunjungi link berikut:
          </p>
          <h3>https://kip-kuliah.kemdikbud.go.id/</h3>
        </div>
      </main>
    </div>
  );
}