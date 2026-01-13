import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import FeaturedPets from './components/FeaturedPets'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import PetDetail from './pages/PetDetail'

const Home = () => (
  <>
    <Hero />
    <Intro />
    <FeaturedPets />
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
          <Route path="/pet/:id" element={<PetDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App