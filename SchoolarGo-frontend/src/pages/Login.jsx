import logo from "../assets/logo.png";

export default function Login() {
  return (
    <div className="auth-page">
      <div className="auth-header">
        <h1>SchoolarGo</h1>
      </div>

      <div className="auth-container">
        <div className="auth-logo">
          <img src={logo} alt="SchoolarGo" />
        </div>

        <form className="auth-form">
          <h2>Login</h2>
          <p>Selamat Datang Kembali. Silakan masuk untuk mengakses dasbor Anda.</p>

          <label>Email</label>
          <input type="email" placeholder="xxxxxxxxxxxxxxxx" />

          <label>Password</label>
          <input type="password" placeholder="xxxxxxxxxxxxxxxx" />

          <div className="auth-buttons">
            <button type="button" className="outline-btn">
              Forgot Password?
            </button>
            <button type="submit" className="btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}