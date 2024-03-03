import "./App.css";

// import Accordian from "./components/accordian";
// import ModalTest from "./components/custom-modal-popup/modal-test";
import ModalTest from "./summit/custom-modal-popup/modal-test";
// import TabTest from "./components/custom-tabs/tab-test";
import TabTest from "./summit/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
// import ImageSlider from "./components/image-slider";
import ImageSlider from "./summit/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";
// import SearchAutocomplete from "./components/search-autocomplete-with-api";
import SearchAutocomplete from "./summit/search-autocomplete-with-api";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tact-toe";
// import TreeView from "./components/tree-view";
import TreeView from "./summit/tree-view";
import menus from "./components/tree-view/data";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import Accordian from "./summit/accordian";
function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian />
      {/* DONEEEEEEEEEEEEEEE */}
      {/* Random color component */}
      {/* <RandomColor/> DONEEEEEEEEEEEEEEE */}
      {/* Star rating component */}
      <StarRating noOfStars={5} />
      {/* Image slider component DONEEEEEEEEEEEEEEE */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"}
      />   DONEEEEEEEEEEEEEEEEEEE*/}
      {/* Load more products component */}
      {/* <LoadMoreData/> */}
      {/* Tree view component/menu UI component / recursive navigation menu */}
      {/* <TreeView menus={menus} /> DONEEEEEEEEEEEEEEEEEE */}
      {/* QR code generator */}
      {/* <QRCodeGenerator   />         DONEEEEEEEEEE*/}
      {/* light and dark theme switch */}
      {/* <LightDarkMode/> */}
      {/* Scroll indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* Custom tabs component */}
      {/* <TabTest DONEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE /> */}
      {/* Custom Modal Component */}
      {/* <ModalTest /> DONEEEEEEEEEEEEEEEEEEEEEE */}
      {/* Github profile finder */}
      {/* <GithubProfileFinder/> */}
      {/* Search Autocomplete */}
      <SearchAutocomplete />
      {/* Tic tac toe */}
      <TicTacToe />
      {/* Feature Flag IMplementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />   
      </FeatureFlagGlobalState> */}
      {/* useFetch - Custom Hook Test*/}
      {/* <UseFetchHookTest/> */}
      {/* Use Onclick Outside Hook Test */}
      {/* <UseOnclickOutsideTest/> */}
      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest/> */}
      {/* Scroll to Top and Bottom */}
      {/* <ScrollToTopAndBottom/> */}
      {/* Scroll to a Particular Section */}
      {/* <ScrollToSection /> */}
    </div>
  );
}

export default App;
