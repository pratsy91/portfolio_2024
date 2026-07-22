import AboutImage from "../../assets/about.png";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Results-driven Software Engineer with proven experience designing,
            developing, and optimizing scalable web and mobile applications.
            Skilled in React.js, React Native, Next.js, Node.js, Django,
            TypeScript, PostgreSQL, and cloud platforms such as AWS and GCP.
          </p>
          <p>
            Known for owning end-to-end feature development—from frontend UI to
            backend APIs—while driving measurable gains in performance,
            engagement, and reliability. Experienced integrating complex
            third-party APIs, building analytics dashboards, and shipping secure,
            maintainable systems at scale.
          </p>
          <p>
            Committed to continuous learning and delivering robust technical
            solutions aligned with business goals. Strong understanding of
            system architecture, data modeling, security practices, and CI/CD
            pipelines.
          </p>
          <a href={CV} download className="btn primary" id="random">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
