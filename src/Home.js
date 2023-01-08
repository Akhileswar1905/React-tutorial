const Home = () => {
  const handleClick = (name) => {
    console.log(`Hello ${name}`);
  };
  const handleClick2 = (e) => {
    console.log("Hello" + e.target);
  };
  return (
    <div className="home">
      <h2>HomePage</h2>
      <button
        onClick={() => {
          handleClick("Akhil");
        }}
      >
        Click
      </button>
      <button
        onClick={(e) => {
          handleClick2(e);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Home;
