import "./App.css";
import ReactDom from "react-dom";
import MainPage from "./Components/MainPage/index.js";

function App() {
  ReactDom.render(<MainPage />, document.getElementById("MainPage"));

  return <div className="MainPage"></div>;
}

export default App;
