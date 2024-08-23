import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"

function Home() {
  return (
    <section>
      <Hero />
      <LatestCollection />
      <BestSeller />
    </section>
  )
}

export default Home