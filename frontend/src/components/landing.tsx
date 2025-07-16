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
      <header className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-black text-sm">☀</span>
          </div>
          <span className="text-xl font-semibold text-black">Billi</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="#" className="text-gray-600 hover:text-black transition-colors">
            Features
          </Link>
          <Link to="#" className="text-gray-600 hover:text-black transition-colors">
            About
          </Link>
          <div className="flex items-center gap-2">
            <Link to="#" className="text-gray-600 hover:text-black transition-colors">
              {"We're Hiring"}
            </Link>
            <Badge className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">1</Badge>
          </div>
        </nav>

        <Button variant="outline" className="bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200">
          Get early access
        </Button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 leading-tight">
            be money
            <br />
            <span className="inline-flex items-center gap-2">
              m
              <span className="w-12 h-12 md:w-16 md:h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black text-2xl md:text-3xl">☺</span>
              </span>
              ndful
            </span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            A new, easy way to track bills, manage finances, and enjoy your money.
          </p>

          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg rounded-full mb-16">
            Join the waitlist
          </Button>
        </div>
      </main>

      {/* Bottom Section */}
      <div className="relative z-10 flex justify-center pb-8">
        <Button
          variant="outline"
          className="bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300 rounded-full px-6 py-2 flex items-center gap-2"
        >
          <Zap className="w-4 h-4" />
          Directory Info
        </Button>
      </div>
    </div>
  )
}
