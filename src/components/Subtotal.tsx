import Button from './Button'

const Subtotal = ({total}) => {
    const overAllTotal = total.reduce((sum, item) => {
        return sum + item.price * item.cart
    }, 0)

    return (
        <div 
            className="fixed bottom-0 left-1/2 -translate-x-1/2 
                       bg-white p-2 gap-2 
                       w-full min-w-[300px] max-w-[900px] 
                       flex items-center justify-end rounded-md
                       shadow-[0_-4px_6px_rgba(0,0,0,0.1)]
            ">

            <span className="flex flex-col items-center sm:gap-2 sm:flex-row">
                <span>
                    Total:
                </span>
                <span className="text-lg text-red-500 font-semibold text-[0.8rem] sm:text-base">${overAllTotal}</span>
            </span>
            <Button 
                text="Check Out"
                className="bg-[#262626] text-[0.8rem] sm:text-base max-w-[100px] sm:max-w-[150px] text-white hover:bg-[#333]"
            />
        </div>
    )
}

export default Subtotal
