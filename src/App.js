import "./App.css";
import Carousel1 from "./components/Carousel1";
import Firstpage from "./components/Firstpage";
import Sidemenu from "./components/Sidemenu";

function App() {
  return (
    <div className="App">
      <body>
        <div class="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
      </body>
      <Firstpage />

      <Sidemenu />
      <Carousel1 />
    </div>
  );
}

export default App;
