import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="app ">
      <h1> Dictionary</h1>
      <Dictionary defaultWord="cool" />
    </div>
  );
}

export default App;
