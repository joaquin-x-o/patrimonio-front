# Sistema de Control de Patrimonio a Escala Municipal

## Identificación
* **Proyecto:** Sistema de Control de Patrimonio.
* **Integrantes:** Díaz, Santiago - Palacios, Joaquín.

## Descripción técnica
El presente proyecto consiste en el desarrollo del frontend para una aplicación web destinada a gestionar el patrimonio de un gobierno de escala municipal. El sistema se define como una plataforma de uso estrictamente interno. Se trata de un back office diseñado de manera exclusiva para operar dentro del entorno institucional de la municipalidad. 

Esta herramienta busca reemplazar la gestión manual mediante planillas de cálculo, brindando a los empleados un entorno digital unificado para el registro, control de acceso y seguimiento del ciclo de vida de los bienes patrimoniales.

## Arquitectura y Estructura del Proyecto
El proyecto sigue una arquitectura modular orientada a componentes, dividiendo las responsabilidades lógicas y visuales para garantizar una alta escalabilidad. Todo el código fuente se encuentra dentro del directorio `src`, organizado de la siguiente manera:

* **`app/`**: Componentes de nivel aplicación que configuran e instancian elementos estructurales globales
* **`components/`**: Aloja todos los bloques de construcción de la interfaz, subdivididos según su propósito:
  * **`ui/`**: Sistema de diseño estático. Contiene componentes visuales puros y reutilizables creados desde cero con Tailwind CSS, como botones, tarjetas, etiquetas de estado e inputs.
  * **`layout/`**: Componentes estructurales de la aplicación, como la barra lateral de navegación y la barra superior.
  * **`features/`**: Componentes específicos del dominio del negocio, agrupados por entidad, como los módulos lógicos para productos y áreas departamentales.
* **`pages/`**: Vistas principales de la aplicación asociadas a rutas específicas, como el panel de control principal o la sección de visualización del sistema de diseño.
* **`Routes/`**: Archivos de configuración de navegación y ruteo centralizado de la aplicación.
* **`interfaces/` y `types/`**: Definiciones de tipado estricto para TypeScript, asegurando la consistencia de los modelos de datos en todo el código.
* **`services/`**: Módulos encargados de la comunicación con servicios externos o la futura integración con una base de datos.
* **`mock/`**: Datos estáticos simulados utilizados para el desarrollo y las pruebas visuales antes de conectar el sistema a un backend real.
* **`utils/`**: Funciones auxiliares y herramientas de formato general, como conversores de fechas y diccionarios de productos.
* **`lib/`**: Configuración e inicialización de librerías externas

## Objetivos y Tecnologías

**Metas alcanzadas en esta fase:**
* Maquetación de la página principal (Dashboard) del producto mínimo viable basadas en los prototipos de diseño.
* Implementación e integración del Sistema de Diseño mediante un catálogo de componentes estáticos.
* Establecimiento de la arquitectura de archivos y configuración del tipado estricto del proyecto.

**Stack Tecnológico Utilizado:**
* **React + Vite:** Entorno base para el desarrollo rápido y optimizado del frontend.
* **TypeScript:** Para el tipado estático seguro y escalabilidad del código.
* **Tailwind CSS:** Framework de estilos de utilidad para la maquetación y diseño de la interfaz.

## Guía de Instalación
Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio:**
```bash
   git clone https://github.com/joaquin-x-o/patrimonio-front.git
```

2. **Navegar al directorio del proyecto e instalar dependencias:**
```bash
   cd patrimonio-front
   npm install
```

3. **Variables de entorno:**
   Duplica el archivo `.env.template`, renómbralo a `.env` y completa las variables necesarias.

4. **Ejecutar el servidor de desarrollo:**
```bash
   npm run dev
```