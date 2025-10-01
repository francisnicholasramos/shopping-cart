import { Link } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import { useEffect, useState } from "react";
import { GiCoffeeBeans } from "react-icons/gi";

const Navbar = ({cartAmount}: {cartAmount: number}) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`sticky top-0 z-50 flex justify-between items-center py-2 px-10 sm:px-15 w-full text-xl transition-colors duration-500 ${
            scrolled ? "bg-black/70 text-white" : "bg-[#262626] text-[#dedede]"
            }`}
        >
            <Link to="/">
                <GiCoffeeBeans className="w-10 h-10" />
            </Link>

            <div className="flex gap-8">
                <Link to="/shop">
                    <span className="flex items-center gap-1">
                        <LuShoppingBag className="w-6 h-6"/>
                    </span>

                </Link>
                <Link to="/cart">
                    <span className="flex items-center gap-1 relative">
                        <GrCart className="w-6 h-6 "/>
                        {cartAmount ? (
                            <span 
                                className="
                                absolute w-5 h-5 flex 
                                left-[17px]
                                top-[15px]
                                justify-center items-center 
                                text-[0.8rem] font-semibold
                                bg-[#00802b] 
                                rounded-full"
                            >
                                { cartAmount > 50 ? "50+" : cartAmount }
                            </span>
                        ) : null }
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
