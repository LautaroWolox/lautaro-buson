<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import Card from 'primevue/card'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Message from 'primevue/message'
import { useUiStore } from './stores/ui'
import {
  profile, experience, modernizationJourney, caseStudies, stackGroups, leadership, education,
  type Experience,
} from './data/profile'

const ui = useUiStore()
const selectedExperience = ref<Experience>(experience[0])
const contact = reactive({ name: '', email: '', message: '' })
const contactState = ref<'idle' | 'sending' | 'success' | 'error' | 'mailto'>('idle')
const contactMessage = ref('')

const copy = {
  es: {
    nav: ['Inicio', 'Trayectoria', 'Proyectos', 'Stack', 'Liderazgo', 'Formación', 'Contacto'],
    navIds: ['home', 'experience', 'projects', 'stack', 'leadership', 'education', 'contact'],
    current: 'ACTUALMENTE EN PERSONAL / TELECOM ARGENTINA',
    eyebrow: 'ARQUITECTURA · LIDERAZGO · CÓDIGO',
    hero: 'Modernizo plataformas. Diseño evolución. Lidero desde el código.',
    intro: 'Soy Lautaro Buson.',
    heroText: 'Tech Lead con más de 15 años en sistemas enterprise, combinando arquitectura, liderazgo técnico y desarrollo hands-on para llevar plataformas legacy hacia soluciones modernas y operables.',
    work: 'Explorar trabajo', cv: 'Descargar CV', linkedin: 'LinkedIn', github: 'GitHub',
    location: 'La Plata, Buenos Aires · Argentina',
    stats: [
      ['15+', 'Años de experiencia', 'Desde 2010 en sistemas enterprise'],
      ['6', 'Organizaciones principales', 'Banca, telecomunicaciones y salud'],
      ['TL', 'Liderazgo técnico', 'Arquitectura + delivery + código'],
    ],
    focusKicker: '01 / CURRENT FOCUS', focusTitle: 'Modernización sin perder contexto.',
    focusText: 'Field Manager evoluciona de Java 11 + JSP hacia Vue 3 y servicios Java 21/Spring Boot 3, mientras seguridad, CI/CD, OCP4 y observabilidad acompañan todo el recorrido.',
    journeyNote: 'No es un big-bang rewrite: legacy y nuevas arquitecturas conviven. El objetivo es reducir riesgo y mantener capacidad de evolución.',
    careerKicker: '02 / CAREER JOURNEY', careerTitle: 'Una trayectoria. Muchas evoluciones.',
    careerText: 'Desde Java/JSP y MVC hasta microservicios, microfrontends, identidad federada, cloud-native y frontend moderno.',
    currentRole: 'Rol actual', details: 'Contexto técnico',
    projectsKicker: '03 / SELECTED WORK', projectsTitle: 'Decisiones técnicas en contexto real.',
    projectsText: 'Casos que muestran cómo conecto arquitectura, producto, seguridad y ejecución.',
    challenge: 'Desafío', role: 'Rol', architecture: 'Arquitectura',
    stackKicker: '04 / TECH UNIVERSE', stackTitle: 'Herramientas que usé para resolver problemas reales.',
    stackText: 'Organizadas por contexto; no como una lista de logos aislados.',
    leadershipKicker: '05 / BEYOND CODE', leadershipTitle: 'Tech Lead significa mucho más que elegir tecnología.',
    educationKicker: '06 / CONTINUOUS LEARNING', educationTitle: 'Formación y aprendizaje continuo.',
    contactKicker: '07 / CONTACT', contactTitle: '¿Construimos algo que valga la pena?',
    contactText: 'Estoy abierto a conversar sobre liderazgo técnico, arquitectura, modernización y desarrollo de plataformas complejas.',
    name: 'Nombre', email: 'Email', message: 'Mensaje', send: 'Enviar mensaje', sending: 'Enviando…',
    contactHelp: 'El formulario usa la API Java cuando está desplegada. Si no, prepara un email en tu cliente de correo.',
    recruiter: 'Recruiter', engineer: 'Engineer',
    recruiterDesc: 'Impacto, roles y recorrido', engineerDesc: 'Arquitectura y detalle técnico',
    contactSuccess: 'Mensaje aceptado por la API. Gracias por contactarme.',
    contactError: 'No pude enviar el mensaje por la API. Podés escribirme directamente por email.',
    mailPrepared: 'Preparé un email con tu mensaje para que lo envíes desde tu aplicación de correo.',
    footer: 'Arquitectura · tecnología · personas · resultados',
  },
  en: {
    nav: ['Home', 'Career', 'Projects', 'Stack', 'Leadership', 'Education', 'Contact'],
    navIds: ['home', 'experience', 'projects', 'stack', 'leadership', 'education', 'contact'],
    current: 'CURRENTLY AT PERSONAL / TELECOM ARGENTINA',
    eyebrow: 'ARCHITECTURE · LEADERSHIP · CODE',
    hero: 'I modernize platforms. Design evolution. Lead through code.',
    intro: "I'm Lautaro Buson.",
    heroText: 'Tech Lead with 15+ years in enterprise systems, combining architecture, technical leadership and hands-on development to move legacy platforms toward modern, operable solutions.',
    work: 'Explore work', cv: 'Download résumé', linkedin: 'LinkedIn', github: 'GitHub',
    location: 'La Plata, Buenos Aires · Argentina',
    stats: [
      ['15+', 'Years of experience', 'Enterprise systems since 2010'],
      ['6', 'Main organizations', 'Banking, telecom and healthcare'],
      ['TL', 'Technical leadership', 'Architecture + delivery + code'],
    ],
    focusKicker: '01 / CURRENT FOCUS', focusTitle: 'Modernization without losing context.',
    focusText: 'Field Manager is evolving from Java 11 + JSP toward Vue 3 and Java 21/Spring Boot 3 services, while security, CI/CD, OCP4 and observability support the whole journey.',
    journeyNote: 'This is not a big-bang rewrite: legacy and new architectures coexist. The goal is to reduce risk while preserving the ability to evolve.',
    careerKicker: '02 / CAREER JOURNEY', careerTitle: 'One career. Many evolutions.',
    careerText: 'From Java/JSP and MVC to microservices, microfrontends, federated identity, cloud-native and modern frontend.',
    currentRole: 'Current role', details: 'Technical context',
    projectsKicker: '03 / SELECTED WORK', projectsTitle: 'Technical decisions in real context.',
    projectsText: 'Cases that show how I connect architecture, product, security and execution.',
    challenge: 'Challenge', role: 'Role', architecture: 'Architecture',
    stackKicker: '04 / TECH UNIVERSE', stackTitle: 'Tools used to solve real problems.',
    stackText: 'Organized by context, not as an isolated logo wall.',
    leadershipKicker: '05 / BEYOND CODE', leadershipTitle: 'Tech Lead means much more than choosing technology.',
    educationKicker: '06 / CONTINUOUS LEARNING', educationTitle: 'Education and continuous learning.',
    contactKicker: '07 / CONTACT', contactTitle: 'Shall we build something worth shipping?',
    contactText: 'Open to conversations about technical leadership, architecture, modernization and complex platform development.',
    name: 'Name', email: 'Email', message: 'Message', send: 'Send message', sending: 'Sending…',
    contactHelp: 'The form uses the Java API when deployed. Otherwise it prepares an email in your mail client.',
    recruiter: 'Recruiter', engineer: 'Engineer',
    recruiterDesc: 'Impact, roles and journey', engineerDesc: 'Architecture and technical detail',
    contactSuccess: 'The API accepted your message. Thanks for reaching out.',
    contactError: 'The API could not send the message. You can contact me directly by email.',
    mailPrepared: 'I prepared an email with your message for your mail application.',
    footer: 'Architecture · technology · people · outcomes',
  },
}

const t = computed(() => copy[ui.locale])
const cvHref = computed(() => `cv/Lautaro-Buson-${ui.locale.toUpperCase()}.html`)
const isEngineer = computed(() => ui.perspective === 'engineer')
const localized = (value: { es: string; en: string }) => value[ui.locale]

function selectExperience(item: Experience) {
  selectedExperience.value = item
}

function mailto() {
  const subject = encodeURIComponent(`Portfolio · ${contact.name || 'Contacto profesional'}`)
  const body = encodeURIComponent(`${contact.message}\n\n${contact.name}\n${contact.email}`)
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  contactState.value = 'mailto'
  contactMessage.value = t.value.mailPrepared
}

async function submitContact() {
  if (!contact.name.trim() || !contact.email.trim() || contact.message.trim().length < 20) return
  const api = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, '')
  if (!api) return mailto()
  contactState.value = 'sending'
  contactMessage.value = ''
  try {
    const response = await fetch(`${api}/api/contact`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: contact.name.trim(), email: contact.email.trim(), message: contact.message.trim() }),
    })
    const payload = await response.json().catch(() => ({}))
    if (!response.ok || payload.status !== 'sent') throw new Error('unavailable')
    contactState.value = 'success'
    contactMessage.value = t.value.contactSuccess
    contact.name = ''; contact.email = ''; contact.message = ''
  } catch {
    contactState.value = 'error'
    contactMessage.value = t.value.contactError
  }
}
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#home" aria-label="Lautaro Buson — Home"><span class="brand-mark">LB.</span><span>LAUTARO BUSON</span></a>
      <nav :class="['main-nav', { open: ui.menuOpen }]" aria-label="Principal">
        <a v-for="(label, index) in t.nav" :key="label" :href="`#${t.navIds[index]}`" @click="ui.menuOpen = false">{{ label }}</a>
      </nav>
      <div class="header-actions">
        <div class="mode-switch" role="group" aria-label="Portfolio perspective">
          <button :class="{ active: ui.perspective === 'recruiter' }" @click="ui.setPerspective('recruiter')">{{ t.recruiter }}</button>
          <button :class="{ active: ui.perspective === 'engineer' }" @click="ui.setPerspective('engineer')">&lt;/&gt; {{ t.engineer }}</button>
        </div>
        <div class="lang-switch" role="group" aria-label="Language">
          <button :aria-pressed="ui.locale === 'es'" @click="ui.setLocale('es')">ES</button><span>/</span><button :aria-pressed="ui.locale === 'en'" @click="ui.setLocale('en')">EN</button>
        </div>
        <button class="menu-toggle" :aria-expanded="ui.menuOpen" aria-label="Menu" @click="ui.menuOpen = !ui.menuOpen">☰</button>
      </div>
    </header>

    <main id="main">
      <section id="home" class="hero section-grid">
        <div class="hero-copy">
          <p class="kicker">{{ t.current }}</p>
          <p class="hero-eyebrow">{{ t.eyebrow }}</p>
          <h1>{{ t.hero }}</h1>
          <div class="identity"><span>{{ t.intro }}</span><strong>{{ profile.title }}</strong></div>
          <p class="hero-summary">{{ t.heroText }}</p>
          <div class="chip-row"><Tag v-for="item in profile.heroStack" :key="item" :value="item" /></div>
          <div class="hero-actions">
            <Button as="a" href="#projects" :label="t.work" />
            <Button as="a" :href="cvHref" target="_blank" severity="secondary" outlined :label="t.cv" />
            <Button as="a" :href="profile.linkedin" target="_blank" rel="noreferrer" severity="secondary" text :label="t.linkedin" />
            <Button as="a" :href="profile.github" target="_blank" rel="noreferrer" severity="secondary" text :label="t.github" />
          </div>
          <p class="location">◎ {{ t.location }}</p>
        </div>

        <div class="architecture-hero" aria-label="Abstract architecture diagram">
          <div class="terminal-label">LB / SYSTEMS THINKING <span>01 — ∞</span></div>
          <svg viewBox="0 0 620 520" role="img" aria-label="Layered architecture illustration">
            <defs>
              <linearGradient id="slab" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#8f58f2" stop-opacity=".38"/><stop offset=".55" stop-color="#161522"/><stop offset="1" stop-color="#20152f"/></linearGradient>
              <linearGradient id="edge" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#6551a3"/><stop offset=".5" stop-color="#c6a6ff"/><stop offset="1" stop-color="#31c6d4"/></linearGradient>
              <pattern id="grid" width="34" height="34" patternUnits="userSpaceOnUse" patternTransform="matrix(1 .42 -1 .42 310 210)"><path d="M34 0H0v34" fill="none" stroke="#9f82c8" stroke-opacity=".14"/></pattern>
            </defs>
            <rect x="8" y="75" width="604" height="420" fill="url(#grid)"/>
            <g fill="url(#slab)" stroke="url(#edge)"><path d="m95 340 215-108 215 108-215 108Z"/><path d="m128 248 182-91 182 91-182 91Z"/><path d="m165 155 145-72 145 72-145 72Z"/></g>
            <g fill="none" stroke="#bb93ff" stroke-opacity=".55" stroke-dasharray="4 6"><path d="M310 83v365M95 340l215-108 215 108M128 248l182-91 182 91"/></g>
            <g fill="#e7d9ff" font-family="monospace" font-size="12" letter-spacing="2"><text x="235" y="154">EXPERIENCE</text><text x="254" y="250">SERVICES</text><text x="234" y="346">ENTERPRISE CORE</text></g>
            <g fill="#52d7df"><circle cx="310" cy="83" r="4"/><circle cx="525" cy="340" r="4"/><circle cx="95" cy="340" r="4"/></g>
          </svg>
          <div class="art-status"><span></span> legacy → next · architecture in motion</div>
        </div>
      </section>

      <section class="stats-strip" aria-label="Professional overview">
        <div v-for="stat in t.stats" :key="stat[1]" class="stat"><strong>{{ stat[0] }}</strong><div><h2>{{ stat[1] }}</h2><p>{{ stat[2] }}</p></div></div>
      </section>

      <section class="section" aria-labelledby="focus-title">
        <div class="section-heading"><p class="kicker">{{ t.focusKicker }}</p><h2 id="focus-title">{{ t.focusTitle }}</h2><p>{{ t.focusText }}</p></div>
        <Card class="focus-card">
          <template #content>
            <div class="journey-grid">
              <article v-for="step in modernizationJourney" :key="step.n" class="journey-step">
                <span class="step-number">{{ step.n }}</span><div class="step-line"></div><h3>{{ step.title }}</h3><p>{{ ui.locale === 'es' ? step.es : step.en }}</p>
              </article>
            </div>
            <p class="journey-note">{{ t.journeyNote }}</p>
          </template>
        </Card>
      </section>

      <section id="experience" class="section" aria-labelledby="career-title">
        <div class="section-heading"><p class="kicker">{{ t.careerKicker }}</p><h2 id="career-title">{{ t.careerTitle }}</h2><p>{{ t.careerText }}</p></div>
        <div class="career-layout">
          <div class="career-tabs" role="tablist" aria-label="Career timeline">
            <button v-for="item in experience" :key="item.id" role="tab" :aria-selected="selectedExperience.id === item.id" :class="{ active: selectedExperience.id === item.id }" @click="selectExperience(item)">
              <span class="career-company">{{ item.short }}</span><span>{{ localized(item.period) }}</span>
            </button>
          </div>
          <Card class="career-detail" role="tabpanel">
            <template #content>
              <div class="detail-top"><span>{{ localized(selectedExperience.domain) }}</span><Tag v-if="selectedExperience.current" :value="t.currentRole" /></div>
              <h3>{{ localized(selectedExperience.role) }}</h3><h4>{{ selectedExperience.company }}</h4><p class="period">{{ localized(selectedExperience.period) }}</p>
              <p class="career-summary">{{ localized(selectedExperience.summary) }}</p>
              <ul><li v-for="item in (isEngineer ? selectedExperience.highlights : selectedExperience.highlights.slice(0, 3))" :key="localized(item)">{{ localized(item) }}</li></ul>
              <div class="chip-row detail-chips"><Tag v-for="item in selectedExperience.stack" :key="item" :value="item" severity="secondary" /></div>
            </template>
          </Card>
        </div>
      </section>

      <section id="projects" class="section" aria-labelledby="projects-title">
        <div class="section-heading"><p class="kicker">{{ t.projectsKicker }}</p><h2 id="projects-title">{{ t.projectsTitle }}</h2><p>{{ t.projectsText }}</p></div>
        <div class="case-grid">
          <Card v-for="(item, index) in caseStudies" :key="item.title" class="case-card">
            <template #header><div class="case-visual"><span>0{{ index + 1 }}</span><div class="case-nodes"><i></i><i></i><i></i><i></i></div></div></template>
            <template #title>{{ item.title }}</template>
            <template #subtitle>{{ item.company }} · {{ localized(item.category) }}</template>
            <template #content>
              <div class="chip-row"><Tag v-for="tech in item.stack" :key="tech" :value="tech" severity="secondary" /></div>
              <Accordion v-if="isEngineer" class="case-accordion">
                <AccordionPanel value="0"><AccordionHeader>{{ t.challenge }}</AccordionHeader><AccordionContent><p>{{ localized(item.challenge) }}</p></AccordionContent></AccordionPanel>
                <AccordionPanel value="1"><AccordionHeader>{{ t.role }}</AccordionHeader><AccordionContent><p>{{ localized(item.role) }}</p></AccordionContent></AccordionPanel>
                <AccordionPanel value="2"><AccordionHeader>{{ t.architecture }}</AccordionHeader><AccordionContent><p>{{ localized(item.architecture) }}</p></AccordionContent></AccordionPanel>
              </Accordion>
              <p v-else class="case-summary">{{ localized(item.challenge) }}</p>
            </template>
          </Card>
        </div>
      </section>

      <section id="stack" class="section" aria-labelledby="stack-title">
        <div class="section-heading"><p class="kicker">{{ t.stackKicker }}</p><h2 id="stack-title">{{ t.stackTitle }}</h2><p>{{ t.stackText }}</p></div>
        <div class="stack-grid"><article v-for="group in stackGroups" :key="localized(group.title)" class="stack-card"><h3>{{ localized(group.title) }}</h3><div class="stack-items"><span v-for="item in group.items" :key="item">{{ item }}</span></div></article></div>
      </section>

      <section v-if="isEngineer" class="section architecture-lab" aria-labelledby="architecture-lab-title">
        <div class="section-heading"><p class="kicker">ARCHITECTURE LAB</p><h2 id="architecture-lab-title">Legacy → services → platform → telemetry.</h2><p>{{ t.journeyNote }}</p></div>
        <div class="lab-flow" aria-label="Conceptual modernization architecture">
          <div><small>LEGACY</small><strong>Java 11 · JSP</strong><span>Spring Security</span></div><b>→</b>
          <div><small>EXPERIENCE</small><strong>Vue 3</strong><span>Pinia · PrimeVue</span></div><b>→</b>
          <div><small>SERVICES</small><strong>Java 21</strong><span>Spring Boot 3</span></div><b>→</b>
          <div><small>IDENTITY</small><strong>OAuth2 · JWT</strong><span>CyberArk · LDAP</span></div><b>→</b>
          <div><small>PLATFORM</small><strong>OCP4</strong><span>GitLab CI/CD</span></div><b>→</b>
          <div><small>OBSERVABILITY</small><strong>OpenTelemetry</strong><span>Dynatrace</span></div>
        </div>
      </section>

      <section id="leadership" class="section" aria-labelledby="leadership-title">
        <div class="section-heading"><p class="kicker">{{ t.leadershipKicker }}</p><h2 id="leadership-title">{{ t.leadershipTitle }}</h2></div>
        <div class="leadership-grid"><article v-for="(item, index) in leadership" :key="localized(item)"><span>0{{ index + 1 }}</span><p>{{ localized(item) }}</p></article></div>
      </section>

      <section id="education" class="section" aria-labelledby="education-title">
        <div class="section-heading"><p class="kicker">{{ t.educationKicker }}</p><h2 id="education-title">{{ t.educationTitle }}</h2></div>
        <div class="education-list"><article v-for="item in education" :key="item.institution + item.period"><span>{{ item.period }}</span><div><h3>{{ item.institution }}</h3><p>{{ localized(item.title) }}</p></div></article></div>
      </section>

      <section id="contact" class="section contact-section" aria-labelledby="contact-title">
        <div class="contact-copy"><p class="kicker">{{ t.contactKicker }}</p><h2 id="contact-title">{{ t.contactTitle }}</h2><p>{{ t.contactText }}</p><div class="contact-links"><a :href="`mailto:${profile.email}`">{{ profile.email }}</a><a :href="profile.linkedin" target="_blank" rel="noreferrer">LinkedIn ↗</a><a :href="profile.github" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
        <form class="contact-form" @submit.prevent="submitContact">
          <label>{{ t.name }}<InputText v-model="contact.name" required minlength="2" maxlength="100" autocomplete="name" /></label>
          <label>{{ t.email }}<InputText v-model="contact.email" type="email" required maxlength="254" autocomplete="email" /></label>
          <label>{{ t.message }}<Textarea v-model="contact.message" required minlength="20" maxlength="3000" rows="6" autoResize /></label>
          <Button type="submit" :label="contactState === 'sending' ? t.sending : t.send" :loading="contactState === 'sending'" />
          <small>{{ t.contactHelp }}</small>
          <Message v-if="contactMessage" :severity="contactState === 'success' ? 'success' : contactState === 'error' ? 'error' : 'info'" :closable="false">{{ contactMessage }}</Message>
          <button v-if="contactState === 'error'" type="button" class="text-action" @click="mailto">{{ profile.email }} ↗</button>
        </form>
      </section>
    </main>

    <footer><div><span class="brand-mark">LB.</span><span>{{ profile.name }}</span></div><p>{{ t.footer }}</p><span>{{ new Date().getFullYear() }}</span></footer>
  </div>
</template>
