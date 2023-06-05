import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <section className="hero-wrapper">
            <div className=" flexCenter paddings innerWidth hero-container">
                {/* Left Side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className='orange-circle' />

                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "spring"
                            }}
                        >
                            <h1>Discover <br /> Most Suitable <br /> Property</h1>
                        </motion.h1>
                    </div>

                    <div className=" flexColStart hero-des">
                        <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" />
                        <button className='button'>Search</button>
                    </div>

                    {/* Numbers Statistical data */}
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={5000} end={5200} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={420} end={450} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={15} end={20} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'> Awards Winning</span>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="flexCenter hero-right">
                    <motion.div
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: "0", opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "spring"
                        }}
                        className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </motion.div>
                </div>
            </div>

        </section >
    )
}

export default Hero