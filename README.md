# ✈️ Trip Planner - Praga · Viena · Budapest 2026

Una aplicación web interactiva para gestionar el checklist de tu viaje a Europa Central.

## 🎯 Características

- ✅ **Checklist interactivo** con 5 secciones principales
- 📊 **Progreso visual** con estadísticas en tiempo real
- 💾 **Almacenamiento local** - funciona 100% offline
- 📱 **Mobile-first** - optimizado para navegación en el móvil
- 🎨 **Diseño bonito** con gradientes y animaciones
- 📥 **Exportar/Importar** el progreso en JSON
- 🔄 **Sincronización automática** con localStorage

## 📋 Secciones

1. **Antes de salir** - Documentación, apps, dinero
2. **Reservas imprescindibles** - Parlamento, Schönbrunn, Cruceros
3. **Qué empacar** - Ropa, accesorios, documentación
4. **Dinero y tarjetas** - Monedas, cajeros, comisiones
5. **Checklist diario** - Qué llevar cada día

## 🚀 Despliegue en Vercel

### Opción 1: Desplegar en 2 minutos (Recomendado)

1. **Ir a tu repositorio en GitHub**
   ```bash
   # Si no tienes repositorio, crear uno primero
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TU_USUARIO/trip-planner.git
   git push -u origin main
   ```

2. **Ir a Vercel**
   - Abre https://vercel.com
   - Haz clic en "New Project"
   - Conecta tu repositorio GitHub
   - Vercel detectará automáticamente que es un proyecto Next.js
   - Haz clic en "Deploy"

   **¡Listo en 30 segundos!**

### Opción 2: Desplegar con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Ir al directorio del proyecto
cd trip-planner

# Desplegar
vercel

# Seguir las instrucciones del CLI
```

## 🏃 Ejecutar localmente

### Requisitos
- Node.js 18+ 
- npm o yarn

### Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Abre http://localhost:3000 en tu navegador
```

### Build para producción

```bash
npm run build
npm start
```

## 📁 Estructura del proyecto

```
trip-planner/
├── src/
│   ├── app/
│   │   ├── page.jsx          # Página principal
│   │   ├── layout.jsx        # Layout raíz
│   │   └── globals.css       # Estilos globales
│   ├── components/
│   │   ├── TaskList.jsx      # Componente de lista de tareas
│   │   ├── SectionTabs.jsx   # Navegación entre secciones
│   │   └── Stats.jsx         # Estadísticas y tips
│   └── data/
│       └── tripData.js       # Datos del viaje
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 💾 Almacenamiento de datos

- **Todos los datos se guardan en localStorage del navegador**
- No requiere servidor ni base de datos
- Si cambias de navegador/dispositivo, los datos no se sincronizan automáticamente
- Puedes exportar el progreso como JSON usando el botón "Exportar progreso"

## 🔧 Personalización

### Cambiar el contenido del viaje

Edita `src/data/tripData.js`:

```javascript
export const tripData = {
  title: 'Tu viaje aquí',
  dates: 'Fechas aquí',
  sections: {
    // Tus secciones personalizadas
  },
  tips: [
    // Tus tips
  ]
}
```

### Cambiar colores

Edita `tailwind.config.js`:

```javascript
colors: {
  trip: {
    primary: '#7c5be8',    // Cambiar aquí
    secondary: '#e87a5a',
    accent: '#3a8fc4',
    dark: '#0d0a1a',
  }
}
```

## 🌐 URL después del despliegue

Una vez desplegado en Vercel, tu app estará disponible en:

```
https://trip-planner-TUPROYECTO.vercel.app
```

(Vercel asignará automáticamente el nombre)

Puedes cambiar el dominio en Vercel → Proyecto → Settings → Domains

## 📱 Uso en móvil

### Android
1. Abre la URL en Chrome
2. Toca el menú (⋮)
3. "Instalar app"
4. Se añadirá a tu pantalla de inicio

### iOS
1. Abre la URL en Safari
2. Toca compartir (↗️)
3. "Añadir a pantalla de inicio"
4. Se añadirá como acceso directo

## 🐛 Troubleshooting

### Build falla en Vercel
- Verifica que todos los archivos estén en la carpeta correcta
- Asegúrate de tener `next.config.js`
- Comprueba que `package.json` tiene las dependencias correctas

### Datos no se guardan
- Verifica que localStorage no está desactivado en el navegador
- Intenta en otro navegador o modo privado

### Estilos no se ven
- Limpia la caché del navegador (Ctrl+Shift+Delete)
- Verifica que Tailwind CSS se compiló correctamente

## 📊 Variables de entorno

Este proyecto no requiere variables de entorno.

Si en el futuro quieres añadir características (sincronización con servidor, etc.):

Crea `.env.local`:
```bash
NEXT_PUBLIC_API_URL=https://tuapi.com
```

## 🎓 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)
- [React Docs](https://react.dev)

## 📄 Licencia

Proyecto personal para uso propio.

---

¿Preguntas? Revisa el código en `src/` - está bien comentado y es fácil de entender.

**¡Buen viaje! ✈️**
