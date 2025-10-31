export function AboutSection() {
  return (
    <section id="about" className="section bg-secondary">
      <div className="section-container">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get to know me better</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Bio */}
            <div className="space-y-6 bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h3 className="text-2xl font-bold text-foreground">Bio</h3>
              <p className="text-foreground/80 leading-relaxed">
                I'm presently pursuing my B.Tech in Computer Science Engineering at Vellore Institute of Technology,
                Chennai. I'm passionate about designing, coding, and programming. I'm also an accomplished Carnatic
                singer and enjoy participating in both technical and cultural activities.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I'm driven by curiosity for research and innovation, aiming to publish papers while also exploring
                real-world opportunities in the tech industry.
              </p>
            </div>

            {/* Education & Involvement */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
                <div>
                  <p className="font-semibold text-foreground">B.Tech Computer Science Engineering</p>
                  <p className="text-sm text-muted-foreground">Vellore Institute of Technology, Chennai</p>
                  <p className="text-sm text-primary font-medium mt-1">First-year undergraduate</p>
                </div>
              </div>

              <div className="bg-accent-mint/20 rounded-2xl p-8 shadow-sm border border-border space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Involvement</h3>
                <p className="text-foreground/80">
                  Active volunteer in technical and cultural programs, contributing to event organization and
                  coordination.
                </p>
              </div>
            </div>
          </div>

          {/* Resume Button */}
          <div className="flex justify-center">
            <a
              href="#"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
