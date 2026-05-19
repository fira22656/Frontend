import Navbar from "../components/Navbar";

export default function Register() {
  return (
    <div className="register-page">
      <Navbar />

      <main className="register-container">
        <h1>SchoolarGo Registration</h1>
        <h2>Create your account to apply for SchoolarGo</h2>

        <form className="register-form">
          <div>
            <label>Full Name</label>
            <input type="text" />
          </div>

          <div>
            <label>Email Address</label>
            <input type="email" />
          </div>

          <div>
            <label>Password</label>
            <input type="password" />
            <small>Min. 8 characters</small>
          </div>

          <div>
            <label>Confirm Password</label>
            <input type="password" />
            <small>Min. 8 characters</small>
          </div>

          <div>
            <label>Education Level</label>
            <select>
              <option>Select Education Level</option>
              <option>D3</option>
              <option>S1</option>
              <option>S2</option>
            </select>
          </div>

          <div>
            <label>Current Semester</label>
            <select>
              <option>Select Semester</option>
              <option>Semester 1</option>
              <option>Semester 2</option>
              <option>Semester 3</option>
              <option>Semester 4</option>
            </select>
          </div>

          <label className="checkbox">
            <input type="checkbox" />
            I agree to the Terms & Conditions and Privacy Policy
          </label>

          <button type="submit" className="btn-primary register-btn">
            Sign Up
          </button>
        </form>
      </main>
    </div>
  );
}