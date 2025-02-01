"use client"

import { motion } from "framer-motion"
import { TradingChart } from "./trading-chart"

export default function Trading() {
  return (
    <section className="relative min-h-screen flex items-center justify-center   text-white px-6 py-20">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
        
        {/* Right Side: Enhanced Trading Chart */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TradingChart />
        </motion.div>
        {/* Left Side: Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            BCG - Bartr Catalyst Group
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            UPGRADE YOUR LIFE
            <span className="text-blue-400"> BIT BY BIT</span>
          </h1>

          <motion.p
            className="text-gray-300 text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            At BCG, we bridge ambition with reality, empowering businesses and entrepreneurs across India and the world.
            With a deep understanding of the dynamic business landscape, we deliver solutions that are tailored,
            impactful, and future-ready.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 text-sm text-gray-400 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>24/7 Trading</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>Real-time Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Expert Analysis</span>
            </div>
          </motion.div>
        </motion.div>

        
      </div>
    </section>
  )
}
