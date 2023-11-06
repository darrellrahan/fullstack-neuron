import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";

async function getData() {
  const res = await fetch("http://neuronworks.free.nf/api/service-pages");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  setTimeout(() => {
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }, 10000);
}

export default async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <>
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </>
  );
}
