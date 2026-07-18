# 📋 Resumen del Proyecto - Trip Planner

## 🎯 ¿Qué es?

Una aplicación web interactiva para gestionar el checklist de tu viaje a Praga, Český Krumlov, Viena y Budapest en julio 2026.

## ✨ Características principales

### 📊 Dashboard
- Progreso visual (porcentaje completado)
- Estadísticas: total de tareas, completadas, pendientes
- Tips útiles extraídos de tu guía de viaje

### ✅ 5 Secciones de checklist
1. **Antes de salir** (Documentación, apps, dinero, equipaje)
2. **Reservas imprescindibles** (Parlamento Budapest, Schönbrunn, etc.)
3. **Qué empacar** (Ropa, accesorios, documentación)
4. **Dinero y tarjetas** (Monedas, cajeros, tipos de cambio)
5. **Checklist diario** (Qué llevar cada día)

### 🎨 Diseño
- Optimizado 100% para móvil
- Gradientes bonitos (inspirados en Soardy)
- Animaciones suaves
- Accesible y rápido

### 💾 Almacenamiento
- Funciona 100% offline (localStorage)
- Los datos se guardan automáticamente
- Botón para exportar/importar JSON
- Botón para reiniciar todo

## 🛠️ Stack tecnológico

- **Framework:** Next.js 15 (React)
- **Estilos:** Tailwind CSS
- **Almacenamiento:** localStorage del navegador
- **Hosting:** Vercel (gratuito)
- **Lenguaje:** JavaScript/JSX

## 📦 Archivos principales

```
trip-planner/
├── README.md                    # Documentación general
├── DEPLOY_GUIDE.md             # Guía de despliegue paso a paso
├── package.json                # Dependencias
├── tailwind.config.js          # Configuración de estilos
├── src/
│   ├── app/
│   │   ├── page.jsx            # Página principal (lógica + UI)
│   │   ├── layout.jsx          # Estructura base
│   │   └── globals.css         # Estilos globales
│   ├── components/
│   │   ├── TaskList.jsx        # Componente de tareas
│   │   ├── SectionTabs.jsx     # Navegación entre secciones
│   │   └── Stats.jsx           # Estadísticas y tips
│   └── data/
│       └── tripData.js         # Contenido del viaje (fácil de editar)
└── vercel.json                 # Configuración para Vercel
```

## 🚀 Cómo desplegar

### Forma más fácil (2 minutos)

1. **Subir código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TU_USUARIO/trip-planner.git
   git push -u origin main
   ```

2. **Desplegar en Vercel:**
   - Abre https://vercel.com/new
   - Selecciona tu repositorio GitHub
   - Haz clic en "Deploy"
   - **¡LISTO! en 2-3 minutos**

Ver `DEPLOY_GUIDE.md` para instrucciones detalladas.

## 🎮 Funcionalidades de la app

✅ Marcar/desmarcar tareas  
✅ Filtrar por estado (Todas, Pendientes, Completadas)  
✅ Ver progreso en tiempo real  
✅ Prioridades (🔴 Importante, 🟡 Normal, ⚪ Baja)  
✅ Plazos para reservas (1 mes antes, 2-3 semanas, etc.)  
✅ Enlaces a webs oficiales de reservas  
✅ Tips contextuales  
✅ Exportar progreso como JSON  
✅ Reiniciar todas las tareas  
✅ Funciona offline  
✅ Responsive (móvil, tablet, desktop)  

## 📱 Usar en móvil

### Android (Chrome)
1. Abre la URL
2. Menú (⋮) → "Instalar app"
3. Se añade a pantalla de inicio

### iOS (Safari)
1. Abre la URL
2. Compartir (↗️) → "Añadir a pantalla de inicio"
3. Se añade como acceso rápido

## 🔧 Personalización

### Cambiar contenido del viaje

Edita `src/data/tripData.js`:

```javascript
export const tripData = {
  title: 'Tu viaje aquí',
  dates: 'Tus fechas aquí',
  sections: {
    // Tus secciones personalizadas
  },
  tips: [
    // Tus tips personalizados
  ]
}
```

### Cambiar colores

Edita `tailwind.config.js`:

```javascript
colors: {
  trip: {
    primary: '#7c5be8',    // Púrpura
    secondary: '#e87a5a',  // Coral
    accent: '#3a8fc4',     // Azul
    dark: '#0d0a1a',       // Negro
  }
}
```

## 🔄 Actualizar la app en producción

Cualquier cambio en GitHub se deploya automáticamente en Vercel en 1-2 minutos.

```bash
# Hacer cambios locales
# ...
git add .
git commit -m "Nuevo cambio"
git push origin main
# Vercel detectará automáticamente y hará redeploy
```

## 💡 Ideas futuras (opcionales)

- Sincronización con Google Drive/Notion
- Compartir lista con otros usuarios
- Notificaciones de recordatorio (push notifications)
- Traducciones (español/inglés/alemán/húngaro)
- Integración con calendario
- Mapa interactivo del viaje

## 📊 Datos incluidos

Basado completamente en tu guía de viaje "Praga - Vienna - Budapest 2026":

✅ Documentación necesaria  
✅ Dinero y monedas (CZK, EUR, HUF)  
✅ Aplicaciones recomendadas  
✅ Reservas imprescindibles  
✅ Consejos de seguridad  
✅ Qué empacar  
✅ Tips de viaje  
✅ Enlaces oficiales  

## 🆓 Costes

- **Vercel:** Gratuito (plan free es suficiente)
- **Dominio personalizado:** Opcional ($11-15/año)
- **Desarrollo:** Código abierto en GitHub

## ✅ Testing

Antes de ir al viaje:

1. ✅ Marca todas las tareas de "Antes de salir"
2. ✅ Exporta el progreso como JSON (backup)
3. ✅ Añade a pantalla de inicio (si usas móvil)
4. ✅ Verifica que funciona offline
5. ✅ Prueba en diferentes navegadores

## 📝 Licencia

Proyecto personal para uso propio.

---

## 🎉 ¡Listo para usar!

Tu app está lista para desplegar. Solo necesitas:
1. GitHub (gratis)
2. Vercel (gratis)
3. 5 minutos de tu tiempo

Sigue `DEPLOY_GUIDE.md` para instrucciones paso a paso.

**¡Buen viaje! ✈️**
