import { Link } from "react-router-dom";
import bg from '../assets/three-coffees.jpg'
import Button from './Button'
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className="relative flex flex-col items-center h-[550px] w-full overflow-hidden">
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
    )
}

export default Home

