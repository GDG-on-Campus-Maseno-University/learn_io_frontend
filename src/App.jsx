import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import JoinGDG from './pages/JoinGDG';
import Support from './pages/Support';
import About from './pages/About';
import ContactUs from './pages/Contact_Us';
import Carossel from './Components/Carossel';
import FeedbackButton from './Components/feedback';

// Import images for the carousel
import img1 from "./assets/c1.jpg";
import img2 from "./assets/c2.jpg";
import img3 from "./assets/c3.jpg";
import img4 from "./assets/c4.jpg";

function HomeLayout() {
  const images = [img1, img2, img3, img4];

  return (
    <div>
      <h1>Image Slider</h1>
      <Carossel images={images} speed={50} />
      <Home />
      
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page with Carousel & Footer */}
        <Route path="/" element={<HomeLayout />} />
        
        {/* Other Pages load separately */}
        <Route path="/join-gdg" element={<JoinGDG />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <FeedbackButton />
      <footer>
        <p>© 2025 Your Company</p>
      </footer>
    </Router>
  );
}

export default App;
