export default function ScholarshipCard({ item }) {
  return (
    <div className="scholarship-card">

      <img
        src={item.image}
        alt={item.title}
        className="scholarship-image"
      />

      <div className="scholarship-content">
        <h3>{item.title}</h3>

        <p className="deadline">
          Deadline: {item.deadline}
        </p>

        <button className="detail-btn">
          Lihat Detail
        </button>
      </div>

    </div>
  );
}