"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Hero() {
    const [text, setText] = useState("");
    const fullText = "Invest in Your Opinion and Earn Money";
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100); 

            return () => clearTimeout(timeout);
        }
    }, [currentIndex]); 

    const styleText = (text) => {
        const words = text.split(" ");
        return words.map((word, index) => {
            if (word === "Opinion" || word === "Money" || word === "Earn") {
                return <span key={index} className="text-blue-400">{word} </span>;
            }
            return <span key={index}>{word} </span>;
        });
    };

    return (
        <div className="text-white flex flex-row justify-start items-start gap-[15rem] text-left py-12 px-6 sm:px-12 ml-2 sm:ml-10">
            <div className="lg:pt-20">
                <h1 className="text-3xl sm:text-4xl md:text-6xl mt-4 w-full sm:w-[700px] mb-4 font-bold mb-6">
                    {styleText(text)}
                </h1>

                <p className="text-lg sm:text-3xl mb-8 text-gray-500">
                    Sports, Entertainment, Economy or Finance.
                </p>

                <div className="flex items-center gap-2 text-xl text-gray-400">
                    <input
                        type="checkbox"
                        id="age-check"
                        className="text-black" 
                    />
                    <label htmlFor="age-check">For 16 years and above only</label>
                </div>
                <div className="flex flex-col items-start gap-4"> 
                    <div className="flex gap-2">
                            
                    </div>
                    {/* Download app div  */}
                    <div className="flex items-center gap-4 border-2 border-gray-700 rounded-xl p-4 hover:border-white transition-all duration-300 group cursor-pointer ">
                        <div className="flex flex-col items-start gap-2">
                            <span className="text-gray-400 text-1xl uppercase tracking-wider group-hover:text-gray-300 transition-colors duration-300">
                            Download
                            </span>
                            <span className="text-2xl font-semibold text-white">
                            Our App
                            </span>
                        </div>
      
                        <div className="flex items-center gap-4">
                            <div className="border-l border-gray-700 pl-4 group-hover:border-gray-600 transition-colors duration-300">
                            <img 
                                src="/assets/images/qrcode.svg" 
                                alt="Download QR Code" 
                                className="w-24 h-24 bg-white transform group-hover:scale-105 transition-transform duration-300"
                            />
                            </div>
                        </div>
                    </div>
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