"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, Gamepad, Gamepad2, Handshake, LockKeyhole } from "lucide-react"

export default function Features() {
  const [flippedIndex, setFlippedIndex] = useState(null)

  const features = [
    {
      title: "Gamified Engagement",
      subtitle: "A dynamic platform where users participate in interactive challenges, leaderboards, and community-driven competitions to earn rewards and enhance skills.",
      icon: <Gamepad2 className="w-6 h-6 text-blue-400" />,
      description:
        "Premium members gain access to valuable analytics, reduced fees, and exclusive competitions. Additionally, brands and industry leaders can sponsor events, creating a unique space for users to interact with companies and expand their opportunities.",
    },
    {
      title: "Secure Ecosystem",
      subtitle: "A combination of AI-driven fraud prevention, verified profiles, and escrow security ensures a trustworthy environment for trading skills and predictions.",
      icon: <LockKeyhole className="w-6 h-6 text-green-400" />,
      description:
        " AI-powered fraud detection, risk assessment, and verified user profiles create a trusted environment for all participants.An escrow-based security system guarantees fair transactions, allowing users to exchange skills or place predictions with confidence.",
    },
    {
      title: "Skill Exchange",
      subtitle: "Skill exchange is a peer-to-peer platform where users can trade expertise without monetary transactions. It fosters a trusted community where professionals, freelancers, and learners can connect to exchange skills in a secure and verified environment.",
      icon: <Handshake className="w-6 h-6 text-red-400" />,
      description:
        "It fosters a trusted community where professionals, freelancers, and learners can connect to exchange skills in a secure and verified environment.The AI-powered matching system ensures users find the best skill-sharing opportunities based on their needs and expertise. An escrow-based transaction system further enhances security, ensuring both parties uphold their commitments.",
    },
    {
      title: "Future Vision",
      subtitle: "The next-gen platform will integrate blockchain for secure transactions, expand into global markets, and introduce AI-powered insights for better decision-making. By implementing blockchain-based transactions, users can experience an immutable and trustless system for opinion trading and skill exchange.",
      icon: <Eye className="w-6 h-6 text-yellow-400" />,
      description:
        "AI-driven analytics will further enhance user experience, providing detailed insights and predictions to help users make smarter, data-backed decisions. Additionally, global expansion will bring diverse opportunities and a more connected skill-sharing community.As the platform continues to evolve, it aims to become a global hub for talent, expertise, and knowledge sharing, empowering users to trade skills and opinions in the most innovative way possible.",
    },
  ]

  return (
    <section id="bartropinion-section" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="space-y-6 w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h1 className="md:text-5xl text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Bartr Opinion
          </h1>
          <p className="text-gray-300 text-xl mt-3">
            Bartr Opinion– Where Opinions Turn into Opportunities!
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.article
            whileHover={{ scale: 1.08, boxShadow: "0px 20px 40px rgba(0, 255, 255, 0.2)" }}
            className="relative bg-white/10 w-full backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-96 flex flex-col justify-between transition-all duration-300 shadow-lg hover:border-blue-500/50 cursor-pointer"
          // onClick={() => window.open("https://bartr.in", "_blank")}
          >
            <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">What's Bartr Opinion?</h2>
            <p className="text-gray-300 text-xl md:text-3xl lg:text-xl">
              Opinion trading allows users to predict outcomes in various fields like sports, politics, stocks, and crypto. Participants earn rewards for accurate predictions while competing in a secure, engaging environment.
            </p>
            <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 1 }}>
              <Image src="/assets/images/arrow.png" alt="" width={32} height={32} />
            </motion.div>
          </motion.article>

          {features.slice(0, 2).map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08, boxShadow: "0px 10px 20px rgba(0, 255, 255, 0.2)",
                borderRadius: "20px"
              }}
              className="relative h-96 [perspective:1000px]"
            >
              <motion.div
                className="w-full h-full relative transition-all duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedIndex === index ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                <motion.article className="absolute w-full lg:w-full h-full backface-hidden bg-[#1C1C1C] text-white p-8 flex flex-col justify-between rounded-3xl transform transition-all duration-300 shadow-lg hover:border-pink-500/50 border border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      {feature.icon}
                      <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        {feature.title}
                      </h2>

                    </div>
                    <p className="leading-relaxed text-gray-300 text-xl md:text-3xl lg:text-xl mt-3">{feature.subtitle}</p>
                  </div>
                  <button
                    onClick={() => setFlippedIndex(index)}
                    className="inline-flex items-center text-white hover:opacity-80 text-sm md:text-2xl lg:text-sm gap-2"
                  >
                    Read more
                    <Image src="/assets/images/arrow.png" alt="" width={24} height={24} />
                  </button>
                </motion.article>

                <motion.article className="absolute w-full h-full backface-hidden bg-[#1C1C1C] text-white p-8 flex flex-col justify-between rounded-3xl transform transition-all duration-300 shadow-lg hover:border-pink-500/50 border border-white/10 [transform:rotateY(180deg)]">
                  <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent pr-4">
                    <p className="leading-relaxed  text-gray-300 text-lg md:text-3xl lg:text-lg">{feature.description}</p>
                  </div>
                  <button
                    onClick={() => setFlippedIndex(null)}
                    className="inline-flex items-center text-white hover:opacity-80 text-sm md:text-2xl lg:text-sm gap-2 mt-4"
                  >
                    Back
                    <Image src="/assets/images/arrow.png" alt="" width={24} height={24} className="rotate-180" />
                  </button>
                </motion.article>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="hidden lg:grid grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* , boxShadow: "0px 20px 40px rgba(0, 255, 255, 0.2)" */}
          {features.slice(2, 4).map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08, boxShadow: "0px 10px 20px rgba(0, 255, 255, 0.2)",
                borderRadius: "20px"
              }}
              className="relative h-96 [perspective:1000px]"
            >
              <motion.div
                className="w-full h-full relative transition-all duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedIndex === index + 2 ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                <motion.article className="absolute w-full h-full backface-hidden bg-[#1C1C1C] text-white p-8 flex flex-col justify-between rounded-3xl transform transition-all duration-300 shadow-lg hover:border-pink-500/50 border border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      {feature.icon}
                      <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        {feature.title}
                      </h2>
                    </div>
                    <p className="leading-relaxed text-gray-300 text-xl mt-3">{feature.subtitle}</p>
                  </div>
                  <button
                    onClick={() => setFlippedIndex(index + 2)}
                    className="inline-flex items-center text-white hover:opacity-80 text-sm gap-2"
                  >
                    Read more
                    <Image src="/assets/images/arrow.png" alt="" width={24} height={24} />
                  </button>
                </motion.article>

                <motion.article className="absolute w-full h-full backface-hidden bg-[#1C1C1C] text-white p-8 flex flex-col justify-between rounded-3xl transform transition-all duration-300 shadow-lg hover:border-pink-500/50 border border-white/10 [transform:rotateY(180deg)]">
                  <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent pr-4">
                    <p className="leading-relaxed  text-gray-300 text-lg">{feature.description}</p>
                  </div>
                  <button
                    onClick={() => setFlippedIndex(null)}
                    className="inline-flex items-center text-white hover:opacity-80 text-sm gap-2 mt-4"
                  >
                    Back
                    <Image src="/assets/images/arrow.png" alt="" width={24} height={24} className="rotate-180" />
                  </button>
                </motion.article>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}









// "use client"

// import Image from "next/image"
// import { useState } from "react"
// import { motion } from "framer-motion"

// export default function Features() {
//   const [flippedIndex, setFlippedIndex] = useState(null)

//   const features = [
//     {
//       title: "Lorem ipsum",
//       subtitle: "Be it loss Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       description:
//         "Be it loss Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. or data security, Bartr is user-first always. Check out the latest on responsible trading.",
//     },
//     {
//       title: "Lorem ipsum",
//       subtitle: "Be it loss Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 'Exit' feature gives users the ability to exit a trade, helping them control losses and maximize profit.",
//     },
//     {
//       title: "Lorem ipsum",
//       subtitle: "Be it loss Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. orders allow for fast and reliable trade execution. With market orders, quantities are matched instantly at the best available price.",
//     },
//     {
//       title: "Lorem ipsum",
//       subtitle: "Be it loss Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       description:
//         "Check Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. case studies, research articles, and the utility of Bartr events.",
//     },
//   ]

//   return (
//     <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
//       <div className="space-y-6 max-w-7xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
//             What is Bartr?
//           </h1>
//           <p className="text-gray-300 text-lg mt-3">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//             dolore magna aliqua.
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid md:grid-cols-3 gap-8"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0, y: 50 },
//             visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
//           }}
//         >
//           <motion.article
//             whileHover={{ scale: 1.08, boxShadow: "0px 20px 40px rgba(0, 255, 255, 0.2)" }}
//             className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-96 flex flex-col justify-between transition-all duration-300 shadow-lg hover:border-blue-500/50"
//           >
//             <h2 className="text-3xl font-bold text-white">What's Bartr?</h2>
//             <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 1 }}>
//               <Image src="/assets/images/arrow.png" alt="" width={32} height={32} />
//             </motion.div>
//           </motion.article>

//           {features.slice(0, 2).map((feature, index) => (
//             <div key={index} 
//             whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255,255,255,0.2)" }}
//             className="relative h-96 [perspective:1000px]">
//               <motion.div
//                 className="w-full h-full relative transition-all duration-500"
//                 style={{
//                   transformStyle: "preserve-3d",
//                   transform: flippedIndex === index ? "rotateY(180deg)" : "rotateY(0deg)",
//                 }}
//               >
//                 <motion.article className="absolute w-full h-full backface-hidden bg-[#1C1C1C] text-white p-8 flex flex-col justify-between rounded-3xl transform transition-all duration-300 shadow-lg hover:border-pink-500/50 border border-white/10">
//                   <div>
//                     <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
//                     <p className="text-gray-400 text-sm leading-relaxed">{feature.subtitle}</p>
//                   </div>
//                   <button
//                     onClick={() => setFlippedIndex(index)}
//                     className="inline-flex items-center text-white hover:opacity-80 text-sm gap-2"
//                   >
//                     Read more
//                     <Image src="/assets/images/arrow.png" alt="" width={24} height={24} />
//                   </button>
//                 </motion.article>

//                 <motion.article className="absolute w-full h-full backface-hidden bg-[#1C1C1C] text-white p-8 flex flex-col justify-between rounded-3xl transform transition-all duration-300 shadow-lg hover:border-pink-500/50 border border-white/10 [transform:rotateY(180deg)]">
//                   <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent pr-4">
//                     <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
//                   </div>
//                   <button
//                     onClick={() => setFlippedIndex(null)}
//                     className="inline-flex items-center text-white hover:opacity-80 text-sm gap-2 mt-4"
//                   >
//                     Back
//                     <Image src="/assets/images/arrow.png" alt="" width={24} height={24} className="rotate-180" />
//                   </button>
//                 </motion.article>
//               </motion.div>
//             </div>
//           ))}
//         </motion.div>

//         <motion.div
//           className="hidden lg:grid grid-cols-2 gap-8"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0, y: 50 },
//             visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
//           }}
//         >
//           {features.slice(2, 4).map((feature, index) => (
//             <div key={index} className="relative h-96 [perspective:1000px]">
//               <motion.div
//                 className="w-full h-full relative transition-all duration-500"
//                 style={{
//                   transformStyle: "preserve-3d",
//                   transform: flippedIndex === index + 2 ? "rotateY(180deg)" : "rotateY(0deg)",
//                 }}
//               >
//                 <motion.article className="absolute w-full h-full backface-hidden bg-[#1C1C1C] text-white p-8 flex flex-col justify-between rounded-3xl transform transition-all duration-300 shadow-lg hover:border-pink-500/50 border border-white/10">
//                   <div>
//                     <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
//                     <p className="text-gray-400 text-sm leading-relaxed">{feature.subtitle}</p>
//                   </div>
//                   <button
//                     onClick={() => setFlippedIndex(index + 2)}
//                     className="inline-flex items-center text-white hover:opacity-80 text-sm gap-2"
//                   >
//                     Read more
//                     <Image src="/assets/images/arrow.png" alt="" width={24} height={24} />
//                   </button>
//                 </motion.article>

//                 <motion.article className="absolute w-full h-full backface-hidden bg-[#1C1C1C] text-white p-8 flex flex-col justify-between rounded-3xl transform transition-all duration-300 shadow-lg hover:border-pink-500/50 border border-white/10 [transform:rotateY(180deg)]">
//                   <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent pr-4">
//                     <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
//                   </div>
//                   <button
//                     onClick={() => setFlippedIndex(null)}
//                     className="inline-flex items-center text-white hover:opacity-80 text-sm gap-2 mt-4"
//                   >
//                     Back
//                     <Image src="/assets/images/arrow.png" alt="" width={24} height={24} className="rotate-180" />
//                   </button>
//                 </motion.article>
//               </motion.div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

