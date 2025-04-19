import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css"; // Make sure Tailwind directives are in here
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import NavBar
import NavBar from "./components/Navbar/NavBar"; // Adjust path if needed

// All pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import DemoProduct from "./pages/DemoProduct";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
// import Career from './pages/Career';

import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true, // Only animate elements once
        duration: 800, // Slightly faster duration? (Optional)
        easing: "ease-out-cubic",
      });
    };

    // Delay AOS init slightly if needed, or keep on load
    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("Atorix IT Solutions");

  return (
    <>
      <Router>
        {/* Render NavBar here, outside ScrollToTop and Routes */}
        {/* It will be present on all pages */}
        <NavBar />

        <ScrollToTop>
          {/* Main content area where pages are swapped */}
          {/* Pages like Home, About, Contact need their own top padding */}
          <main>
            {" "}
            {/* Optional: wrap Routes in main for semantics */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/get-demo" element={<DemoProduct />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              {/* <Route path="/career" element={<Career />} /> */}
            </Routes>
          </main>
        </ScrollToTop>
        {/* Footer could potentially go here too if it's consistent across pages */}
        {/* Or keep it inside each page component if it varies */}
      </Router>
    </>
  );
}

export default App;
