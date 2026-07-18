# 🚀 Guía de despliegue en Vercel (Paso a Paso)

## Tiempo total: 5-10 minutos

---

## PASO 1️⃣: Preparar el código en GitHub

### Si no tienes Git instalado:
1. Descarga [Git](https://git-scm.com/download)
2. Instálalo

### Crear repositorio GitHub

1. **Abre** https://github.com/new
2. **Crea un nuevo repositorio:**
   - Nombre: `trip-planner`
   - Descripción: "Checklist interactivo para viaje a Europa Central"
   - Privado o público (como prefieras)
   - NO marques "Add README" (ya lo tiene)
   - Haz clic en "Create repository"

3. **En tu terminal/CMD, en la carpeta del proyecto:**

```bash
# Ir a la carpeta
cd trip-planner

# Inicializar git
git init

# Añadir todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: Trip Planner app"

# Añadir el origen remoto (reemplaza USERNAME con tu usuario de GitHub)
git remote add origin https://github.com/USERNAME/trip-planner.git

# Pushear al main
git branch -M main
git push -u origin main
```

✅ **Ahora tu código está en GitHub**

---

## PASO 2️⃣: Desplegar en Vercel

### Opción A: La más fácil (recomendado)

1. **Abre** https://vercel.com/new
2. **Haz clic en "GitHub"** (bajo "Get started")
3. **Conecta tu cuenta GitHub** (si no está conectada ya)
4. **Busca "trip-planner"** en la lista
5. **Selecciona el repositorio**
6. **Vercel configurará automáticamente:**
   - Framework: Next.js ✅
   - Build command: `next build` ✅
   - Output directory: `.next` ✅
7. **Haz clic en "Deploy"** 🚀

**¡LISTO! Espera 2-3 minutos y tu app estará en línea.**

Tu URL será algo como: `https://trip-planner-xxxx.vercel.app`

---

### Opción B: Usando Vercel CLI (alternativa)

```bash
# Instalar Vercel CLI (solo una vez)
npm install -g vercel

# En la carpeta del proyecto
cd trip-planner

# Desplegar
vercel

# Selecciona tus preferencias en el CLI
# ¿Usar cuenta de Vercel? → Sí
# ¿Crear nuevo proyecto? → Sí
# ¿Nombre del proyecto? → trip-planner
# ¿Carpeta raíz? → ./
# ¿Modificar settings? → No
```

---

## PASO 3️⃣: Verificar que funciona

1. **Abre tu URL** en el navegador: `https://trip-planner-xxxx.vercel.app`
2. **Prueba funcionalidades:**
   - ✅ Marca algunas tareas como "done"
   - ✅ Cambia entre secciones
   - ✅ Recarga la página - los datos deben persistir
   - ✅ Prueba el botón "Exportar progreso"

---

## PASO 4️⃣: (Opcional) Configurar dominio personalizado

Si quieres una URL más bonita como `trip.tusitio.com`:

1. **En Vercel Dashboard:**
   - Selecciona tu proyecto "trip-planner"
   - Abre "Settings" → "Domains"
   - Haz clic en "Add Domain"
   - Escribe tu dominio personalizado
   - Sigue las instrucciones para añadir registros DNS

---

## ✅ ¡Hecho!

Tu app está deployada y funcionando. Ahora:

- 📱 Accede desde cualquier dispositivo
- 🔗 Comparte la URL con quien quieras
- 📥 Usa el botón "Exportar progreso" para hacer backups
- 🔄 Los cambios se guardan en localStorage de tu navegador

---

## 🔄 Actualizar la app

Si haces cambios en el código:

```bash
# Desde la carpeta del proyecto
git add .
git commit -m "Descripción de cambios"
git push origin main
```

Vercel detectará automáticamente los cambios y hará redeploy en 1-2 minutos.

---

## 🆘 Si algo va mal

### Build falla
- Verifica que todos los archivos estén en el lugar correcto
- Abre el log de Vercel (en Dashboard → Proyecto → Deployments)
- Busca el mensaje de error específico

### App no carga datos
- Abre la consola del navegador (F12)
- Busca errores en rojo
- Limpia caché del navegador

### Datos se pierden al recargar
- Comprueba que localStorage no está desactivado
- Abre DevTools (F12) → Application → Local Storage
- Debería estar `tripPlanner` guardado

---

## 📞 Preguntas frecuentes

**P: ¿Necesito tarjeta de crédito para Vercel?**
R: No, el plan gratuito es suficiente.

**P: ¿Dónde se guardan los datos?**
R: En localStorage del navegador (en tu dispositivo).

**P: ¿Puedo sincronizar entre dispositivos?**
R: Actualmente no, pero puedes exportar/importar JSON.

**P: ¿Puedo cambiar el contenido del viaje?**
R: Sí, edita `src/data/tripData.js` y haz push.

**P: ¿Es gratis para siempre?**
R: Sí, plan gratuito de Vercel es suficiente para esta app.

---

## 🎉 ¡Listo! Buen viaje ✈️
