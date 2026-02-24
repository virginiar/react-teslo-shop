# React Teslo Shop

SPA (Single Page Application) de un panel administrativo de productos basada en el proyecto TesloShop del curso de "React: De cero a experto" de [DevTalles](https://cursos.devtalles.com/) en Udemy.

Se trata de un proyecto React creado utilizando Vite con TypeScript + SWC.

El diseño de la aplicación se realizó con [Bolt](https://bolt.new/) y [V0](https://v0.app/)

El diseño de los componentes se realiza con [Tailwind CSS](https://tailwindcss.com/) y [shadcn/ui](https://ui.shadcn.com/).

El enrutado se efectúa con [React Router](https://reactrouter.com/).

La obtención de datos HTTP del backend se realiza con [Axios](https://axios-http.com/es/docs/intro).

Como gestores de estado se utiliza [TanStack Query](https://tanstack.com/query/latest) y [Zunstand](https://zustand.docs.pmnd.rs/).

Los toast están creados con [Sonner](https://sonner.emilkowal.ski/).

## Aspectos analizados

En este proyecto genera una Single Page Application y se analizan los siguientes puntos:
- Rutas
- QueryParameters
- Persistencia sin estado
- Navegación
- Fuentes personalizadas: TailWind CSS, ShadCN UI, Google Fonts
- Transformar código generado por IA para nuestro proyecto
- TanStack
- QueryKeys
- Paginación
- Transformaciones de argumentos
- TanStack con Zustand
- Sesión de usuario
- Autenticación
- Autorización
- Protección de rutas
- Autorización de rutas
- Filtros de productos
- Formularios
- Validaciones
- TanStack mutation
- Invalidar caché
- Despliegue en la nube

## Instalación y ejecución del proyecto

1. Clonar el repositorio
2. Descargar las dependencias con `npm install`.
3. Crear archivo `.env` con las variables de entorno indicadas en `.env.template`.
4. Verificar que el backend esté corriendo en el puerto 3000
5. Iniciar la aplicación con `npm run dev`.

## Instalaciones de paquetes necesarios

Tailwind CSS y Shadcn UI se instalan con:
```bash
npm install tailwindcss @tailwindcss/vite
npm install -D @types/node
npx shadcn@latest init
```

Los avisos sobre las reglas en Visual Studio Code se pueden eliminar con la extensión [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).

Para añadir nuevos componentes Shadcn-ui al proyecto
```bash
npx shadcn@latest add
```

Para instalar React Router en modo data:
```bash
npm i react-router
```

Para instalar Axios:
```bash
npm install axios
```

Para instalar TanStack Query:
```bash
npm i @tanstack/react-query
npm i -D @tanstack/eslint-plugin-query
```

Para instalar Zustand:
```bash
npm install zustand
```

Para instalar Sonner:
```bash
npm install sonner
```