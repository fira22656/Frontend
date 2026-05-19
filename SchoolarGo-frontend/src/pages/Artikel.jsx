import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { artikelData } from "../data/dummyData";
import { CalendarDays } from "lucide-react";

export default function Artikel() {
  return (
    <div>
      <Sidebar title="ARTIKEL" />

      <main className="content artikel-page">
        {artikelData.map((item) => (
          <Link to={`/artikel/${item.id}`} className="artikel-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <h2>{item.title}</h2>
              <p>
                <CalendarDays size={18} /> {item.date}
              </p>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}