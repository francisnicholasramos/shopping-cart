import { motion } from "framer-motion";
import PulseLoader from './PulseLoader'
import Modal from './Modal'
import type {UnsplashType} from '../../src/api';

type ShopProps = {
    cards: UnsplashType[];
    onClick: (id: string) => void;
    onOpen: boolean;
    onClose: () => void;
    info: UnsplashType | null;
    quantity: number;
    isAdded: string | null;
    handleSelector: (operation: 'increment' | 'decrement') => void;
    addItem: (id: string) => void;
}

const Shop = ({cards, onClick, onOpen, onClose, info, quantity, isAdded, handleSelector, addItem}: ShopProps) => {

    if (cards.length === 0) return <PulseLoader />

    return (
        <div 
            className="relative flex flex-wrap justify-center items-center mt-10 gap-7"
        >
            {cards.map((image) => (
                <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    onClick={() => onClick(image.id)}
                >
                    <div className="bg-white w-65 shadow-xl overflow-hidden rounded-lg hover:shadow-xl/20 hover:cursor-pointer transform transition-transform duration-400 hover:scale-105">
                        <div className="h-64">
                            <img
                                src={image.urls.raw}
                                alt={image.alt_description}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="py-3 px-2 w-full">
                            <div>
                                <p className="font-redhat truncate font-semibold" title={image.alt_description}>
                                    {image.alt_description}
                                </p>
                                <p className="text-[#008000]">${image.price}</p>
                            </div>

                        </div>
                    </div>
                </motion.div>
            ))}

            <Modal 
                onOpen={onOpen}
                onClose={onClose}
                info={info}
                quantity={quantity}
                handleSelector={handleSelector}
                addItem={addItem}
                isAdded={isAdded}
            />
        </div>
    );
};

export default Shop;
