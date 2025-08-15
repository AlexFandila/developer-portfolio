import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary font-serif">DevPortfolio</h3>
            <p className="text-sm text-muted-foreground">
              Desarrollador Full Stack apasionado por crear soluciones digitales innovadoras y escalables.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Proyectos
              </a>
              <a href="#technologies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tecnologías
              </a>
              <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Experiencia
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Conecta Conmigo</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/AlexFandila" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/alejandro-fandila-dev/" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">© 2025 DevPortfolio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
