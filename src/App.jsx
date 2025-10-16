import { useContext, useState } from 'react'
import './App.css';
import { Navbar } from './Components/Navbar/Navbar'
import { Intro } from './Intro/Intro';
import { Services } from './Components/Services/Services';
import { Experience } from './Components/Experience/Experience';
import { Works } from './Components/Works/Works';
import { Portfolio } from './Components/Portfolio/Portfolio';
import { Testimonial } from './Components/Testimonials/Testimonial';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { themeContext } from './Components/Context';

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className='App' style={{background: darkMode ? 'black' : '', 
        color: darkMode ? 'white' : ''
       }}>
        <Navbar />
        <Intro />
        <Services />
        <Experience />
        <Works />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
       
      </div>
    </>
  )
}

export default App
