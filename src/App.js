import Home from "./Home";
import NavBar from "./NavBar";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
