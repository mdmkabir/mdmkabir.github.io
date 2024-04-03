import React from "react";
import { useState } from "react";

const Publications = () => {
  const [pubType, setPubType] = React.useState("All");
  const [isAll, setIsAll] = useState(true);
  const [isJournal, setIsJournal] = useState(false);
  const [isConference, setIsConference] = useState(false);
  const [isBookChapter, setIsBookChapter] = useState(false);

  function handleAll() {
    setPubType("All");
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
      title: "Machine learning and deep learning for user authentication and authorization in cybersecurity: A state-of-the-art review",
      journal: "Computers & Security",
      quartiles: "Q1",
      type: "Journal",
      year: "2024",
      link: "https://doi.org/10.1016/j.cose.2024.103747",
      // img: j1,
    },
    {
      title: "Palm Leaf Health Management: A Hybrid Approach for Automated Disease Detection and Therapy Enhancement",
      journal: "IEEE Access",
      quartiles: "Q1",
      type: "Journal",
      year: "2024",
      link: "https://ieeexplore.ieee.org/abstract/document/10385067/",
      // img: j2,
    },
    {
      title: "Machine learning enabled IoT system for soil nutrients monitoring and crop recommendation",
      journal: "Journal of Agriculture and Food Research",
      quartiles: "Q1",
      type: "Journal",
      year: "2023",
      link: "https://www.sciencedirect.com/science/article/pii/S2666154323003873",
      // img: j3,
    },
    {
      title: "Recurrent ALBERT for recommendation: A hybrid architecture for accurate and lightweight restaurant recommendations",
      journal: "Cognitive Computation and Systems",
      type: "Journal",
      quartiles: "Q3",
      year: "2023",
      link: "https://doi.org/10.1049/ccs2.12090",
      // img: j4,
    },
    {
      title: "Towards Trustworthy Metaverse: Advancements and Challenges",
      journal: "IEEE Access",
      quartiles: "Q1",

      type: "Journal",
      year: "2023",
      link: "https://ieeexplore.ieee.org/abstract/document/10288438/",
      // img: j5,
    },
    {
      title: "Advancing Wildlife Protection: Mask R-CNN for Rail Track Identification and Unwanted Object Detection",
      journal: "IEEE Access",
      type: "Journal",
      quartiles: "Q1",

      year: "2023",
      link: "https://ieeexplore.ieee.org/abstract/document/10244015/",
      // img: j6,
    },
    {
      title: "An Unsupervised Writer Identification Based on Generating Clusterable Embeddings.",
      journal: "Computer Systems Science & Engineering",
      quartiles: "Q3",

      type: "Journal",
      year: "2023",
      link: "https://www.researchgate.net/profile/Aklima-Lima/publication/368417097_An_Unsupervised_Writer_Identification_Based_on_Generating_Clusterablejingmbeddings/links/64466ae2017bc07902d758d6/An-Unsupervised-Writer-Identification-Based-on-Generating-Clusterablejiongmbeddings.pdf",
      // img: j7,
    },
    {
      title: "Cardiac Failure Forecasting Based on Clinical Data Using a Lightweight Machine Learning Metamodel",
      journal: "Diagnostics",
      quartiles: "Q2",

      type: "Journal",
      year: "2023",
      link: "https://www.mdpi.com/2075-4418/13/15/2540",
      // img: j8,
    },
    {
      title: "G-BERT: An Efficient Method for Identifying Hate Speech in Bengali Texts on Social Media",
      journal: "IEEE Access",
      quartiles: "Q1",

      type: "Journal",
      year: "2023",
      link: "https://ieeexplore.ieee.org/abstract/document/10194932",
      // img: j8,
    },
    {
      title: "Secure Your Steps: A Class-Based Ensemble Framework for Real-Time Fall Detection using Deep Neural Networks",
      journal: "IEEE Access",
      quartiles: "Q1",

      type: "Journal",
      year: "2023",
      link: "https://ieeexplore.ieee.org/abstract/document/10162189",
      // img: j8,
    },
    {
      title: "Deep Learning-Based IoT System for Remote Monitoring and Early Detection of Health Issues in Real-Time",
      journal: "Sensors",
      quartiles: "Q1",

      type: "Journal",
      year: "2023",
      link: "https://www.mdpi.com/1424-8220/23/11/5204",
      // img: j8,
    },
    {
      title: "Self-Writer: Clusterable Embedding Based Self-Supervised Writer Recognition from Unlabeled Data",
      journal: "Mathematics",
      quartiles: "Q2",

      type: "Journal",
      year: "2023",
      link: "https://www.mdpi.com/2227-7390/10/24/4796",
      // img: j8,
    },
    {
      title: "A Comprehensive Survey on the Progress, Process, and Challenges of Lung Cancer Detection and Classification",
      journal: "Journal of Healthcare Engineering",
      quartiles: "Q2",

      type: "Journal",
      year: "2022",
      link: "https://www.hindawi.com/journals/jhe/2022/5905230/",
      // img: j8,
    },
    {
      title: "How can we manage Offensive Text in Social Media-A Text Classification Approach using LSTM-BOOST",
      journal: "International Journal of Information Management Data Insights",
      quartiles: "Q2",

      type: "Journal",
      year: "2022",
      link: "https://www.sciencedirect.com/science/article/pii/S2667096822000386",
      // img: j8,
    },
    {
      title: "Content-Based Image Retrieval Using AutoEmbedder",
      journal: "Journal of Advances in Information Technology Vol",
      quartiles: "Q3",

      type: "Journal",
      year: "2022",
      link: "https://www.semanticscholar.org/paper/Content-Based-Image-Retrieval-Using-AutoEmbedder-Kabir-Ishraq/b6c5670c0fcbbc29bf58b956a297ff166e95574f?p2df",
      // img: j8,
    },
    {
      title: "A Comprehensive Survey on the Detection, Classification, and Challenges of Neurological Disorders",
      journal: "Biology",
      quartiles: "Q1",

      type: "Journal",
      year: "2022",
      link: "https://www.mdpi.com/2079-7737/11/3/469",
      // img: j8,
    },
    {
      title: "A survey of automatic text summarization: Progress, process and challenges",
      journal: "IEEE Access",
      quartiles: "Q1",

      type: "Journal",
      year: "2021",
      link: "https://ieeexplore.ieee.org/abstract/document/9623462",
      // img: icbase,
    },
    {
      title: "A Thresholded Gabor-CNN Based Writer Identification System for Indic Scripts",
      journal: "IEEE Access",
      quartiles: "Q1",

      type: "Journal",
      year: "2021",
      link: "https://ieeexplore.ieee.org/abstract/document/9546777",
      // img: icbase,
    },
    {
      title: "A survey of speaker recognition: Fundamental theories, recognition methods and opportunities",
      journal: "IEEE Access",
      quartiles: "Q1",

      type: "Journal",
      year: "2021",
      link: "https://ieeexplore.ieee.org/abstract/document/9442674",
      // img: icbase,
    },
    {
      title: "BanglaWriting: A multi-purpose offline Bangla handwriting dataset",
      journal: "Data in Brief",
      quartiles: "Q2",

      type: "Journal",
      year: "2021",
      link: "https://www.sciencedirect.com/science/article/pii/S2352340920315134",
      // img: icbase,
    },
    {
      title: "Brain-Computer Interface: Advancement and Challenges",
      journal: "Sensors",
      quartiles: "Q1",

      type: "Journal",
      year: "2021",
      link: "https://www.mdpi.com/1424-8220/21/17/5746",
      // img: icbase,
    },

    {
      title: "Plant Disease Identification from Leaf Images using Deep CNN’s EfficientNet",
      journal: "2022 International Conference on Decision Aid Sciences and Applications (DASA), Thailand (IEEE).",
      quartiles: "",

      type: "Conference",
      year: "2022",
      link: "https://ieeexplore.ieee.org/abstract/document/9765063",
      // img: j8,
    },
    {
      title: "Assessment of Building Damage on Post-Hurricane Satellite Imagery using improved CNN",
      journal: "2022 International Conference on Decision Aid Sciences and Applications (DASA), Thailand (IEEE).",
      quartiles: "",

      type: "Conference",
      year: "2022",
      link: "https://ieeexplore.ieee.org/abstract/document/9765025",
      // img: icbase,
    },

    {
      title: "Heart Disease Prediction and Analysis Using Ensemble Architecture",
      journal: "2022 International Conference on Decision Aid Sciences and Applications (DASA)",
      quartiles: "",

      type: "Conference",
      year: "2022",
      link: "https://ieeexplore.ieee.org/document/9765237",
      // img: icbase,
    },
    {
      title: "Road Sign Detection Using Variants of YOLO and R-CNN: An Analysis from the Perspective of Bangladesh",
      journal: "Proceedings of the International Conference on Big Data, IoT, and Machine Learning: BIM 2021, Springer Singapore (Bangladesh).",
      quartiles: "",

      type: "Conference",
      year: "2022",
      link: "https://link.springer.com/chapter/10.1007/978-981-16-6636-0_42",
      // img: icbase,
    },
    {
      title: "Forecasting Closing Price of Stock Market Using LSTM Network: An Analysis from the Perspective of Dhaka Stock Exchange",
      journal: "Proceedings of the International Conference on Big Data, IoT, and Machine Learning: BIM 2021, Springer Singapore (Bangladesh).",
      quartiles: "",

      type: "Conference",
      year: "2022",
      link: "https://link.springer.com/chapter/10.1007/978-981-16-6636-0_23",
      // img: icbase,
    },
    {
      title: "Forecasting Closing Price of Stock Market Using LSTM Network: An Analysis from the Perspective of Dhaka Stock Exchange",
      journal: "Proceedings of the International Conference on Big Data, IoT, and Machine Learning: BIM 2021, Bangladesh (Springer Nature)",
      quartiles: "",

      type: "Conference",
      year: "2022",
      link: "https://www.springerprofessional.de/en/forecasting-closing-price-of-stock-market-using-lstm-network-an-/19931888",
      // img: icbase,
    },
    {
      title: "An Offline Writer-independent Signature Verification System using AutoEmbedder",
      journal: "2021 24th International Conference on Computer and Information Technology (ICCIT), Bangladesh (IEEE).",
      quartiles: "",

      type: "Conference",
      year: "2021",
      link: "https://ieeexplore.ieee.org/abstract/document/9689780",
      // img: icbase,
    },
    {
      title: "Cnn-nsvm architecture for skin lesion classification using non-dermoscopic digital image",
      journal: "2021 Joint 10th International Conference on Informatics, Electronics & Vision (ICIEV) and 2021 5th International Conference on Imaging, Vision & Pattern Recognition (icIVPR), Japan (IEEE).",
      quartiles: "",

      type: "Conference",
      year: "2021",
      link: "https://ieeexplore.ieee.org/abstract/document/9564195",
      // img: icbase,
    },
    {
      title: "Facial Expression Recognition Using CNN-LSTM Approach",
      journal: "2021 International Conference on Science & Contemporary Technologies (ICSCT), Bangladesh (IEEE)",
      quartiles: "",

      type: "Conference",
      year: "2021",
      link: "https://ieeexplore.ieee.org/abstract/document/9642571",
      // img: icbase,
    },
    {
      title: "Human Abnormality Classification Using Combined CNN-RNN Approach",
      journal: "2020 IEEE 17th International Conference on Smart Communities: Improving Quality of Life Using ICT, IoT and AI (HONET), USA (IEEE)",
      quartiles: "",

      type: "Conference",
      year: "2020",
      link: "https://ieeexplore.ieee.org/abstract/document/9322814",
      // img: icbase,
    },
    {
      title: "An Evolution of CNN Object Classifiers on Low-Resolution Images",
      journal: "2020 IEEE 17th International Conference on Smart Communities: Improving Quality of Life Using ICT, IoT and AI (HONET), USA (IEEE)",
      quartiles: "",

      type: "Conference",
      year: "2020",
      link: "https://ieeexplore.ieee.org/abstract/document/9322661",
      // img: icbase,
    },
    {
      title: "IoT based Health monitoring & automated predictive system to confront COVID-19",
      journal: "2020 IEEE 17th International Conference on Smart Communities: Improving Quality of Life Using ICT, IoT and AI (HONET), USA (IEEE)",
      quartiles: "",

      type: "Conference",
      year: "2020",
      link: "https://ieeexplore.ieee.org/abstract/document/9322811",
      // img: icbase,
    },
    {
      title: "A Multi-Plant Disease Diagnosis Method using Convolutional Neural Network",
      journal: "Computer Vision and Machine Learning in Agriculture, Springer, Singapore",
      quartiles: "",

      type: "Book Chapter",
      year: "2021",
      link: "https://link.springer.com/chapter/10.1007/978-981-33-6424-0_7",
      // img: bc,
    },
  ];
  return (
    <div>
      <header>
        <h2 class="h2 article-title">Publications</h2>
      </header>
      <section class="timeline">
        <div className="jinfo pb">
          <button className={isAll ? "jbtn" : "jbtn2"} type="button" onClick={handleAll}>
            All({publications.map((publication) => publication.type).length} )
          </button>
          <button className={isJournal ? "jbtn" : "jbtn2"} type="button" onClick={handleJournal}>
            Journal(
            {publications.filter((publication) => publication.type === "Journal").length})
          </button>
          <button className={isConference ? "jbtn" : "jbtn2"} type="button" onClick={handleConference}>
            Conference( {publications.filter((publication) => publication.type === "Conference").length})
          </button>
          <button className={isBookChapter ? "jbtn" : "jbtn2"} type="button" onClick={handleBookChapter}>
            Book Chapter(
            {publications.filter((publication) => publication.type === "Book Chapter").length})
          </button>
        </div>
        <div class="cads">
          {publications.map((publication) =>
            pubType === publication.type || pubType == "All" ? (
              <>
                <div className="jlist">
                  <div className="jitem">
                    <div className="flex"></div>({publication.year}){" "}
                    <a href={publication.link} className="text-link" target="_blank">
                      {publication.title}
                    </a>
                    <br />
                    {publication.journal} {publication.type == "Journal" && <>({publication.quartiles})</>}
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
        {/* <div className="alert2 text-center mt">Rest of the publications will be added soon.</div> */}
      </section>
    </div>
  );
};

export default Publications;
