import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="landing-overlay">
        <p className="eyebrow">Welcome To</p>
        <h1>Paradise Nursery</h1>
        <AboutUs />
        <Link to="/plants" className="primary get-started">
          Get Started
        </Link>
      </section>
    </main>
  );
}

export default LandingPage;
