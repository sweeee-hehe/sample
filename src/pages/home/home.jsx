import { Link } from "react-router";
import "./home.css";

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "₹2Cr+", label: "Expenses Tracked" },
  { value: "98%", label: "Accuracy Rate" },
  { value: "3sec", label: "AI Response Time" },
];

const features = [
  {
    icon: "📊",
    title: "Smart Expense Tracking",
    desc: "Log every rupee instantly. Categorize spending across Food, Transport, Bills, and more with a single click.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Insights",
    desc: "Our Gemini AI advisor analyzes your habits and delivers 3 personalized cost-cutting tips in seconds.",
  },
  {
    icon: "💰",
    title: "Savings Dashboard",
    desc: "Visualize your income, expenses, and savings gap in real time. Know exactly where your money goes.",
  },
];

const steps = [
  { num: "01", title: "Create Account", desc: "Sign up securely in under a minute." },
  { num: "02", title: "Add Transactions", desc: "Log your daily expenses by category." },
  { num: "03", title: "Get AI Tips", desc: "Let Gemini AI analyze and optimize your budget." },
];

function Home() {
  return (
    <div className="home-wrapper">

      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />

        <div className="hero-badge">✨ Powered by Gemini AI</div>

        <h1 className="hero-title">
          Take <span className="gradient-text">Control</span> of<br />
          Your Finances
        </h1>

        <p className="hero-subtitle">
          The intelligent expense tracker that learns your habits,<br />
          cuts wasted spending, and grows your savings — automatically.
        </p>

        <div className="hero-actions">
          <Link to="/signup" className="btn-primary">
            Get Started Free →
          </Link>
          <Link to="/login" className="btn-ghost">
            Sign In
          </Link>
        </div>

        {/* Floating stat cards */}
        <div className="hero-cards">
          <div className="float-card float-card-left">
            <span className="float-card-icon">💸</span>
            <div>
              <div className="float-card-value">₹12,500</div>
              <div className="float-card-label">Saved this month</div>
            </div>
          </div>
          <div className="float-card float-card-right">
            <span className="float-card-icon">🤖</span>
            <div>
              <div className="float-card-value">AI Ready</div>
              <div className="float-card-label">Gemini Advisor Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="stats-section">
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* ── Features ── */}
      <section className="features-section">
        <div className="section-tag">Core Features</div>
        <h2 className="section-title">Everything you need to<br /><span className="gradient-text">master your money</span></h2>

        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="steps-section">
        <div className="section-tag">How It Works</div>
        <h2 className="section-title">Up and running in<br /><span className="gradient-text">3 simple steps</span></h2>

        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={s.num} className="step-card">
              <div className="step-num">{s.num}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
              {i < steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </section>

      {/* ── AI Highlight ── */}
      <section className="ai-section">
        <div className="ai-card">
          <div className="ai-glow" />
          <div className="ai-icon">🧠</div>
          <h2 className="ai-title">Meet Your AI Financial Advisor</h2>
          <p className="ai-desc">
            Powered by Google's Gemini model, our AI reads your monthly expenses and returns
            3 hyper-personalized savings tips in seconds. No generic advice — only insights
            tailored to <em>your</em> spending patterns.
          </p>
          <div className="ai-tip-preview">
            <div className="ai-tip-line">💡 Cut your Food spend by 20% — switch 3 Swiggy orders/week to home cooking</div>
            <div className="ai-tip-line">💡 Your Entertainment category is 31% above average — audit subscriptions</div>
            <div className="ai-tip-line">💡 Consolidate Transport costs — carpooling saves ~₹1,800/month</div>
          </div>
          <Link to="/signup" className="btn-primary" style={{ marginTop: "2rem", display: "inline-block" }}>
            Try the AI Advisor →
          </Link>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-section">
        <div className="cta-glow" />
        <h2 className="cta-title">Ready to take control?</h2>
        <p className="cta-subtitle">Join thousands already saving smarter every month.</p>
        <div className="hero-actions">
          <Link to="/signup" className="btn-primary">Create Free Account</Link>
          <Link to="/login" className="btn-ghost">Sign In</Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="home-footer">
        <p>© 2026 FinTrack AI · Built with 💜 and Gemini</p>
      </footer>
    </div>
  );
}

export default Home;
