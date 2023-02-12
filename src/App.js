import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
// import './App.css';
import Header from "./Header/Header";
import ScrollToTop from "./ScrollToTop";
import About from "./Views/About";
import Partner from "./Views/Partner";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact="true" path="/" element={<Body />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Partner />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
