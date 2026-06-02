import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function FAQ() {
  const [search, setSearch] = useState("");
  const [hasil, setHasil] = useState([]);

  const popularQuestions = [
    {
      question: "How do I reset my password?",
      answer: "Click on 'Forgot Password' on the login page.",
    },
    {
      question: "How do I change my account settings?",
      answer: "Go to 'Account Settings' in your profile.",
    },
  ];

  const additionalQuestions = [
    {
      question: "How do I save a scholarship?",
      answer: "Open the scholarship detail page, then click the Save button.",
    },
    {
      question: "How do I search for scholarships?",
      answer: "Use the search feature or filter scholarship options based on your needs.",
    },
  ];

  const allQuestions = [...popularQuestions, ...additionalQuestions];

  const handleSearch = () => {
    if (search.trim() === "") {
      alert("Masukkan pertanyaan terlebih dahulu!");
      setHasil([]);
      return;
    }

    const filtered = allQuestions.filter((item) =>
      item.question.toLowerCase().includes(search.toLowerCase())
    );

    setHasil(filtered);
  };

  const tampilPopular = hasil.length > 0 ? hasil : popularQuestions;

  return (
    <div className="fq-page">
      <nav className="fq-navbar">
        <img src={logo} alt="SchoolarGo Logo" />

        <div className="fq-menu">
          <Link to="/bookmark">
            <button>BOOKMARK</button>
          </Link>

          <Link to="/faq">
            <button>FAQ</button>
          </Link>

          <Link to="/">
            <button>DASHBOARD</button>
          </Link>

          <Link to="/register">
            <button>LOG OUT</button>
          </Link>
        </div>
      </nav>

      <section className="fq-hero">
        <h1>FAQ</h1>
        <p>Find answers to commonly asked questions.</p>

        <input
          type="text"
          placeholder="Search for questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </section>

      <section className="fq-content">
        <div className="fq-row">
          <h2>Popular Questions</h2>

          <div className="fq-list">
            {tampilPopular.map((item, index) => (
              <div className="fq-item" key={index}>
                <div className="fq-icon">?</div>
                <p className="fq-question">{item.question}</p>
                <p className="fq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fq-row fq-additional">
          <h2>Additional Questions</h2>

          <div className="fq-list">
            {additionalQuestions.map((item, index) => (
              <div className="fq-item" key={index}>
                <div className="fq-icon">?</div>
                <p className="fq-question">{item.question}</p>
                <p className="fq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;