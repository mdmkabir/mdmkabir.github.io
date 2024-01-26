import React from "react";
import { useState } from "react";
import j1 from "../assets/blog/b1.png";

import About from "./About";
import HigherStudy from "../blogs/HigherStudy";

const Blog = () => {
  const [activeComponent, setActiveComponent] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "hs":
        return <HigherStudy />;

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
      img: j1,
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
                <a onClick={() => handleButtonClick("hs")}>
                  <img src={blog.img} alt="Hot air balloons" />
                  <div class="card-item">
                    <div class="title">{blog.title}</div>
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
