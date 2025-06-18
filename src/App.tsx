import About from "./components/About"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Skill from "./components/Skill"

function App() {
  return (
    <div className="bg-black">
      <Navbar/>
      <Banner/>
      <About/>
      <Skill/>
    </div>
  )
}

export default App