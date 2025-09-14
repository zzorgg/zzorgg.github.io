"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { HiSun, HiMoon } from "react-icons/hi2";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

function PortfolioBento() {
  const [dark, setDark] = useState(false);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      const mins = minutes < 10 ? `0${minutes}` : minutes;
      setLocalTime(`${hours}:${mins} ${ampm}`);
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn(
      "min-h-screen w-full flex flex-col items-center justify-start transition-colors duration-300 relative",
      dark ? "dark bg-background text-foreground" : "bg-background text-foreground"
    )}>
      {/* Local time top left - sticky */}
      <div className="fixed top-0 left-0 z-50 m-6 text-xs sm:text-sm font-mono bg-card/80 px-3 py-1 rounded-md border border-border shadow">
        {localTime}
      </div>
      
      {/* Dark/Light toggle top right - sticky */}
      <button
        className="fixed top-0 right-0 z-50 m-6 px-3 py-2 rounded-lg border border-border bg-card text-card-foreground shadow hover:bg-muted transition flex items-center justify-center"
        onClick={() => setDark((d) => !d)}
        aria-label="Toggle dark mode"
      >
        {dark ? (
          <HiSun className="h-5 w-5" />
        ) : (
          <HiMoon className="h-5 w-5" />
        )}
      </button>
      
      {/* Main content stack, shifted down */}
      <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto p-6 mt-24">
        <Hero dark={dark} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Footer />
      </div>
    </div>
  );
}

export default PortfolioBento;
