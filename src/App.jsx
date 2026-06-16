import Background from './components/Background/Background';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Achievements from './components/Achievements/Achievements';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Background />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
