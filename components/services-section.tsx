const servicesData = [
  {
    title: "Web Design",
    description: "Custom, responsive, and modern website designs tailored to your unique needs and vision.",
    icon: "🎨",
    gradient: "linear-gradient(135deg, var(--accent-pink), var(--accent-lavender))",
  },
  {
    title: "Content Creation",
    description: "High-quality written, visual, and promotional content to enhance your digital presence.",
    icon: "✨",
    gradient: "linear-gradient(135deg, var(--accent-lavender), var(--accent-blue))",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="section section-container">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">How I can help bring your ideas to life</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl p-8 shadow-sm text-white space-y-4 hover:shadow-lg transition-all"
              style={{ background: service.gradient }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-white/90 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  )
}
