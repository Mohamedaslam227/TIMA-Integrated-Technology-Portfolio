"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  icon: JSX.Element;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ navItems, className }) => {
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide based on scroll position
      if (window.scrollY > 100) {
        setVisible(true);
      }

      // Update active section
      const sections = navItems.map(item => item.link);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className={cn(
            "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full shadow-2xl border border-gray-200 dark:border-gray-700",
            className
          )}
        >
          <div className="flex items-center justify-center px-8 py-4 gap-8">
            {navItems.map((item) => (
              <button
                key={item.link}
                onClick={() => scrollToSection(item.link)}
                className={`group flex flex-col items-center gap-1 transition-all duration-300 ${
                  activeSection === item.link
                    ? "text-blue-600 dark:text-blue-400 scale-110"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <span className="transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.name}</span>
                {activeSection === item.link && (
                  <motion.div
                    layoutId="activeSection"
                    className="h-1 w-full bg-blue-600 dark:bg-blue-400 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};