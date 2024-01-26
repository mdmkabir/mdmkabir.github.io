import React from "react";
import dlr from "../assets/images/dlr.svg";
import robot from "../assets/images/robot.svg";
import computer from "../assets/images/computer.png";
import travel from "../assets/images/travel.svg";
import girona from "../assets/images/girona1.png";
import eot from "../assets/images/eot1.jpg";
import bubt from "../assets/images/bubt1.png";
import aml from "../assets/images/aml.jpeg";
import amirlab from "../assets/images/amirlab.jpg";
import ifros from "../assets/images/ifros.png";

const About = () => {
  const awards = [
    {
      title: "Guest Speaker - Unlocking the Secrets of Successful Research",
      desc: "Advanced Machine Intelligence Research Lab (2024)",
      img: amirlab,
    },
    {
      title: "Annual Research Publication Award 2023",
      desc: "Advanced Machine Intelligence Research Lab",
      img: amirlab,
    },
    {
      title: "Keynote Speaker",
      desc: "Higher Quality Publication: A Pathway for Higher Education with Funding - Bangladesh University of Business & Technology (2023)",
      img: bubt,
    },
    {
      title: "Annual Research Publication Award 2022",
      desc: "Advanced Machine Learning Lab",
      img: aml,
    },
    {
      title: "Erasmus Mundus Scholarship",
      desc: "EMJ Master in Intelligent Field Robotic System, 2022-2024",
      img: ifros,
    },
    {
      title: "Annual Research Publication Award 2021",
      desc: "Bangladesh University of Business & Technology",
      img: bubt,
    },
    {
      title: "Annual Research Publication Award 2021",
      desc: "Bangladesh University of Business & Technology",
      img: bubt,
    },
    {
      title: "Merit-based Scholarship",
      desc: "BUBT Scholarship for consistent SGPA 4.00, 2017-2021",
      img: bubt,
    },
  ];
  return (
    <div>
      <header>
        <h2 class="h2 article-title">About me</h2>
      </header>

      <section class="about-text">
        <p>
          I am <b>Md Mohsin Kabir</b>, a dynamic AI researcher specializing in machine learning and deep learning, recognized for my impactful publications. Committed to pushing the boundaries of technology, I continuously seek new horizons in research.
        </p>

        <p>Professionally, I've thrived in research and teaching roles, demonstrating expertise in programming and ML-DL tools. Recognized with several awards and an Erasmus Mundus Scholarship, I am dedicated to pioneering advancements in AI and robotics to positively impact society.</p>
      </section>

      <section class="service">
        <h3 class="h3 service-title">What i'm doing</h3>

        <ul class="service-list">
          <li class="service-item">
            <div class="service-icon-box">
              <img src={dlr} alt="design icon" className="text-yellow" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Deep Learning</h4>

              <p class="service-item-text">Expert in Deep Learning and Computer Vision, with notable achievements in intelligent systems.</p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img src={robot} alt="design icon" className="text-yellow" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Robotics</h4>

              <p class="service-item-text">Skilled Robotics Engineer recognized for innovative contributions to autonomous system development.</p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img src={computer} alt="design icon" className="text-yellow" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Computer Science</h4>

              <p class="service-item-text">Skilled Computer Scientist recognized for advancing algorithm design and computational efficiency</p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img src={travel} alt="design icon" className="text-yellow" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Traveling</h4>

              <p class="service-item-text">World traveler with a passion for exploration, having journeyed across 12 countries.</p>
            </div>
          </li>
        </ul>
      </section>

      <section class="testimonials">
        <h3 class="h3 testimonials-title">Academic Involvements</h3>

        <ul class="testimonials-list has-scrollbar">
          <li class="testimonials-item">
            <div class="content-card unicard" data-testimonials-item>
              <figure class="testimonials-avatar-box">
                <img class="rounded-img" src={girona} alt="Girona" width="60" data-testimonials-avatar />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>
                University of Girona, Spain
              </h4>

              <div class="testimonials-text" data-testimonials-text>
                <p>
                  <b>EMJ Masters in IFRoS - Field robotics, with focus on land and marine robots</b>
                </p>
              </div>
            </div>
          </li>

          <li class="testimonials-item">
            <div class="content-card unicard" data-testimonials-item>
              <figure class="testimonials-avatar-box">
                <img class="rounded-img" src={eot} alt="EOT" width="60" data-testimonials-avatar />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>
                Eötvös Loránd University, Hungary
              </h4>

              <div class="testimonials-text" data-testimonials-text>
                <b>EMJ Masters in IFRoS - Autonomous systems & self-driving land vehicles</b>
              </div>
            </div>
          </li>

          <li class="testimonials-item">
            <div class="content-card unicard" data-testimonials-item>
              <figure class="testimonials-avatar-box">
                <img class="rounded-img" src={bubt} alt="BUBT" width="60" data-testimonials-avatar />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>
                Bangladesh University of Business and Technology, Bangladesh
              </h4>

              <div class="testimonials-text" data-testimonials-text>
                <b>Computer science and engineering - Major in Artificial Intelligence</b>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section class="clients">
        <h3 class="h3 clients-title">Speeches, Honors, Awards</h3>

        <ul class="clients-list has-scrollbar speech text-gray">
          {awards.map((award) => (
            <li class="testimonials-item">
              <div class="content-card unicard" data-testimonials-item>
                <figure class="testimonials-avatar-box">
                  <img class="rounded-img" src={award.img} alt={award.title} width="60" data-testimonials-avatar />
                </figure>
                <div class="testimonials-text" data-testimonials-text>
                  <h4 class="h4 testimonials-item-title" data-testimonials-title>
                    {award.title}
                  </h4>{" "}
                  {award.desc}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
