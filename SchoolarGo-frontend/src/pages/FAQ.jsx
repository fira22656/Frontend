import Navbar from "../components/Navbar";

export default function FAQ() {
  return (
    <div className="faq-page">
      <Navbar />

      <section className="faq-hero">
        <h1>FAQ</h1>
        <p>Find answers to commonly asked questions.</p>

        <input type="text" placeholder="Search for questions..." />
        <button>Search</button>
      </section>

      <section className="faq-content">
        <h1>Popular Questions</h1>

        <div className="faq-list">
          <div className="faq-item">
            <span>?</span>
            <p>How do I reset my password?</p>
            <strong>Click on 'Forgot Password' on the login page.</strong>
          </div>

          <div className="faq-item">
            <span>?</span>
            <p>How do I change my account settings?</p>
            <strong>Go to 'Account Settings' in your profile.</strong>
          </div>
        </div>
      </section>
    </div>
  );
}