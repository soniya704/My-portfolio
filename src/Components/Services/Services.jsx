import React from 'react';
import './Services.css'
import { Cards } from '../Cards/Cards';
import heartemoji from '../../assets/heartemoji.png';
import glasses from '../../assets/glasses.png';
import humble from '../../assets/humble.png';
import resume from './resume.pdf';
import { themeContext } from '../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'

export const Services = () => {

     const transition = { duration: 1, type: 'spring' }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='services' id='Services'>

            {/*left side*/}

            <div className="awesome">
                <span style={{color: darkMode ? '#fff' : ''}}>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo voluptatibus provident <br />sminima molestiae adipisci unde, ducimus eligendi veritatis.</span>
                <a href={resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>
                <div className='blur s-blur' style={{ background: '#abf1ff94' }}></div>

            </div>

            {/*right side*/}

            <div className="cards">

                <motion.div
                whileInView={{left: '14rem'}}
                initial={{left: '25rem'}}
                transition={transition}
                
                style={{ left: '14rem' }}>
                    <Cards
                        emoji={heartemoji}
                        heading={'Design'}
                        detail={'Figma, Sketch, Adobe, Adobe xd, Photoshope'}
                    />

                </motion.div>

                {/*second card*/}

                <motion.div
                initial={{left: '-11rem', top: '12rem'}}
                whileInView={{left: '-4rem'}}
                transition={transition}
                
                style={{ left: '-4rem', top: '12rem' }}>
                    <Cards
                        emoji={glasses}
                        heading={'Developer'}
                        detail={'Html, Css, Javascript, React Adobe Adobe Xd'}
                    />
                </motion.div>

                {/* 3rd card */}

                <motion.div 
                initial={{top: '19rem', left: '25rem'}}
                whileInView={{left: '12rem'}}
                transition={transition}
                
                style={{ left: '12rem', top: '19rem' }}>
                    <Cards
                        emoji={humble}
                        heading={'UI/UX'}
                        detail={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellendus minus aut!'}
                    />
                </motion.div>
                <div className='blur s-blur2' style={{ background: 'var(--purple)' }}></div>

            </div>

        </div>
    )
}
