import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Masvendido from "@/components/Masvendido";

export default function Home() {
  return (
    <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <AboutMe/>
      <Masvendido/>
      <Footer/>
    </div>
  );
}
