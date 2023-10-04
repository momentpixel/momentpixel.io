import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNlcnZpY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
        title="Services"
      />

      <Trip />
      <Footer />
    </>
  );
}

export default Service;
