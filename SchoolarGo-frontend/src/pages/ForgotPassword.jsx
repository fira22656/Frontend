import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setPesan("Masukkan email terlebih dahulu.");
      return;
    }

    setPesan(
      "Jika email terdaftar, link reset password akan dikirim ke email tersebut."
    );
  };

  return (
    <div className="forgot-page">
      <div className="forgot-card">
        <h1>Forgot Password</h1>
        <p>Masukkan email akun kamu untuk reset password.</p>

        {pesan && <p className="forgot-message">{pesan}</p>}

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Masukkan email kamu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Kirim Link Reset</button>
        </form>

        <Link to="/login" className="back-login">
          Kembali ke Login
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;