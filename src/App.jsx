import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[url('./assets/cafe-home.jpg')] bg-cover bg-center bg-fixed relative">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 min-h-screen flex flex-col max-w-7xl mx-auto w-full">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
