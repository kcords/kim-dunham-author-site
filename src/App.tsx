import "./App.css";

import { About, Books, Contact, Home, Newsletter } from "./pages";
import { Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header/";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
