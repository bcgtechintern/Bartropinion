import React from "react";
import Link from "next/link";

function Hero() {
    return (
        <div className="text-white flex flex-col justify-start items-start text-left py-12 px-6 sm:px-12 ml-2 sm:ml-10">
            <div>
                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 w-full sm:w-[700px] mb-4">
                    Invest in Your Opinion and Earn Money
                </h1>

                {/* Subheading */}
                <p className="text-lg sm:text-xl mb-8 text-gray-500">
                    Sports, Entertainment, Economy or Finance.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                    <Link href="/download">
                        <button className="bg-white text-black px-6 py-3 rounded-md font-medium transition-all hover:bg-gray-400 w-full sm:w-auto">
                            Download App
                        </button>
                    </Link>
                    <Link href="/trade">
                        <button className="bg-white text-black px-6 py-3 rounded-md font-medium transition-all hover:bg-gray-400 w-full sm:w-auto">
                            Trade Online
                        </button>
                    </Link>
                </div>

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
        </div>
    );
}

export default Hero;