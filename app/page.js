import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Trading from "./components/Trading";
import DownloadApp from "./components/DownloadApp";
export default function Home() {
  return (
  <div>
    <main >
    <Navbar/>
    <Hero/>  
    <Trading/>
    <DownloadApp/>
    <Features/>
    <Footer/>
    </main>
  </div>
  );
}
