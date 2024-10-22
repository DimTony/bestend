import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import TimeOut from "./pages/TimeOut";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Rooms from "./pages/Rooms";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/rooms" element={<Rooms />} />
          {/* <Route path="/" element={<TimeOut />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
