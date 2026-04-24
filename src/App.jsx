import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'; // <--- Naya add kiya
import { client } from './lib/sanityClient'; // <--- Sanity client import kiya

// Baqi saare imports wese hi rakhein...
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
import ScrollToHash from './components/ScrollToHash';
import AboutBreeder from './pages/AboutBreeder';
import HealthContract from './pages/HealthContract';
import PastLitters from './pages/PastLitters';
import LitterShowcase from './pages/LitterShowcase';
import GalleryHub from './pages/GalleryHub';
import OurDogs from './pages/OurDogs';
import OurDogsSubpage from './pages/OurDogsSubpage';
import RedPoodleGenetics from './pages/RedPoodleGenetics';
import ToyPoodleStandard from './pages/ToyPoodleStandard';
import WhyRed from './components/WhyRed';
import HomePhilosophy from './components/HomePhilosophy';
import Mentorship from './pages/Mentorship';
import ExploreProgram from './components/ExploreProgram';
import Navbar2 from './components/Navbar2';
import Hero2 from './components/Hero2';
import Steps from './components/Steps';
import Benefits from './components/Benifits';
import PetsSlider from './components/PetsSlider';
import FloatingIcons from './components/FloatingIcons';
import FancyPoodles from './pages/FancyPoodles';
import HomeGallery from './components/HomeGallery';
import Gallery from './pages/Gallery';

// Home component ko update kiya taake ye 'data' props le sake
const Home = ({ data }) => (
  <>
    {/* Yahan hum data pass kar rahe hain har section ko */}
    <Hero2 sanityData={data} /> 
    <Steps sanityData={data} />
    <Benefits sanityData={data} />
    <WhyRed sanityData={data} />
    <HomePhilosophy sanityData={data} />
    <Mentorship sanityData={data} />
    <ExploreProgram sanityData={data} />
    <Testimonials sanityData={data} />
    <HomeGallery sanityData={data} />
    <ContactUs sanityData={data} />
  </>
);

const App = () => {
  const [homeData, setHomeData] = useState(null); // Data store karne ke liye state

  useEffect(() => {
  // Ab hum sirf "hero" type ka data mangwa rahe hain
  const query = `*[_type == "hero"][0]`; 
  client.fetch(query).then((data) => {
    setHomeData(data); // Ye data Hero.jsx ko chala jayega
  });
}, []);

  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToHash />
        <Navbar />
        <Routes>
          {/* Home ko homeData bhej rahe hain */}
          <Route path="/" element={<Home data={homeData} />} />
          
          {/* Baqi saari routes wese hi hain */}
          <Route path='/about' element={<About />} />
          <Route path='/application' element={<Application />} />
          <Route path='/available' element={<AvailablePoodles />}/>
          <Route path='/breed-program' element={<BreedProgram />}/>
          <Route path='/health-testing' element={<HealthSubPage />}/>
          <Route path='/about-breeder' element={<AboutBreeder />}/>
          <Route path='/health-contract' element={<HealthContract />}/>
          <Route path='/puppy-raising' element={<RaisingSubPage />}/>
          <Route path='/past-litters' element={<PastLitters />}/>
          <Route path='/past-litters/:id' element={<LitterShowcase />}/>
          <Route path='/galleries' element={<GalleryHub />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/our-dogs' element={<OurDogs />}/>
          <Route path='/dogs-page' element={<OurDogsSubpage />}/>
          <Route path='/the-red-story' element={<RedPoodleGenetics />}/>
          <Route path='/red-toy-standard' element={<ToyPoodleStandard />}/>
          <Route path="/pet/:id" element={<PetDetail />} />
          <Route path='/scarletts-fancy-poodles' element={<FancyPoodles />}/>
        </Routes>
        <FloatingIcons />
        <Footer />
      </div>
    </Router>
  )
}

export default App