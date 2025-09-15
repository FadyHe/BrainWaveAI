import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './Components/Benefits.jsx';
import Collaboration from './Components/Collaboration.jsx';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import Pricing from './Components/Pricing.jsx';
import Roadmap from './Components/Roadmap.jsx';
import Services from './Components/Services.jsx';
function App() {

  return (
    <>

    <div className='pt-[4.75rem] lg:[5.25rem] overflow-hidden '>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
    </div>
      <ButtonGradient />
    </>
  )
}

export default App
