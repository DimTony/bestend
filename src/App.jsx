import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import TimeOut from "./pages/TimeOut";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import RestoAndBar from "./pages/RestoAndBar";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/resto-and-bar" element={<RestoAndBar />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/" element={<TimeOut />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
