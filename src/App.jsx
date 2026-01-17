import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import FeaturedPets from './components/FeaturedPets'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import PetDetail from './pages/PetDetail'
import About from './pages/About';
import Testimonials from './components/Testimonials';
import Application from './pages/Application';
import BreedProgram from './pages/BreedProgram';
import AvailablePoodles from './pages/AvailablePoodles';
import HealthSubPage from './pages/HealthSubPage';
import RaisingSubPage from './pages/RaisingSubPage';

const Home = () => (
  <>
    <Hero />
    <Intro />
    <FeaturedPets />
    <Testimonials />
    <ContactUs />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/application' element={<Application />} />
          <Route path='/available' element={<AvailablePoodles />}/>
          <Route path='/breed-program' element={<BreedProgram />}/>
          <Route path='/health-testing' element={<HealthSubPage />}/>
          <Route path='/puppy-raising' element={<RaisingSubPage />}/>
          <Route path="/pet/:id" element={<PetDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App