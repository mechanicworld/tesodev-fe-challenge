import "./App.scss";


import logo from "./assets/img/tesodev-logo.png";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "./components/utils/Buttons/Button/Button";

function App() {
  return (
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
        
        <SearchBar/>

        </div>
      </div>
    </div>
  );
}

export default App;
