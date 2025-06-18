"use client";

import { Menu, X, ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollTo = (section) => {
        // Get the ScrollSmoother instance that was created in App component
        const smoother = ScrollSmoother.get();
        
        if (smoother) {
            // Remove the '#' from the section if it exists
            const target = section.startsWith('#') ? section.slice(1) : section;
            smoother.scrollTo(`#${target}`, true, "top 100px"); // offset for fixed navbar
        } else {
            // Fallback to native smooth scroll if ScrollSmoother isn't available
            const element = document.querySelector(section);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        
        // Close mobile menu after clicking
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#F5F7FA] text-[#0A192F]">
            <div className="flex items-center justify-between px-4 py-4 max-w-6xl mx-auto">
                {/* Left: Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="inline-block">
                    {isOpen ? (
                        <span className="flex flex-row gap-3">
                            <X className="w-6 h-6 border-2 rounded-[5px]" /> 
                            <h4>Close</h4>
                        </span>
                    ) : (
                        <span className="flex flex-row gap-3">
                            <Menu className="w-6 h-6 border-2 rounded-[5px]" /> 
                            <h4>Menu</h4>
                        </span>
                    )}
                </button>

                {/* Center: Logo */}
                <h3 className="text-lg font-bold text-center flex-1 md:flex-none">
                    Arknight's
                </h3>

                <Button variant="outline" size="sm">
                    <h4>Let's Connect</h4> <ArrowRightIcon />
                </Button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="px-6 pb-4 bg-[#0A192F] backdrop-blur">
                    <ul className="space-y-2 text-[#F5F7FA]">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <button
                                    onClick={() => scrollTo(item.href)}
                                    className="block text-sm py-2 border-b border-white/20 w-full text-left"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}