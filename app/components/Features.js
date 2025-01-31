"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Features() {
    const features = [
        {
            title: "Bartr Cares",
            description: "Be it loss protection or data security, Bartr is user-first always. Check out the latest on responsible trading.",
        },
        {
            title: "Exiting trades is your choice",
            description: "The 'Exit' feature gives users the ability to exit a trade, helping them control losses and maximize profit.",
        },
        {
            title: "Market Orders and Instant Exit",
            description: "Market orders allow for fast and reliable trade execution. With market orders, quantities are matched instantly at the best available price.",
        },
        {
            title: "The Power of Prediction Markets",
            description: "Check out case studies, research articles, and the utility of Bartr events.",
        },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
            

            <div className="space-y-6 max-w-7xl mx-auto relative z-10 ">
                <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Discover the Future of Trading
                    </h1>
                    <p className="text-gray-300 text-lg mt-3">
                        Explore our latest features designed to elevate your trading experience.
                    </p>
                </motion.div>

                {/* Grid Layout */}
                <motion.div 
                    className="grid md:grid-cols-3  gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
                    }}
                >
                    {/* Main Feature Card */}
                    <motion.article 
                        whileHover={{ scale: 1.08, boxShadow: "0px 20px 40px rgba(0, 255, 255, 0.2)" }}
                        className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-96 flex flex-col justify-between transition-all duration-300 shadow-lg hover:border-blue-500/50"
                    >
                        <h2 className="text-3xl font-bold text-white">What's new in Bartr?</h2>
                        <motion.div 
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 1 }}
                        >
                            <Image src="/assets/images/arrow.png" alt="" width={32} height={32} />
                        </motion.div>
                    </motion.article>

                    {/* Feature Cards */}
                    {features.slice(0,2).map((feature, index) => (
                        <motion.article 
                            key={index}
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255,255,255,0.2)" }}
                            className="relative bg-[#1C1C1C] text-white p-8 h-96 flex flex-col justify-between rounded-3xl transform transition-all duration-300 shadow-lg hover:border-pink-500/50 border border-white/10"
                        >
                            <div>
                                <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                            <Link href="#" className="inline-flex items-center text-white hover:opacity-80 text-sm gap-2">
                                Read more
                                <motion.div 
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image src="/assets/images/arrow.png" alt="" width={24} height={24} />
                                </motion.div>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>
                <motion.div 
                    className="hidden lg:block lg:grid grid-cols-2 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
                    }}
                >

                    {/* Feature Cards */}
                    {features.slice(2,4).map((feature, index) => (
                        <motion.article 
                            key={index}
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255,255,255,0.2)" }}
                            className="relative bg-[#1C1C1C] text-white p-8 h-96 flex flex-col justify-between rounded-3xl transform transition-all duration-300 shadow-lg hover:border-pink-500/50 border border-white/10"
                        >
                            <div>
                                <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                            <Link href="#" className="inline-flex items-center text-white hover:opacity-80 text-sm gap-2">
                                Read more
                                <motion.div 
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image src="/assets/images/arrow.png" alt="" width={24} height={24} />
                                </motion.div>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}