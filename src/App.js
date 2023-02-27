import React, { useState } from "react";
import Stars from "./components/Stars";
import Carousel1 from "./components/Carousel1";
import Carousel2 from "./components/Carousel2";
import CarouselDifferences from "./components/CarouselDifferences";
import Differences from "./components/Differences";
import Firstpage from "./components/Firstpage";
import Sidemenu from "./components/Sidemenu";
import { SemipolarSpinner } from "react-epic-spinners";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <div className="App">
      {isLoading ? (
        <SemipolarSpinner
          className="spinner"
          animationDelay="1000"
          size="500"
          color="white"
        />
      ) : (
        <div>
          <Stars />
          <Firstpage />
          <Differences />
          <Carousel1 />
          <Carousel2 />
          <CarouselDifferences />
          <Sidemenu />
        </div>
      )}
    </div>
  );
}

export default App;
