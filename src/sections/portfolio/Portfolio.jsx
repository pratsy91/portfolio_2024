import "./portfolio.css";
import Projects from "./Projects";
import data from "./data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>Selected work spanning commerce, realtime messaging, and business tools.</p>
      <div className="container portfolio__container">
        <Projects projects={data} />
      </div>
    </section>
  );
};

export default Portfolio;
