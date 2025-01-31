import React from "react";
import Link from "next/link";

function Hero() {
    return (
        <div className="text-white flex flex-row justify-start items-start gap-[15rem] text-left py-12 px-6 sm:px-12 ml-2 sm:ml-10">
            <div>
                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 w-full sm:w-[700px] mb-4">
                    Invest in Your Opinion and Earn Money
                </h1>

                {/* Subheading */}
                <p className="text-lg sm:text-xl mb-8 text-gray-500">
                    Sports, Entertainment, Economy or Finance.
                </p>

                {/* Disclaimer */}
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <input
                        type="checkbox"
                        id="age-check"
                        className="text-black"
                    />
                    <label htmlFor="age-check">For 18 years and above only</label>
                </div>
            </div> 
            <div className="hidden lg:block flex justify-center items-center"> 
                <div className="relative w-[320px] h-[640px] bg-white rounded-[40px] shadow-xl border border-gray-300 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-lg"></div>  

                    <video 
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop 
                        playsInline
                    > 
                        <source src="/assets/videos/testing.mp4" type="video/mp4" /> 
                    </video> 
                </div>
            </div>
        </div>
    );
}

export default Hero;