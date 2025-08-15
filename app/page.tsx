import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { ExperienceSection } from "@/components/experience-section"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ScrollReveal direction="up" delay={100}>
          <ProjectsSection />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <TechnologiesSection />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={150}>
          <ExperienceSection />
        </ScrollReveal>
      </main>
      <ScrollReveal direction="fade" delay={100}>
        <Footer />
      </ScrollReveal>
    </div>
  )
}
