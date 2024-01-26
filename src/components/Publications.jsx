import React from "react";
import { useState } from "react";
import j1 from "../assets/paper/1.webp";
import j2 from "../assets/paper/2.png";
import j3 from "../assets/paper/3.png";
import j4 from "../assets/paper/4.jpg";
import j5 from "../assets/paper/5.png";
import j6 from "../assets/paper/6.png";
import j7 from "../assets/paper/7.png";
import j8 from "../assets/paper/8.webp";
import bc from "../assets/paper/bc.webp";
import icbase from "../assets/paper/icbase.png";

const Publications = () => {
  const [pubType, setPubType] = React.useState("");
  const [isAll, setIsAll] = useState(true);
  const [isJournal, setIsJournal] = useState(false);
  const [isConference, setIsConference] = useState(false);
  const [isBookChapter, setIsBookChapter] = useState(false);

  function handleAll() {
    setPubType("");
    setIsAll(true);
    setIsJournal(false);
    setIsConference(false);
    setIsBookChapter(false);
  }

  function handleJournal() {
    setPubType("Journal");
    setIsJournal(true);
    setIsConference(false);
    setIsBookChapter(false);
    setIsAll(false);
  }
  function handleConference() {
    setPubType("Conference");
    setIsConference(true);
    setIsJournal(false);
    setIsBookChapter(false);
    setIsAll(false);
  }
  function handleBookChapter() {
    setPubType("Book Chapter");
    setIsBookChapter(true);
    setIsConference(false);
    setIsJournal(false);
    setIsAll(false);
  }

  const publications = [
    {
      title: "Modern Subtype Classification and Outlier Detection Using the Attention Embedder to Transform Ovarian Cancer Diagnosis",
      journal: "Tomography",

      type: "Journal",
      year: "2024",
      link: "https://www.mdpi.com/2379-139X/10/1/10",
      img: j1,
    },
    {
      title: "Palm Leaf Health Management: A Hybrid Approach for Automated Disease Detection and Therapy Enhancement",
      journal: "IEEE Access",
      type: "Journal",
      year: "2024",
      link: "https://ieeexplore.ieee.org/abstract/document/10385067/",
      img: j2,
    },
    {
      title: "Machine learning enabled IoT system for soil nutrients monitoring and crop recommendation",
      journal: "Journal of Agriculture and Food Research",
      type: "Journal",
      year: "2023",
      link: "https://www.sciencedirect.com/science/article/pii/S2666154323003873",
      img: j3,
    },
    {
      title: "Recurrent ALBERT for recommendation: A hybrid architecture for accurate and lightweight restaurant recommendations",
      journal: "Cognitive Computation and Systems",
      type: "Journal",
      year: "2023",
      link: "https://doi.org/10.1049/ccs2.12090",
      img: j4,
    },
    {
      title: "Towards Trustworthy Metaverse: Advancements and Challenges",
      journal: "IEEE Access",
      type: "Journal",
      year: "2023",
      link: "https://ieeexplore.ieee.org/abstract/document/10288438/",
      img: j5,
    },
    {
      title: "Advancing Wildlife Protection: Mask R-CNN for Rail Track Identification and Unwanted Object Detection",
      journal: "IEEE Access",
      type: "Journal",
      year: "2023",
      link: "https://ieeexplore.ieee.org/abstract/document/10244015/",
      img: j6,
    },
    {
      title: "An Unsupervised Writer Identification Based on Generating Clusterable Embeddings.",
      journal: "Computer Systems Science & Engineering",
      type: "Journal",
      year: "2023",
      link: "https://www.researchgate.net/profile/Aklima-Lima/publication/368417097_An_Unsupervised_Writer_Identification_Based_on_Generating_Clusterablejingmbeddings/links/64466ae2017bc07902d758d6/An-Unsupervised-Writer-Identification-Based-on-Generating-Clusterablejiongmbeddings.pdf",
      img: j7,
    },
    {
      title: "Cardiac Failure Forecasting Based on Clinical Data Using a Lightweight Machine Learning Metamodel",
      journal: "Diagnostics",
      type: "Journal",
      year: "2023",
      link: "https://www.mdpi.com/2075-4418/13/15/2540",
      img: j8,
    },
    {
      title: "A Multi-Plant Disease Diagnosis Method Using Convolutional Neural Network",
      journal: "Springer Link",
      type: "Book Chapter",
      year: "2021",
      link: "https://doi.org/10.1007/978-981-33-6424-0_7",
      img: bc,
    },
    {
      title: "Assessment of Building Damage on Post-Hurricane Satellite Imagery using improved CNN",
      journal: "IEEE Xplore",
      type: "Conference",
      year: "2021",
      link: "https://doi.org/10.1109/DASA54658.2022.9765025",
      img: icbase,
    },
    {
      title: "Heart Disease Prediction and Analysis Using Ensemble Architecture",
      journal: "IEEE Xplore",
      type: "Conference",
      year: "2021",
      link: "https://ieeexplore.ieee.org/document/9765237",
      img: icbase,
    },
  ];
  return (
    <div>
      <header>
        <h2 class="h2 article-title">Publications</h2>
      </header>
      <section class="timeline">
        <div className="jinfo">
          <button className={isAll ? "jbtn" : "jbtn2"} type="button" onClick={handleAll}>
            All(32)
          </button>
          <button className={isJournal ? "jbtn" : "jbtn2"} type="button" onClick={handleJournal}>
            Journal(20)
          </button>
          <button className={isConference ? "jbtn" : "jbtn2"} type="button" onClick={handleConference}>
            Conference(11)
          </button>
          <button className={isBookChapter ? "jbtn" : "jbtn2"} type="button" onClick={handleBookChapter}>
            Book Chapter(1)
          </button>
        </div>
        <div class="cads">
          {publications.map((publication) =>
            pubType === publication.type ? (
              <>
                <div className="jlist">
                  <div className="jitem">
                    <div className="flex"></div>({publication.year}){" "}
                    <a href={publication.link} className="text-link" target="_blank">
                      {publication.title}
                    </a>
                    <br />
                    {publication.journal} (Q1) - {publication.type}
                    <div className="author"></div>
                  </div>
                </div>
                {/* <div class="card">
                  <a href={publication.link} target="_blank" rel="noopener noreferrer">
                    <img id="hover" src={publication.img} alt="Hot air balloons" />
                    <div id="stuff">{publication.journal}</div>
                    <div class="card-item">
                      <div class="title">{publication.title}</div>
                      <div className="">
                        <div class="year">{publication.year}</div>
                      </div>
                    </div>
                  </a>
                </div> */}
              </>
            ) : pubType === "" ? (
              <>
                {/* <div class="card">
                  <a href={publication.link} target="_blank" rel="noopener noreferrer">
                    <img id="hover" src={publication.img} alt="Hot air balloons" />
                    <div id="stuff">{publication.journal}</div>
                    <div class="card-item">
                      <div class="title">{publication.title}</div>
                      <div className="">
                        <div class="year">{publication.year}</div>
                      </div>
                    </div>
                  </a>
                </div> */}
              </>
            ) : null
          )}
        </div>
        <div className="alert2 text-center mt">Rest of the publications will be added soon.</div>
      </section>
    </div>
  );
};

export default Publications;
