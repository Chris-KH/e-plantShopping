import { Link } from "react-router-dom";
import AboutUs from "../components/AboutUs";

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="landing-hero">
        <p className="eyebrow">Indoor Plant Boutique</p>
        <h1>Paradise Nursery</h1>
        <AboutUs />
        <Link className="cta-button" to="/plants">
          Get Started
        </Link>
      </section>
    </main>
  );
}

export default LandingPage;
