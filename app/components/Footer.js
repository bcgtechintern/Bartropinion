"use client";
import React from "react";
import { Mail, Instagram } from "lucide-react";

function Footer() {
    return (
        <footer className="text-white px-24 py-10 font-playfair mt-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 bg-[#1C1C1C] p-5 border rounded">
                {/* Contact Information */}
                <div className="space-y-2">
                    <h3 className="text-lg font-bold">Contact Information</h3>
                    <p>Phone: +91 9876543210</p>
                    <p>Tel: 0712 - 2765438</p>
                    <p>Email: <a href="mailto" className="underline">bartr_opinion@gmail.Com</a></p>
                    <p>Address: Nagpur/Pune/Mumbai </p>
                    <p>Visit Us On:</p>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-black hover:text-gray-700">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="mailto" className="text-black hover:text-gray-700">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="ml-0 space-y-2 md:ml-20">
                    <h3 className="text-lg font-bold">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Company Information */}
                <div className="space-y-2 mt-9 md:mt-0">
                    <h3 className="text-lg font-bold">Company Information</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-500 mt-5 pt-4 text-center text-sm">
                <p>©️ 2025 Bartr Opinion All Rights Reserved.</p>
                {/* <p>Designed & Developed By <span className="font-semibold">Akshay Padia</span></p> */}
            </div>
        </footer>
    );
}

export default Footer;