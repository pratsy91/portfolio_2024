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
            Results-driven Software Engineer with proven experience in
            designing, developing, and optimizing scalable web applications and
            backend services. Skilled in modern technologies including React.js,
            Node.js, TypeScript, Express, and cloud platforms such as AWS.
          </p>
          <p>
            Known for driving performance improvements, reducing system
            bottlenecks, and delivering clean, maintainable code. Experienced in
            leading end-to-end feature development, integrating complex APIs,
            and contributing to high-impact engineering teams in agile
            environments.
          </p>
          <p>
            Committed to continuous learning and delivering robust technical
            solutions aligned with business objectives. Demonstrates a strong
            understanding of system architecture, data modeling, security
            practices, and CI/CD pipelines.
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
