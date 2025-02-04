"use client";
import React, { useState } from "react";
import { Mail, Instagram, Linkedin, Twitter } from "lucide-react";

function Footer() {
    const [activeSection, setActiveSection] = useState(null);
    
        const handleClick = (sectionId) => {
            setActiveSection(sectionId);
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });  
        };
    return (
        <footer id="contact-section" className="text-white px-4 md:px-16 py-6 font-playfair mt-10">
            <div
    className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8 border rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black"
    style={{
        backgroundImage: 'url(/assets/images/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'right center', 
    }}
>

                {/* Contact Information */}
                <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-blue-400">Contact Information</h3>
                    {/* <p className="text-lg font font-bold">Email: <a href="mailto:bartr_opinion@gmail.com" className="underline text-blue-400 hover:text-white">bartr_opinion@gmail.com</a></p> */}
                    <p className="text-lg font-bold">Location: Malaysia / Pune / Mumbai</p>
                    <p className="text-lg font-bold">Visit Us On:</p>
                    <div className="flex justify-center md:justify-start space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <Instagram className="w-8 h-8 transition-all transform hover:scale-110" />
                        </a>
                        <a href="mailto:bartr_opinion@gmail.com" className="text-gray-400 hover:text-white">
                            <Mail className="w-8 h-8 transition-all transform hover:scale-110" />
                        </a>
                        <a href="mailto:bartr_opinion@gmail.com" className="text-gray-400 hover:text-white">
                            <Linkedin className="w-8 h-8 transition-all transform hover:scale-110" />
                        </a>
                        {/* <a href="mailto:bartr_opinion@gmail.com" className="text-gray-400 hover:text-white">
                            <Twitter className="w-8 h-8 transition-all transform hover:scale-110" />
                        </a> */}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-blue-400">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-lg hover:underline hover:text-blue-400" onClick={() => handleClick("hero-section")}>Home</a></li>
                        <li><a href="#" className="text-lg hover:underline hover:text-blue-400" onClick={() => handleClick("bartr-section" )}> About Bartr</a></li>
                        <li><a href="#" className="text-lg hover:underline hover:text-blue-400" onClick={() => handleClick("bartropinion-section")}>About BartrOpinion</a></li>
                    </ul>
                </div>

                {/* Company Information */}
                <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-2xl  text-blue-400">Company Information</h3>
                    <p className="text-lg md:text-base">
                    Bartr is a platform that allows users to predict events, trade expertise, and earn rewards, removing financial barriers for professionals, freelancers, and enthusiasts to connect and collaborate. It aims to disrupt the gig economy and prediction markets with secure, scalable technology.
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-500 mt-5 pt-2 text-center text-sm text-gray-300">
                <p>© 2025 Bartr Opinion All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
