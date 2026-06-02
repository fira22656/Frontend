import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Register() {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Registrasi berhasil!");
    navigate("/login");
  };

  return (
    <div className="register-page">
      <nav className="register-navbar">
        <div className="register-logo">
          <img src={logo} alt="SchoolarGo Logo" />
        </div>

        <div className="register-menu">
          <Link to="/">Dashboard</Link>
          <Link to="/">SchoolarGo</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/login">Login</Link>
          <Link to="/register" className="register-active">
            Sign Up
          </Link>
        </div>
      </nav>

      <main className="register-main">
        <h1>SchoolarGo Registration</h1>
        <h2>Create your account to apply for SchoolarGo</h2>

        <form className="register-form">
          <div className="register-group">
            <label>Full Name</label>
            <input type="text" />
          </div>

          <div className="register-group">
            <label>Email Address</label>
            <input type="email" />
          </div>

          <div className="register-group">
            <label>Password</label>
            <input type="password" />
            <p>Min. 8 characters</p>
          </div>

          <div className="register-group">
            <label>Confirm Password</label>
            <input type="password" />
            <p>Min. 8 characters</p>
          </div>

          <div className="register-group">
            <label>Education Level</label>
            <select>
              <option>Select Educations Level</option>
              <option>SMA/SMK</option>
              <option>D3</option>
              <option>S1</option>
              <option>S2</option>
            </select>
          </div>

          <div className="register-group">
            <label>Current Semester</label>
            <select>
              <option>Select Semester</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>

          <div className="register-check">
            <input type="checkbox" />
            <span>I agree to the Terms & Conditions and Privacy Policy</span>
          </div>
        </form>

        <button className="register-button" onClick={handleSignUp}>
          Sign Up
        </button>

        <p className="register-login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </main>
    </div>
  );
}

export default Register;
