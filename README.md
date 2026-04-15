Sistema de Control de Patrimonio a Escala Municipal

## Identificación
* **Proyecto:** Sistema de Control de Patrimonio.
* **Integrantes:** Díaz, Santiago - Palacios, Joaquín.

## Descripción técnica
El presente proyecto consiste en el desarrollo del frontend para una aplicación web destinada a gestionar el patrimonio de un gobierno de escala municipal. La plataforma se divide en dos entornos: una **App Client** (pública) que actúa como Landing Page informativa y catálogo de bienes, y una **App BackOffice** (privada) protegida por autenticación. Esta herramienta resuelve la falta de escalabilidad y los problemas de integridad de datos generados por el uso tradicional de planillas de cálculo, brindando a los empleados municipales un entorno digital unificado para el registro (Altas, Bajas, Modificaciones) y seguimiento del ciclo de vida de los bienes.

## Arquitectura
El proyecto sigue una arquitectura modular y fuertemente tipada, enfocada en la reutilización de componentes:
* **Entorno Público (Landing Page):** Interfaz principal de acceso, estructurada con barra de navegación, Hero section, filtros y catálogo.
* **Entorno Privado (BackOffice):** Módulos de gestión protegidos por login, incluyendo tablas de datos dinámicas y formularios para la administración del inventario.
* **Design System (`src/components/ui`):** Implementación centralizada de estilos y componentes atómicos utilizando la biblioteca Shadcn/UI para garantizar la consistencia visual y accesibilidad en ambos entornos.

## Objetivos y Tecnologías
**Metas alcanzadas en esta fase:**
* Maquetación completa de la Landing Page siguiendo el diseño de interfaz.
* Implementación e integración del Design System mediante un catálogo de componentes estáticos (Showcase).
* Establecimiento de la arquitectura de archivos y configuración del tipado estricto del proyecto.

**Stack Tecnológico Utilizado:**
* **React + Vite:** Entorno base para el desarrollo rápido y optimizado del frontend.
* **TypeScript:** Para el tipado estático seguro y escalabilidad del código.
* **Tailwind CSS:** Framework de estilos de utilidad.
* **Shadcn/UI:** Biblioteca de componentes accesibles y personalizables.

## Guía de Instalación