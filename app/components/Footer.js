"use client";
import React from "react";
import { Mail, Instagram } from "lucide-react";

function Footer() {
    return (
        <footer className="text-white px-4 md:px-16 py-6 font-playfair mt-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#1C1C1C] p-4 md:p-6 border rounded">
            {/* Contact Information */}
            <div className="space-y-2 text-center md:text-left">
                <h3 className="text-lg font-bold">Contact Information</h3>
                <p>Phone: +91 9876543210</p>
                <p>Tel: 0712 - 2765438</p>
                <p>Email: <a href="mailto" className="underline">bartr_opinion@gmail.com</a></p>
                <p>Address: Nagpur / Pune / Mumbai</p>
                <p>Visit Us On:</p>
                <div className="flex justify-center md:justify-start space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="mailto" className="text-gray-400 hover:text-white">
                        <Mail className="w-5 h-5" />
                    </a>

                </div>
            </div>
    
            {/* Quick Links */}
            <div className="text-center md:text-left">
                <h3 className="text-lg font-bold">Quick Links</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:underline">Contact Us</a></li>
                    <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                </ul>
            </div>
    
            {/* Company Information */}
            <div className="space-y-2 text-center md:text-left">
                <h3 className="text-lg font-bold">Company Information</h3>
                <p className="text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
            </div>
        </div>
    
        {/* Bottom Section */}
        <div className="border-t border-gray-500 mt-5 pt-2 text-center text-sm">
            <p>©️ 2025 Bartr Opinion All Rights Reserved.</p>
        </div>
    </footer>
    
    );
}

export default Footer;