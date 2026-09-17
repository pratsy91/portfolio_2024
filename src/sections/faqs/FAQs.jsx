import { useEffect } from "react";
import faqs from "./data";
import FAQ from "./FAQ";
import AOS from "aos";
import "aos/dist/aos.css";
import "./faqs.css";

const FAQs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="faqs">
      <h2>How I Work</h2>
      <p>
        A quick look at how I approach projects, collaboration, and shipping.
        Have more questions? Reach out below.
      </p>
      <div className="container faqs__container" data-aos="fade-in">
        {faqs.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
