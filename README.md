# Lautaro Buson · Portfolio profesional

Portfolio profesional de **Lautaro Buson — Tech Lead · Software Architect · Full Stack Engineer**.

El objetivo no es presentar una lista de tecnologías, sino mostrar una trayectoria de más de 15 años en sistemas enterprise: modernización de legacy, arquitectura, microservicios, seguridad, frontend moderno, CI/CD, OpenShift/OCP4, observabilidad y liderazgo técnico hands-on.

## Stack del proyecto

### Frontend

- Vue 3
- TypeScript strict
- Vite
- Pinia
- PrimeVue 4 + preset Aura personalizado
- SPA por secciones y deep links
- ES / EN
- modo Recruiter / Engineer
- diseño responsive desde mobile hasta 4K
- accesibilidad, foco visible y `prefers-reduced-motion`

### Backend

- Java 21
- Spring Boot 3.5.x
- Spring MVC
- Bean Validation
- Spring Mail
- CORS explícito por entorno
- Docker multi-stage con Temurin 21

### Hosting preparado

- Firebase Hosting para el frontend
- Google Cloud Run para la API
- GitHub Pages como fallback gratuito

## Foco profesional

La experiencia actual de Personal / Telecom Argentina se presenta como un proceso real de modernización:

```text
Java 11 + JSP + Spring Security
            ↓
Vue 3 + Pinia + PrimeVue
            ↓
Java 17/21 + Java 21 / Spring Boot 3
            ↓
OAuth2 · JWT · CyberArk · LDAP · identity
            ↓
GitLab CI/CD · OpenShift 4 / OCP4 · Nginx
            ↓
OpenTelemetry · Dynatrace
```

El sitio evita afirmar métricas o resultados no verificados. Las preguntas que todavía conviene confirmar están en [`docs/CONTENT_REVIEW.md`](docs/CONTENT_REVIEW.md).

## Secciones

1. Hero orientado a perfil Tech Lead / Software Architect.
2. Current Focus con el journey de modernización de Field Manager.
3. Career Journey con Personal/Telecom, CaleGroup, IBM, BBVA, Banco Hipotecario, Accenture y actividad Freelance.
4. Case studies: Field Manager Modernization, Digital Banking & Identity, Mobile Social Login y Healthcare Platform.
5. Tech Universe categorizado por Backend, Frontend, Arquitectura, Seguridad, DevOps/Cloud, Datos y Observabilidad.
6. Architecture Lab en modo Engineer.
7. Leadership / Beyond Code.
8. Formación.
9. Contacto profesional con API Java y fallback seguro a email.

## Estructura

```text
.
├── src/
│   ├── App.vue
│   ├── data/profile.ts
│   ├── stores/ui.ts
│   ├── theme.ts
│   ├── main.ts
│   └── styles.css
├── public/
│   ├── cv/
│   ├── favicon.svg
│   ├── og-cover.svg
│   ├── robots.txt
│   └── sitemap.xml
├── backend/
│   ├── pom.xml
│   ├── Dockerfile
│   └── src/
├── docs/
│   ├── CONTENT_REVIEW.md
│   └── DEPLOYMENT.md
├── firebase.json
├── vite.config.ts
└── package.json
```

## Desarrollo local

Requisitos frontend: Node 22.12+ y npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Frontend local: `http://localhost:5173/`.

Para conectar la API local:

```dotenv
VITE_API_BASE_URL=http://localhost:8080
```

Backend: JDK 21 + Maven 3.9+.

```bash
mvn -f backend/pom.xml spring-boot:run
```

Health check:

```bash
curl http://localhost:8080/api/health
```

## Build

```bash
npm run typecheck
npm run build
mvn -f backend/pom.xml test
```

Vite genera `dist/`.

## Variables frontend

| Variable | Uso |
| --- | --- |
| `VITE_BASE_PATH` | `/` en Firebase; `/lautaro-buson/` en GitHub Pages |
| `VITE_SITE_URL` | URL pública final para canonical / SEO |
| `VITE_API_BASE_URL` | Origen de la API Java, sin `/api`; vacío habilita fallback por email |

Las variables `VITE_*` son públicas: nunca guardar secretos allí.

## Variables backend

| Variable | Default | Uso |
| --- | --- | --- |
| `PORT` | `8080` | puerto HTTP |
| `CORS_ALLOWED_ORIGINS` | localhost | orígenes permitidos separados por coma |
| `CONTACT_MAIL_ENABLED` | `false` | activa envío SMTP |
| `CONTACT_TO` | `busonlautaro@gmail.com` | destinatario fijo |
| `MAIL_FROM` | vacío | remitente autorizado |
| `MAIL_HOST` | `localhost` | host SMTP |
| `MAIL_PORT` | `587` | puerto SMTP |
| `MAIL_USERNAME` | vacío | credencial SMTP |
| `MAIL_PASSWORD` | vacío | secreto SMTP |
| `MAIL_SMTP_AUTH` | `true` | autenticación SMTP |
| `MAIL_STARTTLS_ENABLED` | `true` | STARTTLS |
| `MAIL_STARTTLS_REQUIRED` | `true` | exige TLS |

El servidor controla `From` y `To`. El email ingresado por el visitante se usa únicamente como `Reply-To`.

## Datos profesionales

Toda la información principal está centralizada en [`src/data/profile.ts`](src/data/profile.ts). Para actualizar experiencia, stack, case studies o formación no hace falta reescribir componentes.

Reglas de contenido:

- Telecom actual usa Java 11/JSP/Spring Security como base legacy y Vue 3/Pinia/PrimeVue como migración frontend.
- Angular pertenece a etapas históricas, no al frontend actual de Telecom.
- No publicar información confidencial, topologías internas, nombres sensibles o métricas no autorizadas.
- No publicar teléfono personal.

## CV público

- `public/cv/Lautaro-Buson-ES.html`
- `public/cv/Lautaro-Buson-EN.html`

Ambos son responsive e imprimibles y omiten el teléfono.

## Despliegue

La guía completa está en [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

### Firebase Hosting

```bash
npm run build
firebase deploy --only hosting
```

### Cloud Run

El backend está listo para construcción con `backend/Dockerfile`. Cloud Run debe recibir variables y secretos de entorno sin guardarlos en Git.

### GitHub Pages

El workflow de Pages compila con:

```dotenv
VITE_BASE_PATH=/lautaro-buson/
VITE_SITE_URL=https://lautarowolox.github.io/lautaro-buson/
```

## Contacto público

- Email: `busonlautaro@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/laubuson`
- GitHub profesional enlazado actualmente: `https://github.com/mlbuson`

La confirmación sobre si reemplazar el GitHub público por `LautaroWolox` quedó registrada en la revisión de contenido.
