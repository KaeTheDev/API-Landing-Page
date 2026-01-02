import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import UrlShortener from "./components/UrlShortener/UrlShortener";
import Features from "./components/Features/Features";
import Boost from "./components/Boost/Boost";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main page content */}
      <main className="grow">
        <Hero />
        <UrlShortener />
        <Features />
        <Boost />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;