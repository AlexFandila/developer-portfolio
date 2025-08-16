import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-6">
          <ScrollReveal direction="fade" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-serif">
              Hola, soy <span className="text-primary">Desarrollador Full Stack</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Apasionado por crear soluciones digitales innovadoras. Especializado en tecnologías modernas del
              desarrollo web y siempre explorando nuevas herramientas. Interesado en herramientas IA.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={500}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform">
                Ver mis proyectos
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent border-primary/50 hover:border-primary hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black cursor-pointer transition-all"
              >
                Descargar CV
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="fade" delay={700}>
            <div className="flex justify-center space-x-6 pt-8">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
