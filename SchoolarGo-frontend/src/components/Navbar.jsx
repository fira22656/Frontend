import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="SchoolarGo" />
      </div>

      <div className="nav-menu">
        <Link to="/">Dashboard</Link>
        <Link to="/daftar-beasiswa">SchoolarGo</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/login">Login</Link>
        <Link to="/register" className="btn-signup">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}