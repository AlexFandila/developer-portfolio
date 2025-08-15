"use client"  // ← Agregar esta línea al inicio

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "./scroll-reveal"
import { ExternalLink, Github, Code, Wrench, Clock } from "lucide-react"

const projects = [
  {
    title: "Portfolio Personal",
    description: "Este mismo portfolio desarrollado con Next.js 14, TypeScript y Tailwind CSS. Incluye animaciones, diseño responsive y tema oscuro.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    status: "completed",
    image: "/api/placeholder/400/300",
  },
  {
    title: "Proyectos Backend",
    description: "Próximamente subiré algunos de los proyectos en los que he trabajado usando Spring Boot, microservicios y bases de datos.",
    technologies: ["Java", "Spring Boot", "MySQL", "Docker"],
    status: "in-progress",
    image: "/api/placeholder/400/300",
  },
  {
    title: "Más proyectos en camino",
    description: "Estoy preparando documentación y repositorios de proyectos profesionales para compartir mi experiencia en desarrollo backend.",
    technologies: ["Java", "Spring Framework", "JPA/Hibernate"],
    status: "planning",
    image: "/api/placeholder/400/300",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-serif">
              Proyectos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mi trabajo actual y proyectos en desarrollo
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border-primary/20 hover:border-primary/40 bg-card/50 backdrop-blur overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  {project.status === "completed" ? (
                    <div className="flex items-center space-x-2 text-green-500">
                      <div className="w-8 h-8 border-2 border-green-500 rounded-full flex items-center justify-center">
                        ✓
                      </div>
                    </div>
                  ) : project.status === "in-progress" ? (
                    <div className="flex items-center space-x-2 text-primary">
                      <Wrench className="h-8 w-8 animate-pulse" />
                      <Code className="h-6 w-6" />
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="h-8 w-8" />
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    {project.status === "completed" ? (
                      <Badge variant="secondary" className="bg-green-500/20 text-green-500 border-green-500/30">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Completado
                      </Badge>
                    ) : project.status === "in-progress" ? (
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                        En Desarrollo
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-background/80 text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        Planificado
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    {project.status === "completed" && project.title === "Portfolio Personal" ? (
                      <>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => window.location.href = '/'}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => window.open('https://github.com/tu-usuario/portfolio', '_blank')}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Código
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 bg-transparent opacity-60 cursor-not-allowed"
                          disabled
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 bg-transparent opacity-60 cursor-not-allowed"
                          disabled
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Código
                        </Button>
                      </>
                    )}
                  </div>
                  
                  {project.status === "in-progress" && (
                    <div className="mt-3 text-center">
                      <p className="text-xs text-primary font-medium">
                        🚀 Próximamente disponible
                      </p>
                    </div>
                  )}
                  
                  {project.status === "planning" && (
                    <div className="mt-3 text-center">
                      <p className="text-xs text-muted-foreground">
                        📋 En preparación
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
