//APP PAGE

//IMPORTING
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

//APP
function App() {
  return (
    <div className="font-Poppins overflow-hidden">
      <Header/>
      <Hero />
      <Features />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
