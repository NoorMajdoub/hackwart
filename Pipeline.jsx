import React from "react";
import "./pipeline.css";

const Pipeline = () => {
  const timelineData = [
    {
      id: "plants",
      year: "Step1",
      title: "Meeting one and understanding the task",
    },
    {
      id: "cambrian",
      year: "Step2",
      title: "Mission 2 : Data Collection",
    },
    {
      id: "tetrapods",
      year: "Step3",
      title: "Mission 3: Understanding the data",
    },
    {
      id: "dinosaurus",
      year: "Step4",
      title: "Data Visualisation",
    },
    {
      id: "mammals",
      year: "Step5",
      title: "Final meeting and evaluation",
    },
    { id: "developer", year: "0", title: "Homo Developer", link: "https://codepen.io/josetxu" },
  ];

  return (
    <div>
      <h1>The mission is :Data Collection for Machine learning</h1>
      <div className="selector">
        {timelineData.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.year}
            <strong>{item.title}</strong>
          </a>
        ))}
      </div>

      <ul className="timeline">
        {timelineData.map((item) => (
          <li key={item.id}>
            <h2 id={item.id}></h2>
            <time>
              <strong>{item.year}</strong>
              <span>
                Credit
                <br />
                <em>+10 ML skills</em>
              </span>
            </time>
            <strong>
              <span>{item.title}</span>
            </strong>
            <span>
              <a target="_blank" rel="noopener noreferrer" href={item.link}></a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pipeline;
