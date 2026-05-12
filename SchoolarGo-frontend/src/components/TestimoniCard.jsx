export default function TestimoniCard({ item }) {
  return (
    <div className="testimoni-card">

      <img
        src={item.image}
        alt={item.name}
        className="testimoni-image"
      />

      <h3>{item.name}</h3>

      <p>{item.comment}</p>

    </div>
  );
}