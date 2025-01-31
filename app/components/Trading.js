"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TradingCard = ({ card }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" }}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-lg transition-all duration-300"
        >

            {/* Trading Image */}
            <div className="flex justify-center mb-4">
                <Image 
                    src={card.image}
                    alt="Trading icon"
                    width={64}
                    height={64}
                    className="rounded-xl shadow-md"
                />
            </div>

            {/* Traders Count */}
            <span className="text-gray-300 text-sm font-medium tracking-wide block mb-2">
                {card.traders} traders
            </span>

            {/* Question */}
            <p className="text-white font-semibold text-lg leading-snug mb-4">
                {card.question}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3">
                <motion.button 
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.7)" }}
                    className="flex-1 bg-blue-500 text-white py-3 px-5 rounded-xl hover:bg-blue-600 transition-all duration-300"
                >
                    Yes ₹{card.yesPrice}
                </motion.button>

                <motion.button 
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(220, 38, 38, 0.7)" }}
                    className="flex-1 bg-red-500 text-white py-3 px-5 rounded-xl hover:bg-red-600 transition-all duration-300"
                >
                    No ₹{card.noPrice}
                </motion.button>
            </div>
        </motion.div>
    );
};

export default function Trading() {
    const tradingCards = [
        {
            image: "/assets/images/book.avif",
            traders: 49,
            question: "India and the EU to sign a Free Trade Agreement (FTA) by end of March?",
            yesPrice: 0.3,
            noPrice: 0.7,
        },
        {
            image: "/assets/images/shirt1.avif",
            traders: 869,
            question: "Arshdeep Singh to be the highest wicket taker in the 2025 T20I series between India and England?",
            yesPrice: 0.25,
            noPrice: 0.75,
        },
        {
            image: "/assets/images/book.avif",
            traders: 33,
            question: "Rules for Four Labour Codes to be notified and implemented by the Central government by end of June?",
            yesPrice: 0.15,
            noPrice: 0.85,
        },
        {
            image: "/assets/images/shirt1.avif",
            traders: 623,
            question: "Jos Buttler to be the highest run scorer in the 2025 T20I series between India and England?",
            yesPrice: 0.35,
            noPrice: 0.65,
        },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center text-white px-6 py-20">
            {/* Floating Background Elements */}
           
            

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
                {/* Left Side: Heading */}
                <motion.div 
                    className="lg:w-1/3 text-center lg:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                        Trade when you like,<br/>on what you like.
                    </h1>
                    <p className="mt-4 text-gray-300 text-lg">
                        Get instant insights and trade with confidence on the most trending topics.
                    </p>
                </motion.div>

                {/* Right Side: Cards Grid */}
                <motion.div 
                    className="lg:w-2/3 grid sm:grid-cols-1 md:grid-cols-2 gap-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {tradingCards.map((card, index) => (
                        <TradingCard key={index} card={card} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}