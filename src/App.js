import "./App.css";
import MainPage from "./Components/MainPage/index.js";

function App() {
  ReactDom.render(<MainPage />, document.getElementById("MainPage"));

  return <div className="MainPage"></div>;
}

export default App;
