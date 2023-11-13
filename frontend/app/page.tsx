import About from "./components/About";
import Article from "./components/Article";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

async function getData() {
  const res = await fetch("http://localhost:8000/api/home");

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
      <Hero data={data.data[0].hero} />
      <Chatbot />
      <About data={data.data[0]} />
      <Services data={data.data[0].service} />
      <Testimonial data={data.data[0]} />
      <Article data={data.data[0].article} />
      <Footer />
    </>
  );
}
