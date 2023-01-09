import { useState } from "react";
import Skillset from "./Skillset";

const Home = () => {
  const [skills, setSkills] = useState([
    { skill: "C language", percentage: 85, id: 1 },
    { skill: "Data Structures and Algorithms", percentage: 70, id: 2 },
    { skill: "Java", percentage: 90, id: 3 },
    { skill: "Python", percentage: 95, id: 4 },
    { skill: "HTML", percentage: 88, id: 5 },
    { skill: "CSS", percentage: 88, id: 6 },
    { skill: "JavaScript", percentage: 84, id: 7 },
  ]);

  const handleDelete = (id) => {
    const newSet = skills.filter((skill) => skill.id !== id);
    setSkills(newSet);
  };
  return (
    <div className="home">
      <Skillset
        skillset={skills}
        title="My Skills"
        handleDelete={handleDelete}
      ></Skillset>
    </div>
  );
};

export default Home;
