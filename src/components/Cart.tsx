import Button from './Button'
import EmptyCart from './EmptyCart'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import type {LocalStorageType} from '../../src/localStorage';

type CartProps = {
    cartInfo: LocalStorageType[];
    deleteItem: (id: string) => void;
    handleSelector: (id: string, operation: 'increment' | 'decrement') => void;
}

const Cart = ({cartInfo, deleteItem, handleSelector}: CartProps) => {
    if (cartInfo.length === 0) {
        return <EmptyCart />
    }
    return (
        <div className="flex flex-col gap-10 justify-center items-center p-5">
            {cartInfo.map((info) => (
                <div 
                    className="flex shadow-xl rounded-sm bg-white p-2 w-full min-w-[300px] max-w-[900px]"
                    key={info.id}
                    // onClick={onClick}
                >
                    <div className="flex gap-2 w-1/2 ">
                        <div className="w-50 h-50">
                            <img
                                src={info.urls.raw}
                                alt={info.alt_description}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="flex-1 font-medium">{info.alt_description}</p>
                    </div>

                    <div className="flex justify-around w-1/2 items-center">
                        <p className="text-[#008000] font-semibold">${info.price}</p>
                        <div className="flex ">
                            <Button 
                                onClick={() => handleSelector(info.id, 'decrement')}
                                icon={<FaMinus/>} 
                                className="flex justify-end" 
                            />
                            <input 
                                type="tel" 
                                className="border border-gray-400 outline-none text-center w-[60px]" 
                                min="1"
                                readOnly
                                value={info.cart}
                                autoComplete="off"
                            />
                            <Button 
                                onClick={() => handleSelector(info.id, 'increment')}
                                icon={<FaPlus/>} 
                                className="w-auto"
                            />
                        </div>

                        <div className="flex">
                            <p className="text-[#ff3333] font-semibold">${info.price * info.cart}</p>
                        </div>
                        
                        <div className="flex">
                            <Button 
                                onClick={() => deleteItem(info.id)}
                                icon={<FaTrashCan />}
                                className="bg-red-500 text-white"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart
