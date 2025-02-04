"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TradingChart = () => {
  const [data, setData] = useState([10]);
  const maxValue = 3700;

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const lastValue = prev[prev.length - 1];
        if (lastValue >= maxValue) return prev;

        const newValue = Math.min(lastValue + Math.random() * 350, maxValue);
        return [...prev, newValue];
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const pathD = data.reduce((path, point, i) => {
    const x = (i / (data.length - 1)) * 500;
    const y = 300 - ((point - 1000) / (5000 - 1000)) * 200;
    return path + `${i === 0 ? "M" : "L"} ${x},${y}`;
  }, "");

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-3xl bg-black/20 backdrop-blur-sm border border-white/10 p-4 md:p-6">
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-3 sm:p-4 flex-1 text-center"
        >
          <div className="text-xs sm:text-sm text-blue-400">Current Registered Members</div>
          <div className="text-lg sm:text-2xl font-bold text-white">{data[data.length - 1]?.toFixed(0)}</div>
        </motion.div>
      </div>

      <svg viewBox="0 0 500 300" className="w-full h-full">
        {[1000, 2000, 3000, 4000, 5000].map((value, i) => (
          <text key={i} x="0" y={(5 - i) * 50} fill="white" fontSize="10">{value}</text>
        ))}
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Live Trading
      </motion.div>
    </div>
  );
};






// "use client"

// import { motion } from "framer-motion"
// import { useEffect, useState } from "react"

// export const TradingChart = () => {
//   const [data, setData] = useState([])

//   // Generate live-updating data
//   useEffect(() => {
//     const baseValue = 100
//     setData(Array.from({ length: 50 }, () => baseValue))

//     const interval = setInterval(() => {
//       setData((prev) => {
//         const newData = [...prev]
//         newData.shift()
//         newData.push(prev[prev.length - 1] + (Math.random() - 0.5) * 10)
//         return newData
//       })
//     }, 100)

//     return () => clearInterval(interval)
//   }, [])

//   // Create SVG path from data
//   const pathD = data.reduce((path, point, i) => {
//     const x = (i / (data.length - 1)) * 500
//     const y = 300 - ((point - Math.min(...data)) / (Math.max(...data) - Math.min(...data))) * 200
//     return path + `${i === 0 ? "M" : "L"} ${x},${y}`
//   }, "")

//   return (
//     <div className="relative w-full h-[500px] overflow-hidden rounded-3xl bg-black/20 backdrop-blur-sm border border-white/10">
//       {/* Price Cards */}
//       <div className="absolute top-6 left-6 right-6 flex justify-between gap-4 z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white/5 backdrop-blur-md rounded-2xl p-4 flex-1"
//         >
//           <div className="text-sm text-blue-400">Current Price</div>
//           <div className="text-2xl font-bold text-white">₹{data[data.length - 1]?.toFixed(2)}</div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="bg-white/5 backdrop-blur-md rounded-2xl p-4 flex-1"
//         >
//           <div className="text-sm text-green-400">24h High</div>
//           <div className="text-2xl font-bold text-white">₹{Math.max(...data).toFixed(2)}</div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="bg-white/5 backdrop-blur-md rounded-2xl p-4 flex-1"
//         >
//           <div className="text-sm text-red-400">24h Low</div>
//           <div className="text-2xl font-bold text-white">₹{Math.min(...data).toFixed(2)}</div>
//         </motion.div>
//       </div>

//       {/* Main Chart */}
//       <svg viewBox="0 0 500 300" className="w-full h-full">
//         {/* Grid lines */}
//         {Array.from({ length: 6 }).map((_, i) => (
//           <motion.line
//             key={`grid-${i}`}
//             x1="0"
//             y1={i * 50}
//             x2="500"
//             y2={i * 50}
//             stroke="rgba(255,255,255,0.1)"
//             strokeWidth="1"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: i * 0.1 }}
//           />
//         ))}

//         {/* Animated chart line */}
//         <motion.path
//           d={pathD}
//           fill="none"
//           stroke="url(#gradient)"
//           strokeWidth="3"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 1 }}
//         />

//         {/* Area under the line */}
//         <motion.path
//           d={`${pathD} L 500,300 L 0,300 Z`}
//           fill="url(#areaGradient)"
//           opacity="0.2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.2 }}
//         />

//         {/* Gradients */}
//         <defs>
//           <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor="#60A5FA" />
//             <stop offset="100%" stopColor="#3B82F6" />
//           </linearGradient>
//           <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor="#3B82F6" />
//             <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
//           </linearGradient>
//         </defs>
//       </svg>

//       {/* Live Indicators */}
//       <motion.div
//         className="absolute bottom-6 right-6 flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-sm font-medium"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//       >
//         <span className="relative flex h-2 w-2">
//           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//           <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//         </span>
//         Live Trading
//       </motion.div>
//     </div>
//   )
// }