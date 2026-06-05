import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";
import logo from "../assets/logo.png";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await API.post("/login", {
      email: email,
      password: password,
    });

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));

    alert("Login berhasil!");
    navigate("/");
  } catch (error) {
    alert("Login gagal! Email atau password salah.");
    console.log(error.response?.data || error.message);
  }
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
             <a
  href="/forgot-password"
  className="forgot-button"
  style={{
    position: "relative",
    zIndex: 9999,
    pointerEvents: "auto",
    cursor: "pointer",
    textDecoration: "none",
  }}
>
  Forgot Password?
</a>
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
