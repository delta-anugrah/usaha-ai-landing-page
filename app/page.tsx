import { About, Contact, Footer } from "@/components/about-contact";
import { Capabilities } from "@/components/capabilities";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Products } from "@/components/products";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Products />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
