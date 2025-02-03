// "use client";

// import React, { useState } from "react";
// import Link from "next/link";

// function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeSection, setActiveSection] = useState(null);

//     const handleClick = (sectionId) => {
//         setActiveSection(sectionId);
//         document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//         setIsOpen(false);  // Close the drawer when a menu item is clicked
//     };

//     const menuList = [
//         { name: "Home", sectionId: "hero-section" },
//         { name: "About-Bartr", sectionId: "bartr-section" },
//         { name: "About-BartrOpinion", sectionId: "bartropinion-section" },
//         { name: "Contact", sectionId: "contact-section" }
//     ];

//     const toggleDrawer = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav
//             className="relative sticky top-0 font-[var(--font-clashDisplay)] py-3 px-12 border-b flex items-center justify-between z-20 text-white"
//             style={{ backgroundImage: 'url(/assets/images/background.png)', backgroundSize: 'cover', backgroundPosition: 'center center' }}
//         >
//             {/* Desktop and Tablet Menu */}
//             <div className="flex items-center justify-between w-full">
//                 <h1 className="text-2xl font-semibold">BartrOpinion</h1>
//                 <div className="hidden lg:flex gap-6 items-center text-lg">
//                     {menuList.map((item, index) => (
//                         <button
//                             key={index}
//                             onClick={() => handleClick(item.sectionId)}
//                             className={`px-3 py-1 rounded-md transition ${activeSection === item.sectionId ? "bg-blue-500 text-white" : "hover:bg-gray-700"
//                                 }`}
//                         >
//                             {item.name}
//                         </button>
//                     ))}
//                 </div>
//                 <div className="hidden lg:flex items-center gap-4">
//                     <span className="text-sm">For 16 years and above only</span>
//                     <Link href="/download">
//                         <button className="bg-white text-black border px-4 py-1 rounded-md font-medium">
//                             Download App
//                         </button>
//                     </Link>
//                 </div>

//                 {/* Mobile and Tablet Menu Button */}
//                 <div className="lg:hidden">
//                     <button
//                         onClick={toggleDrawer}
//                         className="p-2 rounded-md text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                         <svg
//                             className="block h-6 w-6"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             aria-hidden="true"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile and Tablet Drawer */}
//             {isOpen && (
//                 <>
//                     {/* Background Overlay */}
//                     <div
//                         className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
//                         onClick={toggleDrawer}
//                     ></div>

//                     {/* Side Drawer */}
//                     <div
//                         className={`fixed inset-y-0 right-0 w-64 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-20`}
//                         style={{ backgroundImage: 'url(/assets/images/background.png)', backgroundSize: 'cover', backgroundPosition: 'center center' }}
//                     >
//                         <div className="px-6 pt-5 space-y-4">
//                             {menuList.map((item, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => handleClick(item.sectionId)}
//                                     className="block text-white py-2 rounded-md text-lg font-medium"
//                                 >
//                                     {item.name}
//                                 </button>
//                             ))}
//                             <div className="flex flex-col items-center justify-between pt-4 border-t border-gray-200">
//                                 <span className="text-sm text-gray-400">For 16 years and above only</span>
//                                 <Link href="/download">
//                                     <button className="bg-black border px-4 py-1 rounded-md font-medium">
//                                         Download App
//                                     </button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </nav>
//     );
// }

// export default Navbar;



"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const menuList = [
        { name: "Home", sectionId: "hero-section" },
        { name: "About-Bartr", sectionId: "bartr-section" },
        { name: "About-BartrOpinion", sectionId: "bartropinion-section" },
        { name: "Contact", sectionId: "contact-section" }
    ];

    const handleClick = (sectionId) => {
        setActiveSection(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);  // Close the drawer when a menu item is clicked
    };

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    // Intersection Observer to detect when a section is in view
    useEffect(() => {
        const options = {
            rootMargin: "-20% 0px -20% 0px", // Trigger earlier when sections are closer to 20% of the viewport
        };
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log(entry.target.id);  // Debugging line
                    setActiveSection(entry.target.id);
                }
            });
        }, options);
    
        // Observe each section
        menuList.forEach((item) => {
            const section = document.getElementById(item.sectionId);
            if (section) {
                observer.observe(section);
            }
        });
    
        return () => {
            // Cleanup the observer on unmount
            observer.disconnect();
        };
    }, []);
    

    return (
        <nav
            className="relative sticky top-0 font-[var(--font-clashDisplay)] py-3 px-12 border-b flex items-center justify-between z-20 text-white"
            style={{ backgroundImage: 'url(/assets/images/background.png)', backgroundSize: 'cover', backgroundPosition: 'center center' }}
        >
            {/* Desktop and Tablet Menu */}
            <div className="flex items-center justify-between w-full">
                <h1 className="text-2xl font-semibold">BartrOpinion</h1>
                <div className="hidden lg:flex gap-6 items-center text-lg">
                    {menuList.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(item.sectionId)}
                            className={`px-3 py-1 rounded-md transition ${activeSection === item.sectionId ? "bg-blue-500 text-white" : "hover:bg-gray-700"
                                }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
                <div className="hidden lg:flex items-center gap-4">
                    <span className="text-sm">For 16 years and above only</span>
                    <Link href="/download">
                        <button className="bg-white text-black border px-4 py-1 rounded-md font-medium">
                            Download App
                        </button>
                    </Link>
                </div>

                {/* Mobile and Tablet Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleDrawer}
                        className="p-2 rounded-md text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile and Tablet Drawer */}
            {isOpen && (
                <>
                    {/* Background Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
                        onClick={toggleDrawer}
                    ></div>

                    {/* Side Drawer */}
                    <div
                        className={`fixed inset-y-0 right-0 w-64 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-20`}
                        style={{ backgroundImage: 'url(/assets/images/background.png)', backgroundSize: 'cover', backgroundPosition: 'center center' }}
                    >
                        <div className="px-6 pt-5 space-y-4">
                            {menuList.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleClick(item.sectionId)}
                                    className="block text-white py-2 rounded-md text-lg font-medium"
                                >
                                    {item.name}
                                </button>
                            ))}
                            <div className="flex flex-col items-center justify-between pt-4 border-t border-gray-200">
                                <span className="text-sm text-gray-400">For 16 years and above only</span>
                                <Link href="/download">
                                    <button className="bg-black border px-4 py-1 rounded-md font-medium">
                                        Download App
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
}

export default Navbar;
