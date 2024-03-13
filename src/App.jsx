import "./App.css";
import Random from "./components/Random-color-generator";
import Accordion from "./components/accordion/index";
import ImageSlider from "./components/image-slider";
import Rating from "./components/star-rating";
import LoadMoreData from "./components/load-more/index";
import TreeView from "./components/tree-view/index";
import menus from "./components/tree-view/data";
import QRcodeGenerator from "./components/qr-code";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import CustomTabs from "./components/custom-tabs/tabs-test";
import ModalTest from "./components/custom-modal/modal-test";

function App() {
    return (
        <div className="App">
            {/* Accordian component */}
            {/* <Accordion /> */}

            {/* Random color genrator component */}
            {/* <Random /> */}

            {/* Star Rating Component */}
            {/* <Rating noOfStars={10} /> */}

            {/* Image Slider Component */}
            {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}

            {/* Load More Products Components */}
            {/* <LoadMoreData /> */}

            {/* Tree view Component */}
            {/* <TreeView menus={menus} /> */}

            {/* QRCode Generator */}
            {/* <QRcodeGenerator /> */}

            {/* light dark mode */}
            {/* <LightDarkMode /> */}

            {/* Scroll Indicator */}
            {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

            {/* Custom tabs */}
            {/* <CustomTabs /> */}

            {/* custom Modal */}
            <ModalTest />
        </div>
    );
}

export default App;
