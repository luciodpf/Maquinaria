# Publicar Maquinaria en GitHub Pages

Esta carpeta es la app entera. El servidor es el Apps Script y la planilla de Google: acá solo
vive la pantalla.

| Archivo | Qué es |
|---|---|
| `index.html` | la app |
| `manifest.json` | lo que la hace instalable, con el nombre y los colores |
| `sw.js` | permite que Chrome ofrezca instalarla |
| `icon-192.png` / `icon-512.png` | ícono (reutilizado de Sanidad — cambialo si querés uno propio) |

Sin PIN ni login: cualquiera con el link entra y carga. Es a propósito — dijiste que todos
(Gutiérrez, Druetta, Gallo, Altuna L., Roberto, vos y Daniel) tienen que poder hacer todo. El
"quién" que se guarda en cada carga es solo para saber quién anotó qué, no una traba de acceso.

---

## 1. Crear la planilla y el backend (una sola vez)

1. Entrá a [sheets.new](https://sheets.new) con tu cuenta de Google. Nombrala `Maquinaria 2026` o
   como prefieras.
2. **Extensiones → Apps Script.** Se abre un editor con `Código.gs` vacío.
3. Borrá todo y pegá el contenido completo de `../Codigo.gs` (el que está al lado de esta carpeta,
   no acá adentro). **Ctrl+S**.
4. Arriba, en el desplegable de funciones, elegí **`setup`** y tocá **Ejecutar**.
   - La primera vez pide permisos: **Revisar permisos → tu cuenta → Avanzada → Ir al proyecto →
     Permitir.** Es normal, es tu propio script. Un poco más adelante va a pedir también acceso a
     **Drive** (es donde se guardan las fotos de remitos y tareas) — aceptá igual.
   - Volvé a la planilla: ya tiene las hojas `Maquinas`, `Combustible`, `Labores`, `Remitos` y
     `Tareas`. `Maquinas` viene con la lista de la Manifestación de Bienes — revisala, sobre todo
     las marcadas **Mixer/Feedlot**, y borrá las que no correspondan al galpón del pueblo.
5. **Implementar → Nueva implementación** → engranaje ⚙ → **Aplicación web**.
   - **Ejecutar como:** Yo (tu cuenta)
   - **Quién tiene acceso:** **Cualquier usuario** ← si no, nadie del galpón entra
6. **Implementar** y copiá la URL que termina en `/exec`.

## 2. Poner la URL en la app

Abrí `index.html` de esta carpeta con el Bloc de notas, buscá arriba de todo del `<script>`:

```javascript
var BACKEND = 'PEGA_ACA_LA_URL_DEL_APPS_SCRIPT';
```

y pegá tu URL entre las comillas. Guardá.

## 3. Subir a GitHub Pages

1. Creá un repositorio nuevo (por ejemplo `maquinaria`), o agregá una carpeta `maquinaria/` al
   repo que ya tenés con las otras apps.
2. Subí los **cinco archivos de esta carpeta** (`index.html`, `manifest.json`, `sw.js`,
   `icon-192.png`, `icon-512.png`, `.nojekyll`) a la raíz del repo (o de esa carpeta).
3. **Settings → Pages → Source: Deploy from a branch → Branch: `main` → Save.**
4. En un minuto te da la dirección, por ejemplo `https://luciodpf.github.io/maquinaria/`.

## 4. Instalarla en el celular de cada uno

Abrí esa dirección en Chrome. Va a aparecer **Instalar aplicación**; si no, ⋮ → *Instalar
aplicación*. En iPhone: Compartir → *Agregar a pantalla de inicio*. Queda como una app, sin barra
del navegador.

La primera vez que la abren les va a pedir elegir su nombre — queda guardado en el teléfono, no
hace falta elegirlo de nuevo (salvo que toquen "cambiar").

---

## Antes de instalar: probala vos primero

Abrí `index.html` haciendo doble clic, con el `BACKEND` ya puesto. Cargá dos o tres cosas
inventadas (una máquina de prueba, una tarea de prueba) y fijate que aparezcan en la planilla.
Cuando esté como querés, ahí sí lo mandás a los muchachos.

## De acá en más

**Cambio en la pantalla** (`index.html`) → lo editás, `git push`, y en un minuto está arriba. Nadie
reinstala nada. Si el teléfono se queda con la versión vieja, subí el nombre del `CACHE` en `sw.js`
(hoy no cachea nada a propósito, así que no debería pasar).

**Cambio en el backend** (`Codigo.gs`) → pegás el nuevo código y volvés a **Implementar →
Administrar implementaciones → ✏️ → Nueva versión → Implementar.** El link no cambia.

## Sobre que el repositorio sea público

El código queda a la vista, incluida la URL del backend — igual que con Sanidad y Camión. Como acá
no hay sesión, **el link SÍ es la contraseña**: quien lo tenga puede cargar y ver combustible,
labores, remitos y tareas (no hay datos de plata ni nada privado, así que el riesgo es bajo, pero
no lo mandes a grupos grandes de todos modos).

Cuando unifiquemos todo en una sola app, esto pasa a compartir el shell con Aplicaciones, Camión y
Sanidad/Ganadería.
