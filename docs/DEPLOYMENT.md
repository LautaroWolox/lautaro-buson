# Despliegue

La arquitectura está separada en dos piezas:

- **Frontend:** Vue 3 estático (`dist/`). Recomendado: Firebase Hosting.
- **Backend:** Java 21 + Spring Boot 3 (`backend/`). Recomendado: Google Cloud Run.

No se usa Render en este proyecto.

## 1. Firebase Hosting · frontend

Firebase Hosting permite servir el frontend estático sobre HTTPS. Para un portfolio personal el plan Spark suele ser suficiente mientras el consumo se mantenga dentro de sus límites.

### Primera configuración

```bash
npm install
npm run build
npm install -g firebase-tools
firebase login
firebase projects:list
```

Crear o seleccionar un proyecto Firebase y copiar `.firebaserc.example` a `.firebaserc`:

```json
{
  "projects": {
    "default": "TU_PROJECT_ID"
  }
}
```

Antes del build productivo configurar `.env.production.local`:

```dotenv
VITE_BASE_PATH=/
VITE_SITE_URL=https://TU_SITIO.web.app/
VITE_API_BASE_URL=
```

Luego:

```bash
npm run build
firebase deploy --only hosting
```

Cuando el backend esté desplegado, completar `VITE_API_BASE_URL` con el **origen** de Cloud Run, sin `/api`, volver a compilar y desplegar.

## 2. Cloud Run · backend Java 21

El backend incluye `backend/Dockerfile` multi-stage con Temurin 21 y escucha `PORT`, requerido por Cloud Run.

Requisitos:

- proyecto Google Cloud,
- Cloud Run habilitado,
- Artifact Registry,
- facturación configurada si Google la solicita para habilitar los servicios, aun cuando el consumo quede dentro de las cuotas gratuitas.

Ejemplo con `gcloud`:

```bash
gcloud auth login
gcloud config set project TU_PROJECT_ID
gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com secretmanager.googleapis.com

gcloud artifacts repositories create portfolio \
  --repository-format=docker \
  --location=us-central1

gcloud builds submit backend \
  --tag us-central1-docker.pkg.dev/TU_PROJECT_ID/portfolio/lautaro-portfolio-api:latest

gcloud run deploy lautaro-portfolio-api \
  --image us-central1-docker.pkg.dev/TU_PROJECT_ID/portfolio/lautaro-portfolio-api:latest \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars CONTACT_MAIL_ENABLED=false,CORS_ALLOWED_ORIGINS=https://TU_SITIO.web.app
```

Comprobar:

```bash
curl https://TU_CLOUD_RUN_URL/api/health
```

Debe responder `status: ok`.

## 3. Email del formulario

Por defecto `CONTACT_MAIL_ENABLED=false`. Esto es intencional: el frontend cae a `mailto:` si la API no tiene entrega configurada.

Para activar envío real:

- elegir un proveedor SMTP autorizado,
- guardar credenciales como secretos, nunca en Git,
- configurar `MAIL_FROM`, `MAIL_HOST`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD`,
- activar `CONTACT_MAIL_ENABLED=true`,
- mantener STARTTLS habilitado.

En Cloud Run se recomienda montar secretos desde Secret Manager en lugar de escribirlos como variables visibles en comandos o archivos.

## 4. GitHub Pages · fallback gratuito

El workflow `.github/workflows/pages.yml` genera el sitio con base `/lautaro-buson/` y URL pública `https://lautarowolox.github.io/lautaro-buson/`.

En GitHub: **Settings → Pages → Source → GitHub Actions**. Después, un push a `main` ejecutará el workflow.

El frontend funciona sin backend gracias al fallback de email.

## 5. Dominio propio

Cuando exista dominio propio:

1. configurarlo primero en Firebase Hosting,
2. actualizar `VITE_SITE_URL`,
3. actualizar `CORS_ALLOWED_ORIGINS` del backend,
4. actualizar `public/robots.txt` y `public/sitemap.xml`,
5. reconstruir y desplegar.

## Seguridad

- No subir `.env`, `.env.production.local`, `.firebaserc` ni secretos.
- Nunca colocar credenciales SMTP en variables `VITE_*`: todo `VITE_*` queda público en el navegador.
- `CONTACT_TO` es fijo en el servidor; el visitante no controla destinatario ni remitente.
- CORS debe contener únicamente los orígenes públicos reales.
