import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-white text-black py-10 px-6">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-xl font-bold text-black mb-4">Coffee Bean</h2>
                        <p className="text-sm leading-6">
                            Freshly brewed coffee served daily. A cozy spot to fuel your day
                            and keep you caffeinated.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-black mb-4">Quick Links</h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/" className="hover:underline transition-colors">
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a href="/" className="hover:underline transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/" className="hover:underline transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/" className="hover:underline transition-colors">
                                    Locations
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact / Social */}
                    <div>
                        <h2 className="text-xl font-bold text-black">Stay Connected</h2>
                        <p className="text-sm">456 Coffee St, CoffeeBean, PH</p>
                        <p className="text-sm">Email: hello@coffeebean.com</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="flex flex-col border-t w-full bg-[#262626] border-gray-700 pb-3 text-center text-[0.8rem] text-gray-400">
                <a  href="https://github.com/francisnicholasramos"
                    className="flex items-center justify-center gap-2 py-2 cursor-pointer hover:text-white">
                    <FaGithub className="text-lg" />
                    Developed by Francis Nicholas Ramos
                </a>
                <span>
                    © Copyright {new Date().getFullYear()} Francis Nicholas Ramos. All rights reserved.
                </span>
            </div>
        </>
    );
};

export default Footer;
