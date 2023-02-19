import "./App.css";
import Carousel1 from "./components/Carousel1";
import Carousel2 from "./components/Carousel2";
import CarouselDifferences from "./components/CarouselDifferences";
import Differences from "./components/Differences";
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
      <Differences/>
      <Carousel1 />
      <Carousel2 />
      <CarouselDifferences/>
      <Sidemenu />
    </div>
  );
}

export default App;
