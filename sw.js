// Service worker mínimo: solo para que el navegador deje instalar la PWA
// ("Agregar a pantalla principal"). No cachea nada a propósito, así siempre
// carga la última versión y nunca muestra datos viejos por un caché colgado.
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { self.clients.claim(); });
self.addEventListener('fetch', function (e) {});
