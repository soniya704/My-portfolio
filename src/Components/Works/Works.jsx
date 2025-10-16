import React from 'react';
import './Works.css';
import upwork from '../../assets/upwork.png';
import fiver from '../../assets/fiverr.png';
import facebook from '../../assets/facebook.png';
import shopify from '../../assets/shopify.png';
import amazon from '../../assets/amazon.png';
import { themeContext } from '../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'






export const Works = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='works'>
            {/*left side*/}
            <div className="awesome">
                <span style={{ color: darkMode ? '#fff' : '' }}>Works for All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo    voluptatibus provident
                    <br />sminima molestiae adipisci unde, ducimus eligendi veritatis
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>

                <button className='button s-button'>Hire me</button>

                {/* <div className='blur s-blur' style={{ background: '#abf1ff94' }}></div>*/}

            </div>

            {/*left side*/}

            <div className="w-right">
                <motion.div
                initial={{rotate : 45}}
                whileInView={{rotate : 0}}
                viewport={{margin : '-40px'}}
                transition={{duration : 3.5, type :'spring'}}  
                className="w-maincircle">
                    <div className="w-secondcircle">
                        <img src={upwork} alt='' />
                    </div>
                    <div className="w-secondcircle">
                        <img src={fiver} alt='' />
                    </div>
                    <div className="w-secondcircle">
                        <img src={amazon} alt='' />
                    </div>
                    <div className="w-secondcircle">
                        <img src={facebook} alt='' />
                    </div>
                    <div className="w-secondcircle">
                        <img src={shopify} alt='' />
                    </div>
                </motion.div>
                <div className='w-backcircle bluecircle'></div>
                <div className='w-backcircle yellowcircle'></div>
            </div>





        </div>









    )
}
