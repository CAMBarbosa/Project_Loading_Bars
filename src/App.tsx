import "./App.css";
import Navbar from "./components/navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import ComplexProgressBarPage from "./pages/complexProgressBarPage";
import SimpleProgressBarPage from "./pages/simpleProgressBarPage";

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/simpleProgressBar"
              element={<SimpleProgressBarPage />}
            />
            <Route
              path="/complexProgressBar"
              element={<ComplexProgressBarPage />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
