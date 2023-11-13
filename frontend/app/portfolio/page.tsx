import Footer from "../components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";

async function getData() {
  const res = await fetch("http://localhost:8000/api/service-pages");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <Header />
      <Hero />
      <MainContent data={data.data} />
      <Footer portfolio />
    </>
  );
}
