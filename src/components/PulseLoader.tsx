import "./PulseLoader.css";

const PulseLoader = () => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center h-screen">

            <h2 className="font-bold text-lg text-[#333]">Loading</h2>

            <div className="flex gap-1">
                <div className="w-7 h-7 bg-[#333] rounded-full mx-1 pulse-scale"></div>
                <div className="w-7 h-7 bg-[#333] rounded-full mx-1 pulse-scale" style={{ animationDelay: "-0.2s" }}></div>
                <div className="w-7 h-7 bg-[#333] rounded-full mx-1 pulse-scale" style={{ animationDelay: "-0.4s" }}></div>
            </div>
        </div>
    );
};

export default PulseLoader;
