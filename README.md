# Sistema de Control de Patrimonio a Escala Municipal

## Identificación
* **Proyecto:** Sistema de Control de Patrimonio.
* **Integrantes:** Díaz, Santiago - Palacios, Joaquín.

## Descripción técnica
El presente proyecto consiste en el desarrollo del frontend para una aplicación web destinada a gestionar el patrimonio de un gobierno de escala municipal. 
[cite_start]El sistema se define como una plataforma de uso estrictamente interno [cite: 32][cite_start]; se trata de un *back office* diseñado de manera exclusiva para operar dentro del entorno institucional de la municipalidad[cite: 33, 35]. [cite_start]Esta herramienta busca reemplazar la gestión manual mediante planillas de cálculo, brindando a los empleados un entorno digital unificado para el registro, control de acceso, y seguimiento del ciclo de vida de los bienes patrimoniales[cite: 30, 36, 39].

## Arquitectura
El proyecto sigue una arquitectura modular y orientada a componentes, pensada para la escalabilidad a largo plazo:
* **Entorno Privado:** Interfaz protegida y estructurada mediante paneles de control (*Dashboards*), vistas de gestión (tablas de datos) y formularios administrativos.
* **Design System (Tailwind Puro):** Implementación centralizada de estilos y componentes UI (botones, inputs, tarjetas) creados desde cero utilizando clases de utilidad de Tailwind CSS para garantizar la consistencia visual sin depender de librerías externas de componentes.

## Objetivos y Tecnologías
**Metas alcanzadas en esta fase:**
* Maquetación de las vistas principales del MVP basadas en los prototipos de diseño.
* Implementación e integración del Sistema de Diseño mediante un catálogo de componentes estáticos (Showcase).
* Establecimiento de la arquitectura de archivos y configuración del tipado estricto del proyecto.

**Stack Tecnológico Utilizado:**
* **React + Vite:** Entorno base para el desarrollo rápido y optimizado del frontend.
* **TypeScript:** Para el tipado estático seguro y escalabilidad del código.
* **Tailwind CSS:** Framework de estilos de utilidad para la maquetación y diseño de componentes.

## Guía de Instalación
Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   (git bash)
   git clone [https://github.com/joaquin-x-o/patrimonio-front.git](https://github.com/joaquin-x-o/patrimonio-front.git)

2. **Navegar al directorio del proyecto e instalar dependencias:**
cd patrimonio-front
npm install

3. **Variables de entorno:**
Duplica el archivo .env.template, renómbralo a .env y completa las variables necesarias.

4. **Ejecutar el servidor de desarrollo:**
npm run dev