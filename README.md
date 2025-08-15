# 🚀 Portfolio Personal - Desarrollador Full Stack

Mi portfolio personal desarrollado con Next.js 14, TypeScript y Tailwind CSS, diseñado para mostrar mi experiencia como desarrollador backend especializado en Java y Spring Boot.

## 🌐 Demo en Vivo
[Ver Portfolio](https://tu-portfolio.vercel.app) *(Próximamente disponible)*

## 📸 Vista Previa
Un portfolio moderno con diseño responsive, tema oscuro y animaciones suaves que incluye:
- **Hero Section** con presentación personal
- **Sección de Proyectos** con estados dinámicos
- **Tecnologías** con gráficos interactivos
- **Experiencia Profesional** con timeline
- **Navegación suave** entre secciones

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **React 19** - Biblioteca de componentes

### UI/UX
- **Shadcn/UI** - Componentes pre-diseñados y accesibles
- **Radix UI** - Primitivos de UI sin estilos
- **Lucide React** - Iconos modernos y consistentes
- **Recharts** - Gráficos para visualización de datos

### Herramientas
- **pnpm** - Gestor de paquetes eficiente
- **PostCSS** - Procesador de CSS
- **Geist & Orbitron** - Fuentes tipográficas

## 🎯 Características

### ✨ **Animaciones y UX**
- Animaciones de scroll reveal
- Transiciones suaves entre secciones
- Hover effects y micro-interacciones
- Navegación sticky responsive

### 📱 **Diseño Responsive**
- Mobile-first design
- Breakpoints optimizados para todos los dispositivos
- Menú hamburguesa en móviles
- Grid adaptativo

### 🎨 **Tema Visual**
- Diseño dark mode por defecto
- Esquema de colores cian/azul
- Gradientes sutiles y efectos visuales
- Tipografía moderna con Geist y Orbitron

### 📊 **Contenido Dinámico**
- Experiencia profesional con timeline
- Gráficos de habilidades técnicas
- Estados de proyectos (Completado/En Desarrollo/Planificado)
- Enlaces a redes sociales y CV

## 🏃‍♂️ Instalación y Uso

### **Prerrequisitos**
- Node.js 18+ 
- pnpm (recomendado) o npm

### **1. Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/developer-portfolio.git
cd developer-portfolio
```

### **2. Instalar dependencias**
```bash
# Con pnpm (recomendado)
pnpm install

# O con npm
npm install
```

### **3. Ejecutar en modo desarrollo**
```bash
pnpm run dev
# o
npm run dev
```

### **4. Abrir en el navegador**
Visita http://localhost:3000 para ver el resultado.

### **📁 Estructura del Proyecto**
```md
📦 portfolio/
├── 📂 app/                     # App Router de Next.js
│   ├── globals.css            # Estilos globales y variables CSS
│   ├── layout.tsx            # Layout principal con fuentes
│   └── page.tsx              # Página principal
├── 📂 components/             # Componentes React
│   ├── 📂 ui/               # Componentes UI de Shadcn
│   ├── header.tsx           # Navegación principal
│   ├── hero-section.tsx     # Sección de presentación
│   ├── projects-section.tsx # Portafolio de proyectos
│   ├── technologies-section.tsx # Habilidades técnicas
│   ├── experience-section.tsx   # Experiencia profesional
│   ├── footer.tsx           # Pie de página
│   └── scroll-reveal.tsx    # Animaciones de scroll
├── 📂 hooks/                 # Custom React hooks
├── 📂 lib/                  # Utilidades y configuraciones
├── 📂 public/               # Archivos estáticos
├── 📂 styles/               # Estilos adicionales
├── components.json          # Configuración de Shadcn/UI
├── next.config.mjs         # Configuración de Next.js
├── tailwind.config.ts      # Configuración de Tailwind
└── tsconfig.json           # Configuración de TypeScript
```
