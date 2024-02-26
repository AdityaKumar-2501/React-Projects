import "./App.css";
import Random from "./components/Random-color-generator";
import Accordion from "./components/accordion/index";
import ImageSlider from "./components/image-slider";
import Rating from "./components/star-rating";

function App() {
  return (
    <>
      {/* Accordian component */}
      {/* <Accordion /> */}

      {/* Random color genrator component */}
      {/* <Random /> */}

      {/* Star Rating Component */}
      {/* <Rating noOfStars={10} /> */}

      {/* Image Slider Component */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </>
  );
}

export default App;
