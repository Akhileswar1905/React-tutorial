const Home = () => {
  const handleClick = () => {
    console.log(`Hello`);
  };

  return (
    <div className="home">
      <h2>HomePage</h2>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Home;
