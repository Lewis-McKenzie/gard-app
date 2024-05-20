import "./App.css";
import "react";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import ServicesPage from "./components/services/Services";
import Gallery from "./components/gallery/Gallery";
import ContactForm from "./components/contact/ContactForm";
import { About } from "./components/about/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ServicesPage />
      <Gallery />
      <ContactForm />
      <About />
      <Footer />
    </div>
  );
}

export default App;
