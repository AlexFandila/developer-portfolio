import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "./scroll-reveal"

const experiences = [
  {
    title: "Backend JAVA Developer",
    company: "DISID",
    period: "Feb. 2024 - Actualidad · 1 año 7 meses",
    location: "Remoto",
    description:
      "Backend Developer con experiencia práctica en Spring Boot. Trabajando con arquitectura hexagonal y sistemas basados en microservicios.",
    technologies: [
      "Java",
      "Spring Boot", 
      "Spring Framework",
      "Microservicios",
      "MySQL",
      "MariaDB",
      "Git",
      "Jenkins",
      "Docker",
      "Liquibase",
      "Microsoft Azure"
    ],
  },
  {
    title: "Desarrollador Java",
    company: "NTT DATA",
    period: "Mar. 2022 - Feb. 2024 · 2 años",
    location: "Granada, España · Remoto",
    description:
      "Backend Developer y QA Engineer trabajando con el ecosistema Java y Spring Boot. Desarrollo y testing de arquitectura de microservicios implementando frameworks de testing automatizado.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Framework", 
      "Microservicios",
      "MySQL",
      "JDBC",
      "Selenium",
      "Cucumber",
      "JUnit",
      "JMeter",
      "Jenkins",
      "Git"
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Cívica Software",
    period: "Jun. 2019 - Jul. 2020 · 1 año 2 meses",
    location: "Granada, España",
    description:
      "Full Stack Developer especializado en frameworks Java y JavaScript. Desarrollo completo desde backend hasta aplicaciones móviles.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Framework",
      "JPA/Hibernate",
      "Angular",
      "AngularJS",
      "TypeScript",
      "Ionic",
      "MySQL",
      "Git"
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experiencia Profesional</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mi trayectoria profesional como desarrollador backend especializado en Java y Spring Boot
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 200}>
              <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="absolute left-0 top-0 w-1 h-full bg-primary transition-all group-hover:w-2" />
                <CardHeader className="pl-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground text-right">
                      <div>{exp.period}</div>
                      <div className="italic">{exp.location}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-8">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
