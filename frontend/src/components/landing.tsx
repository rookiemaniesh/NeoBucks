// import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"
import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Decorative curved lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Top left curved line */}
        <svg className="absolute top-16 left-0 w-64 h-64" viewBox="0 0 200 200" fill="none">
          <path d="M20 20 Q80 80 140 40 Q180 20 200 60" stroke="black" strokeWidth="2" fill="none" />
        </svg>

        {/* Right side curved lines */}
        <svg className="absolute top-32 right-0 w-80 h-96" viewBox="0 0 300 400" fill="none">
          <path
            d="M50 50 Q150 100 250 80 Q300 70 280 150 Q260 200 200 250 Q150 300 100 280 Q50 260 80 200"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="220" cy="320" r="30" stroke="black" strokeWidth="2" fill="none" />
          <circle cx="180" cy="360" r="20" stroke="black" strokeWidth="2" fill="none" />
        </svg>

        {/* Bottom left curved lines */}
        <svg className="absolute bottom-32 left-8 w-32 h-32" viewBox="0 0 100 100" fill="none">
          <path d="M10 80 Q30 60 50 80" stroke="black" strokeWidth="2" fill="none" />
          <path d="M20 90 Q40 70 60 90" stroke="black" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between  py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-black transition-colors">
            Home
          </Link>
          <Link to="https://github.com/rookiemaniesh/NeoBucks/blob/main/README.md" className="text-gray-600 hover:text-black transition-colors">
            About
          </Link>
          <div className="flex items-center gap-2">
            <Link to="https://github.com/rookiemaniesh/NeoBucks" className="text-gray-600 hover:text-black transition-colors">
              Source Code
            </Link>
            
          </div>
        </nav>
        <div className="flex items-center gap-4">

         <Button variant="outline" className="bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200 rounded-full">
          Sign In
        </Button>
        <Button variant="outline" className="border-blue-100 text-black bg-blue-200 hover:bg-blue-100 hover:text-blue-600 hover:border-blue-200 rounded-full">
          Sign Up
        </Button>
        </div>
      </header>
      <div className="w-full h-px bg-gray-300"></div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-black mb-8 leading-tight">
            <span className="tracking-tighter">Try mock</span>
            <span className="text-blue-500 tracking-tighter italic"> payments</span>
            <br />
            <span className="text-3xl md:text-7xl ">
            instantly now.
            </span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Fake money, real payment flow.
            <br />
            Test, learn, and play with NeoBucks.
          </p>

          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-5 text-lg rounded-full mb-16">
            Get Started
          </Button>
        </div>
      </main>

     
     
    </div>
  )
}
