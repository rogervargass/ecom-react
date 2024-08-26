import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import OurPolicy from "../components/OurPolicy"

function Home() {
  return (
    <section>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
    </section>
  )
}

export default Home