# Proyecto Web con CI

Este es un proyecto base creado con Vite + React, preparado para ejecutar **CI (Integración Continua)** con **GitHub Actions**.

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Genera el build de producción
- `npm run preview`: Previsualiza el build
- `npm run lint`: Ejecuta ESLint para revisar errores
- `npm test`: Comando de prueba simulado

## Integración Continua (CI)

Este proyecto incluye un archivo de workflow (`.github/workflows/ci-react-vite.yml`) que ejecuta automáticamente:

1. Instalación de dependencias
2. Lint (ESLint)
3. Tests (placeholder)
4. Build del proyecto

Cada vez que haces `push`, GitHub Actions correrá este flujo automáticamente.

## Requisitos

- Node.js 18+
- npm
- Cuenta de GitHub con Actions habilitadas

---

## Cómo interpretar y corregir los warnings de ESLint

Cuando corres `npm run lint`, podrías ver mensajes como:

```
warning  'unusedVariable' is assigned a value but never used
warning  img elements must have an alt prop
```

Estos te indican buenas prácticas que debes seguir:

- ❌ No dejar variables sin usar
- ✅ Siempre usar `alt` en imágenes por accesibilidad
- ✅ Escribir código limpio y comprensible

Puedes corregir los errores directamente en tu código y volver a ejecutar `npm run lint` para ver si desaparecen.

---

## Activar reglas de accesibilidad con ESLint

Para que ESLint detecte errores como imágenes sin `alt`, puedes instalar un plugin extra:

```bash
npm install eslint-plugin-jsx-a11y --save-dev
```

Y luego modificar tu archivo `.eslintrc.json`:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "plugins": ["react", "jsx-a11y"]
}
```

Esto agregará reglas de accesibilidad recomendadas (como textos alternativos en imágenes, botones bien definidos, etc).


---

## ¿Por qué hay dos archivos `.yml` en `.github/workflows/`?

Este proyecto tiene dos flujos automáticos configurados con GitHub Actions:

### 1. `build.yml` – *Integración Continua (CI)*
Este flujo se ejecuta **cada vez que haces un push** y se encarga de:
- Instalar dependencias
- Ejecutar `npm run lint`
- Ejecutar pruebas (`npm test`)
- Compilar el proyecto con `npm run build`

Sirve para validar que el proyecto esté correcto antes de desplegar.

### 2. `deploy.yml` – *Despliegue Continuo (CD)*
También se ejecuta al hacer push a `main`, y se encarga de:
- Compilar nuevamente el proyecto (`npm run build`)
- Publicarlo automáticamente en GitHub Pages (`gh-pages` branch)

---

### ¿Se ejecutan en orden?
Sí, GitHub Actions **los ejecuta en paralelo**, pero como `deploy.yml` depende de que el build funcione, puedes confiar en que si algo falla en el CI, el deploy también fallará.
En proyectos reales, podrías incluso hacer que `deploy.yml` solo se ejecute si el `ci.yml` pasa con éxito (usando `needs:` en YAML).

---

### Comando adiconales

git init
git checkout --orphan backend/main
touch README.md
git add README.md
git commit -m "Primer commit en rama vacía"
git remote add origin https://github.com/CarlosChavezTec/frontdemo.git
git push origin backend/main

