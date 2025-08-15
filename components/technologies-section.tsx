"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const technologies = [
  {
    category: "Backend",
    skills: [
      { name: "Java", level: 95 },           // 5+ años, todas las posiciones
      { name: "Spring Boot", level: 92 },    // Expertise sólido, actual enfoque
      { name: "Spring Framework", level: 90 }, // Base sólida en todas las posiciones
      { name: "JPA/Hibernate", level: 88 },  // Usado en Cívica y experiencia actual
      { name: "Microservicios", level: 85 }, // DISID y NTT DATA
      { name: "MySQL", level: 90 },          // Todas las posiciones
      { name: "MariaDB", level: 85 },        // DISID actual
      { name: "Liquibase", level: 80 },      // DISID actual
      { name: "PostgreSQL", level: 30 },     // Menos experiencia
      { name: "Kotlin", level: 25 },         // Tecnología más nueva
    ].sort((a, b) => b.level - a.level),
  },
  {
    category: "DevOps & Herramientas",
    skills: [
      { name: "Git", level: 95 },            // Todas las posiciones, herramienta diaria
      { name: "Jenkins", level: 82 },        // DISID y NTT DATA, CI/CD
      { name: "Docker", level: 80 },         // DISID actual
      { name: "Microsoft Azure", level: 72 }, // DISID actual
      { name: "JDBC", level: 85 },           // NTT DATA experience
    ].sort((a, b) => b.level - a.level),
  },
  {
    category: "Testing & QA",
    skills: [
      { name: "JUnit", level: 85 },          // NTT DATA, testing automatizado
      { name: "Selenium", level: 80 },       // NTT DATA, test automation
      { name: "Cucumber", level: 75 },       // NTT DATA, BDD testing
      { name: "JMeter", level: 70 },         // NTT DATA, performance testing
    ].sort((a, b) => b.level - a.level),
  },
  {
    category: "Frontend",
    skills: [
      { name: "Angular", level: 75 },        // Cívica Software, 1+ año
      { name: "AngularJS", level: 70 },      // Cívica Software
      { name: "TypeScript", level: 72 },     // Cívica + proyecto actual
      { name: "Ionic", level: 65 },          // Cívica, desarrollo móvil
      { name: "JavaScript", level: 75 },     // Cívica + conocimiento general
      { name: "React", level: 45 },          // Proyecto actual, aprendiendo
      { name: "Next.js", level: 40 },        // Proyecto actual, nuevo
      { name: "HTML/CSS", level: 80 },       // Base sólida frontend
    ].sort((a, b) => b.level - a.level),
  },
]

const skillsByCategory = technologies.map((cat) => ({
  category: cat.category,
  average: Math.round(cat.skills.reduce((sum, skill) => sum + skill.level, 0) / cat.skills.length),
}))

const COLORS = ["#00ffff", "#ff00ff", "#ffff00", "#00ff00", "#ff6600", "#6600ff", "#ff0066", "#66ff00"]

export function TechnologiesSection() {
  return (
    <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-serif">Tecnologías</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stack tecnológico y herramientas que utilizo basado en mi experiencia profesional real y proyectos personales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {technologies.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border-primary/30 hover:border-primary/60 bg-card/80 backdrop-blur"
            >
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-accent font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 border border-primary/30">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
