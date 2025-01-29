"use client"

import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuList = [
        { name: "Trading", link: "/trading" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
        { name: "Careers", link: "/careers" }
    ];

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="font-[var(--font-clashDisplay)] py-3 px-12 border-b flex items-center justify-between bg-gray-50">
            {/* Desktop Menu */}
            <div className="flex items-center justify-between w-full">
                <h1 className="text-2xl font-semibold text-gray-900">BartrOpinion</h1>
                <div className="hidden md:flex gap-6 items-center text-gray-800 text-lg">
                    {menuList.map((item, index) => (
                        <Link key={index} href={item.link} className="hover:underline">
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <span className="text-sm text-gray-600">For 18 years and above only</span>
                    <Link href="/download">
                        <button className="bg-black border px-4 py-1 rounded-md font-medium">
                            Download App
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleDrawer}
                        className="p-2 rounded-md text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="md:hidden">
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                        onClick={toggleDrawer}
                    ></div>
                    <div
                        className={`fixed inset-y-0 right-0 w-64 bg-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        <div className="px-6 pt-5 space-y-4">
                            {menuList.map((item, index) => (
                                <Link key={index} href={item.link} onClick={toggleDrawer} className="block text-black hover:text-black py-2 rounded-md text-lg font-medium">
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex flex-col items-center justify-between pt-4 border-t border-gray-200">
                                <span className="text-sm text-gray-600">For 18 years and above only</span>
                                <Link href="/download">
                                    <button className="bg-black border px-4 py-1 rounded-md font-medium">
                                        Download App
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;