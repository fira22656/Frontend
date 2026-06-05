import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";
import logo from "../assets/logo.png";

function Register() {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
     nama_lengkap: "",
      email: "",
      password: "",
      password_confirmation: "",
      education_level_id: "",
      semester: "",
});

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

try {
  const dataRegister = {
  nama_lengkap: form.nama_lengkap,
  email: form.email,
  password: form.password,
  password_confirmation: form.password_confirmation,
};

  const response = await API.post("/register", dataRegister);

  console.log("Register berhasil:", response.data);

  alert("Registrasi berhasil!");
  navigate("/login");
} catch (err) {
  console.log("Register gagal:", err.response?.data);

  if (err.response?.data?.errors) {
    const allErrors = Object.values(err.response.data.errors)
      .flat()
      .join(" ");

    setError(allErrors);
  } else {
    setError(err.response?.data?.message || "Registrasi gagal.");
  }
}

  };

  return (
    <div className="register-page">
      <nav className="register-navbar">
  <div className="register-logo">
    <img src={logo} alt="ScholarGo Logo" />
  </div>

  <div className="register-menu">
    <Link to="/login">Login</Link>
    <Link to="/register" className="register-active">
      Sign Up
    </Link>
  </div>
</nav>

      <main className="register-main">
        <h1>ScholarGo Registration</h1>
        <h2>Create your account to apply for ScholarGo</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form className="register-form" onSubmit={handleSignUp}>
          <div className="register-group">
            <label>Full Name</label>
           <input
            type="text"
            name="nama_lengkap"
            value={form.nama_lengkap}
            onChange={handleChange}
            required
          />
          </div>

          <div className="register-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <p>Min. 8 characters</p>
          </div>

          <div className="register-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="password_confirmation"
              value={form.password_confirmation}
              onChange={handleChange}
              required
            />
            <p>Min. 8 characters</p>
          </div>

          <div className="register-group">
            <label>Education Level</label>
            <select
              name="education_level_id"
              value={form.education_level_id}
              onChange={handleChange}
              required
            >
              <option value="">Select Education Level</option>
              <option value="1">SMA/SMK</option>
              <option value="2">D3</option>
              <option value="3">S1</option>
              <option value="4">S2</option>
            </select>
          </div>

          <div className="register-group">
            <label>Current Semester</label>
            <select
              name="semester"
              value={form.semester}
              onChange={handleChange}
              required
            >
              <option value="">Select Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>

          <div className="register-check">
            <input type="checkbox" required />
            <span>I agree to the Terms & Conditions and Privacy Policy</span>
          </div>

          <button className="register-button" type="submit">
            Sign Up
          </button>
        </form>

        <p className="register-login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </main>
    </div>
  );
}

export default Register;