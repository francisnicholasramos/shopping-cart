import Button from './Button'
import Subtotal from './Subtotal'
import EmptyCart from './EmptyCart'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
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
        <>
            <div className="relative flex flex-col gap-10 justify-center items-center p-5 ">
                {cartInfo.map((info) => (
                    <div 
                        className="flex shadow-xl rounded-sm bg-white p-2 w-full min-w-[300px] max-w-[500px]"
                        key={info.id}
                        // onClick={onClick}
                    >
                        <div className="flex gap-2 w-full">
                            <div className="w-[40%] h-50">
                                <img
                                    src={info.urls.raw}
                                    alt={info.alt_description}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-10 w-[60%]">
                                <div className="flex justify-between">
                                    <p className="flex font-medium">{info.alt_description}</p>
                                    <p className="text-[#008000] font-semibold pr-1 pl-5">${info.price}</p>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex">
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
                                        <Button 
                                            onClick={() => deleteItem(info.id)}
                                            text="Remove Item"
                                            className="text-[0.8rem] text-gray-500 hover:text-red-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Subtotal total={cartInfo} />
        </>
    )
}

export default Cart
