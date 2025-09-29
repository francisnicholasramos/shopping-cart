import { Link } from "react-router";

const EmptyCart = () => {
    return (
        <div className="flex items-center flex-col gap-1 p-5">
            <p className="font-semibold tracking-wider text-xl text-[#333] ">YOUR CART IS EMPTY</p>
            <Link to="/shop"><p className="underline underline-offset-4">SHOP NOW</p></Link>
        </div>
    )
}

export default EmptyCart
