import React from 'react';
import './Intro.css';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import vector1 from '../assets/vector1.png';
import vector2 from '../assets/vector2.png';
import glassesimoji from '../assets/glassesimoji.png';
import thumbup from '../assets/thumbup.png';
import crown from '../assets/crown.png';
import { Floating } from '../Components/Floating/Floating';
import { themeContext } from '../Components/Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import girl from '../assets/girlimg.webp'

export const Intro = () => {

    const transition = { duration: 2, type: 'spring' }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='intro'>
            <div className="intro-left">
                <div className="intro-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hy! I am</span>
                    <span>Soniya Gupta</span>
                    <span>Fronted Developer with high level of experience in web designing
                        and development, producting the Quality work
                    </span>
                </div>
                <button className='button intro-button'>Hire me</button>
                <div className="intro-icon">
                    <img src={github} alt='' />
                    <img src={linkedin} alt='' />
                    <img src={instagram} alt='' />
                </div>
            </div>

            <div className="intro-right">
                <img src={vector1} alt='' />
                <img src={vector2} alt='' />
                <img src={girl} alt='' />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ top: '-24%' }}
                    transition={transition}
                    src={glassesimoji} alt='' />

                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    style={{ top: '-4%', left: '68%' }} className='floating'>
                    <Floating image={crown} txt1='Web' txt2='Developer' />
                </motion.div>

                <motion.div
                    initial={{ top: '18rem', left: '9rem' }}
                    whileInView={{ left: '0%' }}
                    transition={transition}
                    style={{ top: '18rem', left: '0rem' }} className='floating'>
                    <Floating image={thumbup} txt1='Best Design' txt2='Award' />
                </motion.div>

                {/*blur div*/}
                <div className='blur' style={{ background: 'rgb(238, 210, 255)' }}></div>
                <div className='blur'
                    style={{ background: '#c1f5ff', width: '21rem', height: '11rem', top: '17rem', left: '-8rem' }}></div>
            </div>
        </div>
    )
}
