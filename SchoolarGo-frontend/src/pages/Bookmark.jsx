import Sidebar from "../components/Sidebar";
import ScholarshipCard from "../components/ScholarshipCard";
import { beasiswaData } from "../data/dummyData";

export default function Bookmark() {
  const bookmarkData = beasiswaData.slice(0, 4);

  return (
    <div>
      <Sidebar title="My Bookmark" />

      <main className="content">
        <section className="bookmark-title">
          <h1>Beasiswa Tersimpan</h1>
          <button>Tambahkan</button>
        </section>

        <section className="grid-beasiswa">
          {bookmarkData.map((item) => (
            <ScholarshipCard key={item.id} item={item} />
          ))}
        </section>
      </main>
    </div>
  );
}