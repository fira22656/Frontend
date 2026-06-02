import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const correctEmail = "firasalimah@student.ub.ac.id";
  const correctPassword = "12345";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email !== correctEmail && password !== correctPassword) {
      alert("Email dan password salah!");
      setEmail("");
      setPassword("");
      return;
    }

    if (email !== correctEmail) {
      alert("Email salah!");
      setEmail("");
      return;
    }

    if (password !== correctPassword) {
      alert("Password salah!");
      setPassword("");
      return;
    }

    alert("Login berhasil!");
    navigate("/");
  };

  return (
    <div className="login-page">
      <header className="login-top">
        <h1>SchoolarGo</h1>
      </header>

      <main className="login-content">
        <section className="login-left">
          <img src={logo} alt="SchoolarGo Logo" />
        </section>

        <section className="login-right">
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Login</h2>

            <p className="login-desc">
              Selamat Datang Kembali. Silakan masuk untuk mengakses dasbor Anda.
            </p>

            <div className="login-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="xxxxxxxxxxxxxxxx"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="xxxxxxxxxxxxxxxx"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="login-buttons">
              <button type="button" className="forgot-button">
                Forgot Password?
              </button>

              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;