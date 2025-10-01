import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import bg from '../assets/three-coffees.jpg'
import Button from './Button'
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import type {UnsplashType} from '../../src/api';
import Footer from './Footer'

const Home = ({cards} : {cards: UnsplashType[]}) => {
    return (
        <>
            <div className="relative flex flex-col items-center  h-[550px] w-full overflow-hidden">
                <img 
                    src={bg}
                    className="w-full h-full object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 
                    bg-[linear-gradient(180deg,rgba(4,14,22,0),rgba(5,18,28,0.8)_100%)]"
                ></div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="
                    absolute 
                    items-center /* centers vertically + horizontally on mobile */
                    md:items-end md:justify-items-start  /* bottom-left on desktop */
                    bottom-0 md:bottom-25
                    left-0 md:left-20
                    top-80 md:top-90
                    text-center md:text-left
                    mx-3
                    "
                >

                    {/* Text block */}
                    <div>
                        <h2 className="flex flex-col gap-5 text-white text-3xl md:text-4xl max-w-xl">
                            Where coffee meets calm, and every cup feels right.
                        </h2>
                        <Link to="/shop">
                            <Button text="Shop now" className="bg-[#221811] w-auto md:w-1/3 text-white md:px-10 my-5"/>
                        </Link>
                    </div>
                </motion.div>



            </div>

            { /* Marquee */ }
            <div className="bg-white text-[#262626] py-5 shadow-md">
                <Marquee gradient={false} speed={50}>
                    <span className="mx-6 font-semibold tracking-wide text-2xl">
                        Freshly Brewed Daily
                    </span>
                    <GoDotFill />
                    <span className="mx-6 font-semibold tracking-wide text-2xl">
                        Your Daily Coffee Fix
                    </span>
                    <GoDotFill />
                    <span className="mx-6 font-semibold tracking-wide text-2xl">
                        Brewed to Perfection
                    </span>
                    <GoDotFill />
                    <span className="mx-6 font-semibold tracking-wide text-2xl">
                        Wake Up & Smell the Coffee
                    </span>
                    <GoDotFill />
                    <span className="mx-6 font-semibold tracking-wide text-2xl">
                        Espresso Yourself
                    </span>
                    <GoDotFill />
                    <span className="mx-6 font-semibold tracking-wide text-2xl">
                        Moments Made Over Coffee
                    </span>
                    <GoDotFill />
                </Marquee>
            </div>

            
            <div 
                className="flex flex-col py-5 gap-5 m-auto w-full bg-cover bg-center"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), 
                        url('https://images.unsplash.com/photo-1690983324515-d0faf73de6ca?q=80&w=1657&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
                    `
                }}    
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col justify-center items-center"
                >
                    <h2 className="text-2xl sm:text-3xl pb-3 font-semibold text-white">BEST SELLER</h2>
                    <div className="flex flex-wrap justify-around gap-5 w-full">
                        {cards.slice(0, 5).map((image) => (
                            <div 
                                key={image.id} 
                                className="w-full sm:w-1/2 lg:w-[300px] h-[200px] sm:h-[200px] lg:h-[250px]"
                            >
                                <img
                                    src={image.urls.raw}
                                    alt={image.alt_description}
                                    className="w-full h-full object-cover cursor-pointer rounded-sm"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <Footer />
        </>
    )
}

export default Home

