import Button from './Button'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import type {UnsplashType} from '../../src/api'


type ModalProps = {
    onOpen: boolean;
    onClose: () => void;
    addItem: (id: string) => void;
    info: UnsplashType | null; // single object, can be null
    quantity: number;
    isAdded: string | null;
    handleSelector: (operation: 'increment' | 'decrement') => void;
};

const Modal = ({onOpen, onClose, addItem, info, quantity, isAdded, handleSelector}: ModalProps ) => {
    if (!onOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLElement>) => {
        if (e.target === e.currentTarget) onClose()
    } 

    return (
        <div 
            className={`
                fixed inset-0 z-50 flex justify-center items-center 
                bg-black/20
                `}
                onClick={handleBackdropClick}
        >
                <div 
                    className="bg-white rounded-sm p-2 gap-2 w-[500px] h-[300px] flex"
                >

                    <div className="w-[45%]">
                        <img 
                            src={info?.urls.raw  || ''}
                            className="w-full h-full object-cover"
                        />
                    </div>

                <div className="flex flex-col text-[#333] w-[55%]">
                    <h2 className="font-semibold">{info?.alt_description || ''}</h2>
                    <p className="text-[#008000]">$18.50</p>
                    <hr />
                    <div className="mt-auto flex flex-col justify-end gap-2">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-500 w-1/2">Quantity</p>
                            <div className="flex">
                                <Button 
                                    onClick={() => handleSelector('decrement')}
                                    icon={<FaMinus/>} 
                                    className="flex justify-end" 
                                />
                                <input 
                                    type="tel" 
                                    className="border border-gray-400 outline-none text-center w-[60px]" 
                                    min="1"
                                    readOnly
                                    value={quantity}
                                    autoComplete="off"
                                />
                                <Button 
                                    onClick={() => handleSelector('increment')}
                                    icon={<FaPlus/>} 
                                    className="w-auto"
                                />
                            </div>
                        </div>

                        {isAdded === info?.id && (
                            <p className="text-center italic text-sm font-medium text-blue-500">This item is already in your cart</p>
                        )}

                        <div className="flex gap-2">
                            <Button 
                                text="Go back" 
                                className="border border-gray-400" 
                                onClick={onClose}
                            />
                            <Button 
                                text="Add to cart"
                                className="bg-[#262626] text-white hover:bg-[#333]" 
                                onClick={() => addItem(info!.id)}
                            />
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Modal;
