import "./App.css";
import AutoSearch from "./TypeHead-Lib/AutoSearch";
import FillterTable from "./components/filterTable";
import TestingAPi from "./TypeHead-Lib/margeApitest";

function App() {
  return (
    <div className="App">
      {/* <FillterTable/> */}
      <AutoSearch />
      {/* <TestingAPi/> */}
    </div>
  );
}

export default App;
