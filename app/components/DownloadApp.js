"use client";
import React from "react";
import { useScrollVisibility } from "./useScrollVisibility";
import { useState, useEffect } from "react";

export default function DownloadApp() {
    const [isPastTrading, setIsPastTrading] = useState(false);
    const isTradingVisible = useScrollVisibility('trading-section');

    useEffect(() => {
        const handleScroll = () => {
            const tradingSection = document.getElementById('trading-section');
            if (!tradingSection) return;
    
            const { bottom } = tradingSection.getBoundingClientRect();
            setIsPastTrading(bottom <= window.innerHeight);
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); 
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const shouldShow = isTradingVisible || isPastTrading;
    return(
        <div className={`hidden lg:block fixed bottom-8 right-8 z-50 transition-all duration-300 ${ 
        shouldShow? 'opacity-100 translate-y-0':'opacity-0 translate-y-8 pointer-events-none'}`}>
                <div className="flex items-center gap-4 border-2 border-gray-700 rounded-xl p-4 hover:border-white transition-all duration-300 group cursor-pointer  backdrop-blur-sm">
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
    );
}