import React, { useEffect, useState } from "react";

const tokens = [
  {
    name: "ETH",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#627EEA"/><polygon points="16,6 24,16 16,22 8,16" fill="#fff"/></svg>
    ),
  },
  {
    name: "USDC",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#2775CA"/><text x="16" y="21" textAnchor="middle" fontSize="16" fill="#fff" fontFamily="sans-serif">$</text></svg>
    ),
  },
  {
    name: "OP",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#FF0420"/><text x="16" y="21" textAnchor="middle" fontSize="16" fill="#fff" fontFamily="sans-serif">OP</text></svg>
    ),
  },
];

const headingWords = ["Make", "your", "money", "move."];

export default function HeroSection() {
  const [showWords, setShowWords] = useState([false, false, false, false]);
  const [showTokens, setShowTokens] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  // Animation sequencing
  useEffect(() => {
    headingWords.forEach((_, i) => {
      setTimeout(() => {
        setShowWords((prev) => prev.map((v, idx) => (idx === i ? true : v)));
      }, i * 180);
    });
    setTimeout(() => setShowTokens(true), 800);
    setTimeout(() => setShowPhone(true), 1200);
    setTimeout(() => setShowCTA(true), 1700);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Left: Heading, subheading, CTA */}
      <div className="flex-1 flex flex-col items-start md:items-start justify-center px-6 md:px-20 z-10 pt-20 md:pt-0">
        <div className="text-4xl md:text-6xl font-extrabold font-sans text-gray-900 leading-tight mb-2">
          {headingWords.map((word, i) => (
            <span
              key={word}
              className={`inline-block mr-2 transition-all duration-500 ease-out transform ${showWords[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {word}
            </span>
          ))}
        </div>
        <div className={`text-lg md:text-2xl text-gray-500 mt-2 mb-6 transition-opacity duration-700 ${showWords.every(Boolean) ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        >
          The next-gen platform for moving, saving, and growing your digital assets.
        </div>
        {/* Token burst */}
        <div className="flex gap-4 mt-2 mb-8 h-10 relative">
          {tokens.map((token, i) => (
            <span
              key={token.name}
              className={`transition-all duration-400 ease-out inline-block ${showTokens ? 'scale-100 opacity-80' : 'scale-0 opacity-0'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {token.svg}
            </span>
          ))}
        </div>
        <button
          className={`mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 text-white font-bold text-lg shadow-lg transition-all duration-500 ${showCTA ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          style={{ transitionDelay: '200ms' }}
        >
          Join our waitlist
        </button>
      </div>
      {/* Right: Phone mockup and floating tokens */}
      <div className="flex-1 flex items-center justify-center relative w-full md:w-auto min-h-[320px] md:min-h-0">
        <div className={`relative transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${showPhone ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Phone SVG */}
          <svg width="180" height="360" viewBox="0 0 180 360" fill="none" className="mx-auto drop-shadow-xl">
            <rect x="10" y="10" width="160" height="340" rx="32" fill="#fff" stroke="#222" strokeWidth="4"/>
            <circle cx="90" cy="330" r="8" fill="#eee"/>
            <rect x="40" y="40" width="100" height="220" rx="16" fill="#f5f5f5"/>
          </svg>
          {/* Floating background tokens */}
          <div className="absolute left-0 right-0 bottom-0 top-0 pointer-events-none z-0">
            {tokens.map((token, i) => (
              <span
                key={token.name+"bg"}
                className={`absolute transition-all duration-[6000ms] ease-in-out opacity-15 blur-sm`}
                style={{
                  left: `${40 + i * 30}px`,
                  top: `${220 + i * 18}px`,
                  transform: `scale(${0.9 + 0.1 * i}) translateY(${showPhone ? (i % 2 === 0 ? '-8px' : '8px') : '0px'})`,
                  transitionDelay: `${i * 400}ms`,
                }}
              >
                {token.svg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 