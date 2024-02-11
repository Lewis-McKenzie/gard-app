import "./App.css";
import "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import NotFound from "./components/notFound/NotFound";
import { Footer } from "./components/footer/Footer";
import ServicesPage from "./components/services/Services";
import { Gallery } from "./components/gallery/Gallery";
import ContactForm from "./components/contact/ContactForm";
import { About } from "./components/about/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<ContactForm />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
