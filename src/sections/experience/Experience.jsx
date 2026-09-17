import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ExperienceSection.css";

const experiences = [
  {
    company: "Newmi Care",
    role: "Software Development Engineer 1",
    duration: "Feb 2026 – Present",
    location: "Gurgaon, Haryana",
    responsibilities: [
      "Built pregnancy and baby trackers end-to-end using React Native, Next.js, Django, PostgreSQL, and TypeScript, improving tracker engagement by 45%.",
      "Owned the full GLP care flow from Next.js/React Native frontend through Django REST APIs, cutting end-to-end latency by 30% and reducing drop-offs by 25%.",
      "Implemented health assessments from UI through backend scoring APIs, increasing completed assessments by 40%.",
      "Integrated Edge Clinic API for doctor appointment booking across web and mobile, improving booking completion by 35%.",
    ],
  },
  {
    company: "Ratnanjali TechX",
    role: "Software Engineer",
    duration: "Jul 2025 – Dec 2025",
    location: "Pune, Maharashtra",
    responsibilities: [
      "Developed and optimized full-stack features for ShodhSetu and Muskurahat Foundation using Next.js, Express.js, and PostgreSQL.",
      "Designed admin dashboards and responsive UIs for 1000+ colleges and universities.",
      "Scaled backend workflows for large datasets, reducing API latency by 35%.",
    ],
  },
  {
    company: "PlutosOne",
    role: "Software Engineer",
    duration: "Feb 2025 – Apr 2025",
    location: "New Delhi",
    responsibilities: [
      "Built a responsive analytics dashboard with Next.js, Tailwind CSS, and Redux.",
      "Integrated BBPS APIs for SBI Life and Muthoot Finance using NestJS, Docker, and GCP.",
      "Implemented secure AES-256 encryption and XML–JSON conversions for compliant integrations.",
    ],
  },
  {
    company: "Bitontree",
    role: "Software Engineer",
    duration: "Dec 2023 – Dec 2024",
    location: "Ahmedabad, Gujarat",
    responsibilities: [
      "Developed scalable full-stack apps serving 500+ daily users, reducing API response times by 2s.",
      "Automated CI/CD pipelines, increasing deployment speed by 40%.",
      "Enhanced React/Chart.js visualizations and optimized backend performance on AWS.",
    ],
  },
  {
    company: "Midinnings",
    role: "Software Engineer",
    duration: "Nov 2022 – Nov 2023",
    location: "Udaipur, Rajasthan",
    responsibilities: [
      "Delivered 5+ full-stack client projects using React.js, Express.js, and MongoDB.",
      "Built JWT-secured REST APIs and converted Figma designs into responsive UIs.",
    ],
  },
];

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section id="experience" className="experience__section">
      <h2 className="experience__title" data-aos="fade-up">
        Work Experience
      </h2>
      <p className="experience__intro" data-aos="fade-up">
        Roles where I owned features end-to-end and shipped measurable outcomes.
      </p>
      <div className="experience__timeline container">
        {experiences.map((exp, index) => (
          <article
            key={exp.company}
            className="experience__item"
            data-aos="fade-up"
            data-aos-delay={index * 60}
          >
            <div className="experience__marker" aria-hidden="true" />
            <div className="experience__content">
              <div className="experience__meta">
                <h3 className="experience__company">{exp.company}</h3>
                <span className="experience__duration">{exp.duration}</span>
              </div>
              <p className="experience__role">
                {exp.role} · {exp.location}
              </p>
              <ul className="experience__points">
                {exp.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
