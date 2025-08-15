import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Orbitron } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "Mi Portfolio - Desarrollador Full Stack",
  description: "Página personal para documentar y practicar diferentes tecnologías del stack de desarrollo",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`dark ${geist.variable} ${orbitron.variable} antialiased`}>
      <body className="grid-pattern">{children}</body>
    </html>
  )
}
