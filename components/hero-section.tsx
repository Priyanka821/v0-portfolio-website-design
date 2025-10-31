"use client"

import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="section section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">R. Priyanka</h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold">
              Aspiring Web Developer | Designer | Content Creator
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">Designing ideas into digital experiences.</p>
          </div>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right - Profile Image */}
        <div className="flex justify-center">
          <div
            className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center border-4 border-primary/20 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(var(--accent-pink-rgb), 0.3), rgba(var(--accent-lavender-rgb), 0.3), rgba(var(--accent-blue-rgb), 0.3))",
            }}
          >
            <img
              src="/professional-portrait-woman-computer-science-stude.jpg"
              alt="R. Priyanka - Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-12 animate-bounce">
        <a href="#about" className="text-primary hover:text-primary/80 transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  )
}
