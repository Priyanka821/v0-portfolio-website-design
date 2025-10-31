const skillsData = [
  {
    category: "Technical Skills",
    gradient: "linear-gradient(135deg, var(--accent-pink), var(--accent-lavender))",
    skills: ["Python", "SQL", "Web Design", "Canva", "Video Editing"],
  },
  {
    category: "Soft Skills",
    gradient: "linear-gradient(135deg, var(--accent-lavender), var(--accent-blue))",
    skills: ["Teamwork", "Leadership", "Communication", "Public Speaking"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="section section-container">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A blend of technical prowess and creative capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="p-8 rounded-2xl shadow-sm text-white space-y-6"
              style={{ background: skillGroup.gradient }}
            >
              <h3 className="text-2xl font-bold">{skillGroup.category}</h3>
              <div className="space-y-3">
                {skillGroup.skills.map((skill) => (
                  <div key={skill} className="space-y-2">
                    <p className="font-medium text-white/90">{skill}</p>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
