import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import Section5 from "./components/Section5"
import Section6 from "./components/Section6"
import Footer from "./components/Footer"
const Section1 = () => {
  return (
    <section className="bg-black text-white text-center p-4 relative z-10">
      <a href="#" className="underline">Welcome to Airbnb. Find the best places to stay in the world.</a>
    </section>
  )
}

function App() {

  return (
    <div className="flex flex-col">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  )
}

export default App
