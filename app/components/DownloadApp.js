"use client";
import React, { useState, useEffect } from "react";
import { useScrollVisibility } from "./useScrollVisibility";

export default function DownloadApp() {
    const [isPastTrading, setIsPastTrading] = useState(false);
    const [isPastFeatures, setIsPastFeatures] = useState(false);
    const [isPastFooter, setIsPastFooter] = useState(false);

    const isFeaturesVisible = useScrollVisibility('bartropinion-section');
    const isTradingVisible = useScrollVisibility('bartr-section');
    const isFooterVisible = useScrollVisibility('contact-section');

    useEffect(() => {
        const handleScroll = () => {
            const tradingSection = document.getElementById('bartr-section');
            const featuresSection = document.getElementById('bartropinion-section');
            const footerSection = document.getElementById('contact-section');

            // Check if trading section has scrolled past the viewport
            if (tradingSection) {
                const { bottom } = tradingSection.getBoundingClientRect();
                setIsPastTrading(bottom <= window.innerHeight);
            }

            // Check if features section has scrolled past the viewport
            if (featuresSection) {
                const { bottom } = featuresSection.getBoundingClientRect();
                setIsPastFeatures(bottom <= window.innerHeight);
            }

            // Check if footer section has scrolled past the viewport
            if (footerSection) {
                const { bottom } = footerSection.getBoundingClientRect();
                setIsPastFooter(bottom <= window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call to handle scroll

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Determine if any of the sections (trading, features, footer) should trigger visibility
    const shouldShow = isTradingVisible || isPastTrading || isFeaturesVisible || isPastFeatures || isFooterVisible || isPastFooter;

    return (
        <div className={`hidden lg:block fixed bottom-8 right-8 z-50 transition-all duration-300 ${
            shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
            <div className="flex items-center gap-4 border-2 border-gray-700 rounded-xl p-4 hover:border-white transition-all duration-300 group cursor-pointer backdrop-blur-sm">
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