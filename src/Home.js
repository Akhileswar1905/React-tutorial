import { useState } from "react";

const Home = () => {
  const [skills, setSkills] = useState([
    { skill: "C language", percentage: 85, id: 1 },
    { skill: "Data Structures and Algorithms", percentage: 70, id: 2 },
    { skill: "Java", percentage: 90, id: 3 },
    { skill: "Python", percentage: 95, id: 4 },
  ]);
  return (
    <div className="home">
      {skills.map((s) => (
        <div className="skillBox" key={s.id}>
          <p className="name">{s.skill}</p>
          <div className="co">
            <div
              className="outer"
              style={{
                width: "1000px",
                height: "5px",
                backgroundColor: "white",
              }}
            >
              <div
                className="inner"
                style={{
                  width: s.percentage * 10,
                  height: "5px",
                  backgroundColor: "red",
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
