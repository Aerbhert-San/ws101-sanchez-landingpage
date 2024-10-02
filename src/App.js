import { useEffect } from 'react';
import './style.css';
import Navbar from './Navbar';
import Home from './components/Home';
import Benefits from './components/Benefits';
import Importance from './components/Importance';
import About from './components/About';
import './wallpaperflare.com_wallpaper.jpg'
import './wallpaper2.jpg'
import Footer from './components/Footeer';
function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav_bar a');
      let index = Array.from(sections).findIndex(section =>
        section.getBoundingClientRect().top <= window.innerHeight / 2 &&
        section.getBoundingClientRect().bottom >= window.innerHeight / 2
      );
      navLinks.forEach((link, i) => link.classList.toggle('active', i === index));
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Benefits />
      <Importance />
      <About />
      <Footer />
    </div>
  );
}

export default App;
