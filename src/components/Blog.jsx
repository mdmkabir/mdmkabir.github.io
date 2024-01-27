import React from "react";
import { useState } from "react";
import b1 from "../assets/blog/b1.png";
import b2 from "../assets/blog/b2.png";

import About from "./About";
import HigherStudy from "../blogs/HigherStudy";
import ErasmusIfros from "../blogs/ErasmusIfros";

const Blog = () => {
  const [activeComponent, setActiveComponent] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "hs":
        return <HigherStudy />;
      case "ei":
        return <ErasmusIfros />;

      default:
        return null;
    }
  };

  const handleButtonClick = (component) => {
    setIsVisible(false);

    setActiveComponent(component);
  };

  const blogs = [
    {
      title: "A Comprehensive Guide to Securing Full-Funded Scholarships for Higher Studies Abroad",
      desc: "Embarking on a journey toward higher studies is a dream for many individuals seeking academic excellence and personal growth. However, the financial burden associated with pursuing",
      link: "higher-studies-abroad",
      img: b1,
      sf: "hs",
    },
    {
      title: "Navigating the Path to Erasmus Masters at IFRoS: A Personal Journey",
      desc: "In this blog post, I'll detail my journey applying for an Erasmus Masters program at IFRoS. I'll discuss the requirements, evaluation criteria, and essential steps I took to secure acceptance, offering valuable insights for prospective applicants.",
      link: "path-to-erasmus-masters",
      img: b2,
      sf: "ei",
    },
  ];
  return (
    <div>
      <header>
        <h2 class="h2 article-title">Blogs</h2>
      </header>
      <section class="timeline">
        {renderActiveComponent()}
        {isVisible ? (
          <div class="cards">
            {blogs.map((blog) => (
              <div class="card">
                <a className="blog-link img-thumbd" onClick={() => handleButtonClick(blog.sf)}>
                  <img src={blog.img} className="img-thumb" alt={blog.title} />
                  <div class="card-item">
                    <div class="title hover-link">{blog.title}</div>
                    <div class="year">{blog.desc}...</div>
                    <div className=""></div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default Blog;
