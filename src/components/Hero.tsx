"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";
import { SiGithub, SiLeetcode } from "react-icons/si";

interface HeroProps {
  dark: boolean;
}

function Hero({ dark }: HeroProps) {
  const [isWikiOpen, setIsWikiOpen] = useState(false);
  const wikiRef = useRef<HTMLDivElement>(null);

  // Close wiki preview on outside click
  useEffect(() => {
    if (!isWikiOpen) return;
    function handleClick(e: MouseEvent) {
      if (wikiRef.current && !wikiRef.current.contains(e.target as Node)) {
        setIsWikiOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isWikiOpen]);

  return (
    <div className={cn(
      "relative rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[380px] w-full mx-auto border",
      dark
        ? "text-card-foreground border-border"
        : "text-card-foreground border-border"
    )}>
      {/* Speech bubble animation above image */}
      <div className="absolute left-1/2 -top-6 sm:-top-8 -translate-x-1/2 z-20 animate-psyduck-bounce">
        <div
          className="relative group animate-psyduck-bounce"
          ref={wikiRef}
          onMouseEnter={() => setIsWikiOpen(true)}
        >
          <a
            href="https://en.wikipedia.org/wiki/Psyduck"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 dark:bg-black/80 text-sky-700 dark:text-sky-200 px-3 sm:px-5 py-1 sm:py-2 rounded-2xl shadow-lg border border-border text-xs sm:text-sm font-semibold flex items-center cursor-pointer relative select-none"
            tabIndex={0}
            title="Go to Psyduck Wikipedia page"
          >
            <span className="hidden sm:inline">Hello 👋, I&apos;m Psyduck 🦆, saif&apos;s friend 😀</span>
            <span className="sm:hidden">Hi 👋, Psyduck here! 🦆</span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/90 dark:bg-black/80 border-l border-b border-border rotate-45 z-0"></span>
          </a>
          {/* Wikipedia preview appears on hover, stays until click outside */}
          {isWikiOpen && (
            <div
              className="absolute left-1/2 top-12 sm:top-14 -translate-x-1/2 z-30 psyduck-speech border border-border rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-black transition-all duration-300"
              tabIndex={-1}
              onMouseEnter={() => setIsWikiOpen(true)}
            >
              <iframe
                src="https://en.wikipedia.org/wiki/Psyduck"
                title="Psyduck Wikipedia Preview"
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
          )}
        </div>
      </div>
      
      <img
        src="/psyduck.png"
        alt="Psyduck"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover object-center rounded-2xl mb-4 shadow-2xl relative"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
      />

      <style jsx global>{`
        @keyframes psyduck-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-psyduck-bounce {
          animation: psyduck-bounce 1.5s ease-in-out infinite;
        }
      `}</style>
      
      <div className="flex flex-col sm:flex-row w-full items-center justify-between mt-2 gap-4 sm:gap-0">
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center gap-2 sm:gap-3 mb-1">
            <span className="text-xl sm:text-2xl font-bold tracking-tight">f8</span>
            <button
              className={cn(
                "relative flex items-center px-2 sm:px-3 py-1 rounded-md border text-xs font-semibold transition focus:outline-none active:scale-95",
                "bg-white/70 dark:bg-black/30 cursor-pointer select-none shadow-md hover:shadow-lg backdrop-blur-sm",
                dark ? "text-green-400 border-green-400" : "text-green-600 border-green-400"
              )}
              type="button"
              tabIndex={0}
              aria-label="Available"
            >
              <span className="relative flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" style={{ boxShadow: '0 0 0 2px #22c55e44' }}></span>
                Available
              </span>
            </button>
          </div>
          <div className="text-sm sm:text-base text-muted-foreground font-mono mb-2 drop-shadow-sm text-center sm:text-left">d/dx f(8) = saif</div>
        </div>
        <div className="flex gap-2 items-center">
          {/* GitHub */}
          <a href="https://github.com/zzorgg" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border bg-card text-card-foreground hover:bg-muted transition" title="GitHub">
            <SiGithub className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          {/* LeetCode */}
          <a href="https://leetcode.com/u/f-8" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border bg-card text-card-foreground hover:bg-muted transition" title="LeetCode">
            <SiLeetcode className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;