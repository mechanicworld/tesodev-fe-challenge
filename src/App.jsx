import "./App.scss";


import logo from "./assets/img/tesodev-logo.png";
import Button from "./components/utils/Buttons/Button/Button";

function App() {
  return (
    <div className="">
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

        </div>
      </div>
    </div>
  );
}

export default App;
