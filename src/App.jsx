import "./App.scss";

import logo from "./assets/img/tesodev-logo.png";
import Footer from "./components/Footer/Footer";
import NewsSlider from "./components/NewsSlider/NewsSlider";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "./components/utils/Buttons/Button/Button";

function App() {
  return (
    <>
    <div className="page-container">
      <div className="new-record-container">
        <Button buttonName={"Add new record"} />
      </div>
      <div className="container-center">
        <div>
          <img className="logo" src={logo} alt="tesodev-logo" />
          <div className="logo-subtitle">Search app</div>
        </div>
        <div>
          <p className="search-title">Find in records</p>
          <SearchBar />
        </div>
        <div className="slider-box">
        <p className="search-title">Top News</p>
        <NewsSlider />
        </div>
      </div>

    </div>
    <Footer/>
   </>
  );
}

export default App;
