import AboutImage from "../../assets/about.png";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
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
            Building projects my clients love have always been my passion. Being
            in the web development industry for over 1 year and serving more
            than 30 happy clients worldwide, I'm always motivated to do more!
          </p>
          <p>
            Hi, my name is Pratap Singh Chouhan. I'm a full-stack web developer
            with a Bachelors degree in Computer Science. My top priority is to
            get your business online the right way, giving you industry-standard
            design and all the functionality you need to operate smoothly
            online. Get in touch today with the details of your project let's
            get started! Check out my resume below!
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
