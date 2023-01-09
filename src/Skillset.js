const Skillset = ({ skillset, title, handleDelete }) => {
  const skills = skillset;
  return (
    <div className="skill">
      <h1 style={{ textAlign: "center", fontSize: "30px" }}>{title}</h1>
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
          <button onClick={() => handleDelete(s.id)} style={{ color: "black" }}>
            Del
          </button>
        </div>
      ))}
    </div>
  );
};

export default Skillset;
