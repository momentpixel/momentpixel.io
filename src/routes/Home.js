import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
        title="Welcome to our Family"
        text="Hello...."
        buttonText="Join Us"
        url="/"
        btnClass="show"
      />

      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
