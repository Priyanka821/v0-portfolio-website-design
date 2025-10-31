const projectsData = [
  {
    title: "Book Store Management System",
    description: "Developed using Python and SQL to efficiently manage book inventory and transactions.",
    technologies: ["Python", "SQL", "Database Design"],
    gradient: "linear-gradient(135deg, var(--accent-pink), var(--accent-lavender))",
  },
  {
    title: "Biodegradable Food Packaging Film",
    description:
      "An interdisciplinary project combining technology and biotechnology to create sustainable packaging solutions.",
    technologies: ["Research", "Biotechnology", "Sustainability"],
    gradient: "linear-gradient(135deg, var(--accent-lavender), var(--accent-blue))",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="section bg-secondary">
      <div className="section-container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Showcasing my work across different domains</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.title}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:scale-105 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg mb-6" style={{ background: project.gradient }}></div>

              <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
