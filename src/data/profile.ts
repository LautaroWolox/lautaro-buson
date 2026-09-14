export type Locale = 'es' | 'en'
export type Localized = Record<Locale, string>
export const l = (es: string, en: string): Localized => ({ es, en })

export const profile = {
  name: 'Lautaro Buson',
  title: 'Tech Lead · Software Architect · Full Stack Engineer',
  location: 'La Plata, Buenos Aires, Argentina',
  email: 'busonlautaro@gmail.com',
  linkedin: 'https://www.linkedin.com/in/laubuson',
  github: 'https://github.com/mlbuson',
  summary: l(
    'Más de 15 años conectando arquitectura, liderazgo técnico y desarrollo hands-on en sistemas enterprise. Especializado en modernización de plataformas, Java, Spring, microservicios, seguridad, frontend moderno, CI/CD, OpenShift y observabilidad.',
    'Over 15 years connecting architecture, technical leadership and hands-on development in enterprise systems. Specialized in platform modernization, Java, Spring, microservices, security, modern frontend, CI/CD, OpenShift and observability.'
  ),
  heroStack: ['Java', 'Spring Boot', 'Vue 3', 'Microservices', 'OCP4', 'OpenTelemetry'],
}

export interface Experience {
  id: string
  company: string
  short: string
  role: Localized
  period: Localized
  domain: Localized
  summary: Localized
  highlights: Localized[]
  stack: string[]
  current?: boolean
}

export const experience: Experience[] = [
  {
    id: 'telecom', company: 'Personal / Telecom Argentina', short: 'Telecom', current: true,
    role: l('Tech Lead', 'Tech Lead'), period: l('oct 2022 — actualidad', 'Oct 2022 — present'),
    domain: l('Telecomunicaciones · Field Manager', 'Telecommunications · Field Manager'),
    summary: l(
      'Liderazgo técnico de Field Manager, modernizando una plataforma enterprise mientras conviven arquitectura legacy, frontend moderno, microservicios y workloads en OCP4.',
      'Technical leadership of Field Manager, modernizing an enterprise platform while legacy architecture, modern frontend, microservices and OCP4 workloads coexist.'
    ),
    highlights: [
      l('Evolución de monolitos y módulos existentes en Java 11, JSP y Spring Security.', 'Evolution of existing Java 11, JSP and Spring Security monoliths and modules.'),
      l('Migración progresiva de pantallas JSP/legacy a Vue 3, Pinia y PrimeVue.', 'Progressive migration of JSP/legacy screens to Vue 3, Pinia and PrimeVue.'),
      l('Migración de módulos internos a microservicios Java 21 con Spring Boot 3; convivencia con servicios Java 17/21.', 'Migration of internal modules to Java 21 microservices with Spring Boot 3; coexistence with Java 17/21 services.'),
      l('Evolución y despliegue de monolitos y workloads hacia OpenShift 4 / OCP4.', 'Evolution and deployment of monoliths and workloads toward OpenShift 4 / OCP4.'),
      l('Autenticación federada con OAuth2, JWT, CyberArk y fallback LDAP; desarrollo del microservicio identity.', 'Federated authentication with OAuth2, JWT, CyberArk and LDAP fallback; development of the identity microservice.'),
      l('Integración segura con api-sfs-mule mediante OAuth2.', 'Secure integration with api-sfs-mule using OAuth2.'),
      l('Observabilidad con Dynatrace y OpenTelemetry dentro del proceso de modernización.', 'Observability with Dynatrace and OpenTelemetry as part of the modernization process.'),
      l('CI/CD con GitLab, despliegues en OCP4, Nginx en flujos de proxy y colaboración estrecha con DevOps.', 'GitLab CI/CD, OCP4 deployments, Nginx in proxy flows and close collaboration with DevOps.'),
    ],
    stack: ['Java 11', 'Java 17', 'Java 21', 'JSP', 'Spring Security', 'Spring Boot 3', 'Vue 3', 'Pinia', 'PrimeVue', 'OAuth2', 'JWT', 'CyberArk', 'LDAP', 'GitLab CI/CD', 'OpenShift 4 / OCP4', 'Nginx', 'Dynatrace', 'OpenTelemetry'],
  },
  {
    id: 'calegroup', company: 'CaleGroup', short: 'CaleGroup',
    role: l('Tech Lead', 'Tech Lead'), period: l('jun 2021 — sep 2022', 'Jun 2021 — Sep 2022'),
    domain: l('Salud digital', 'Digital healthcare'),
    summary: l('Liderazgo técnico de una plataforma de atención médica con videollamadas, recetas digitales e integración con farmacias.', 'Technical leadership for a healthcare platform with video consultations, digital prescriptions and pharmacy integrations.'),
    highlights: [
      l('Migración y desarrollo con .NET Core y Vue.js.', 'Migration and development with .NET Core and Vue.js.'),
      l('Videollamadas médicas con OpenVidu / WebRTC.', 'Medical video consultations with OpenVidu / WebRTC.'),
      l('Integración con red de farmacias y receta digital.', 'Pharmacy network and digital prescription integration.'),
      l('Refactor de fichas clínicas, mejoras de UX, infraestructura y soporte 24/7.', 'Clinical record refactoring, UX improvements, infrastructure and 24/7 support.'),
    ],
    stack: ['.NET Core', 'Vue.js', 'OpenVidu', 'WebRTC'],
  },
  {
    id: 'ibm', company: 'IBM', short: 'IBM',
    role: l('Tech Lead', 'Tech Lead'), period: l('mar 2020 — ene 2021', 'Mar 2020 — Jan 2021'),
    domain: l('Banca móvil · ICBC', 'Mobile banking · ICBC'),
    summary: l('Tech Lead de la célula responsable del login social de la app móvil de ICBC y coordinación con células dependientes.', 'Tech Lead for the team responsible for social login in the ICBC mobile app and coordination with dependent teams.'),
    highlights: [
      l('Login con Google, Facebook y Apple.', 'Google, Facebook and Apple login.'),
      l('Node.js 14, Angular 11 e Ionic 5.', 'Node.js 14, Angular 11 and Ionic 5.'),
      l('Migración de servicios heredados hacia microservicios.', 'Migration of legacy services toward microservices.'),
      l('Participación en el diseño inicial de microfrontends para App YOY.', 'Participation in the initial microfrontend design for App YOY.'),
    ],
    stack: ['Node.js 14', 'Angular 11', 'Ionic 5', 'Microservices', 'Microfrontends'],
  },
  {
    id: 'bbva', company: 'BBVA Argentina', short: 'BBVA',
    role: l('Tech Lead & Dev', 'Tech Lead & Dev'), period: l('mar 2015 — feb 2020', 'Mar 2015 — Feb 2020'),
    domain: l('Banca digital · Identidad', 'Digital banking · Identity'),
    summary: l('Arquitectura y desarrollo de experiencias bancarias web/mobile, biometría, identidad digital y migración de sistemas hacia microservicios.', 'Architecture and development of banking web/mobile experiences, biometrics, digital identity and migration toward microservices.'),
    highlights: [
      l('React web + React Native mobile para soluciones de validación biométrica.', 'React web + React Native mobile for biometric validation solutions.'),
      l('VeriFinger y VeriLook para desbloqueo de cajas de ahorro.', 'VeriFinger and VeriLook for savings account unlocking.'),
      l('RENAPER: escaneo DNI/DNE, lectura MRZ, OCR y firma digital.', 'RENAPER: DNI/DNE scanning, MRZ reading, OCR and digital signature.'),
      l('Java 11 y Spring Boot con Oracle y MongoDB; seguros y microseguros.', 'Java 11 and Spring Boot with Oracle and MongoDB; insurance and microinsurance.'),
      l('Migración de Frances GO y Homebanking hacia microservicios.', 'Migration of Frances GO and Homebanking toward microservices.'),
      l('Jenkins, OpenShift y Terraform para CI/CD y despliegues.', 'Jenkins, OpenShift and Terraform for CI/CD and deployments.'),
    ],
    stack: ['React', 'React Native', 'Java 11', 'Spring Boot', 'Oracle', 'MongoDB', 'VeriFinger', 'VeriLook', 'RENAPER', 'OCR', 'Jenkins', 'OpenShift', 'Terraform'],
  },
  {
    id: 'hipotecario', company: 'Banco Hipotecario', short: 'Hipotecario',
    role: l('Dev / Tech Lead', 'Dev / Tech Lead'), period: l('abr 2013 — feb 2015', 'Apr 2013 — Feb 2015'),
    domain: l('Banca empresas', 'Business banking'),
    summary: l('Desarrollo y liderazgo técnico de aplicaciones bancarias internas y OfficeBanking Empresas.', 'Development and technical leadership for internal banking applications and OfficeBanking Empresas.'),
    highlights: [
      l('Java 8, Spring MVC, Spring Security y JDBC.', 'Java 8, Spring MVC, Spring Security and JDBC.'),
      l('Frontend mixto con PrimeFaces y Angular 1.5.', 'Mixed frontend with PrimeFaces and Angular 1.5.'),
      l('Implementación de eCheq electrónico para OfficeBanking Empresas.', 'Electronic eCheq implementation for OfficeBanking Empresas.'),
      l('Módulos de créditos hipotecarios y consulta de saldos.', 'Mortgage loan modules and balance inquiries.'),
      l('Diseño de arquitectura para futura evolución hacia microservicios.', 'Architecture design for future evolution toward microservices.'),
    ],
    stack: ['Java 8', 'Spring MVC', 'Spring Security', 'JDBC', 'PrimeFaces', 'Angular 1.5'],
  },
  {
    id: 'accenture', company: 'Accenture Argentina', short: 'Accenture',
    role: l('Desarrollador', 'Software Developer'), period: l('mar 2010 — mar 2013', 'Mar 2010 — Mar 2013'),
    domain: l('Servicios · MetroGas', 'Utilities · MetroGas'),
    summary: l('Desarrollo, mantenimiento y evolución del portal de autogestión de MetroGas.', 'Development, maintenance and evolution of the MetroGas self-service portal.'),
    highlights: [
      l('Migración progresiva de Java/JDK 1.4 a Java 6.', 'Progressive migration from Java/JDK 1.4 to Java 6.'),
      l('JSP, Struts 1.x, JSTL, JavaScript, Oracle DB, Apache Tomcat, JBoss 4.x y WebLogic.', 'JSP, Struts 1.x, JSTL, JavaScript, Oracle DB, Apache Tomcat, JBoss 4.x and WebLogic.'),
      l('Login por DNI/número de cliente, facturación histórica, reclamos y pagos online.', 'Login by national ID/customer number, billing history, claims and online payments.'),
      l('Seguridad: AES/3DES, SHA-1/SHA-256, anonimización, CSRF y tokenización de transacciones.', 'Security: AES/3DES, SHA-1/SHA-256, anonymization, CSRF and transaction tokenization.'),
    ],
    stack: ['Java 1.4 → 6', 'JSP', 'Struts 1.x', 'JSTL', 'JavaScript', 'Oracle', 'Tomcat', 'JBoss 4.x', 'WebLogic'],
  },
  {
    id: 'freelance', company: 'Freelance', short: 'Freelance',
    role: l('Software Engineer', 'Software Engineer'), period: l('jul 2014 — jun 2025', 'Jul 2014 — Jun 2025'),
    domain: l('Desarrollo independiente', 'Independent development'),
    summary: l('Más de una década desarrollando soluciones web y mobile a medida para distintos sectores.', 'More than a decade building custom web and mobile solutions across different industries.'),
    highlights: [
      l('Proyectos con Vue.js, Java, SQL Server, AngularJS y React Native.', 'Projects with Vue.js, Java, SQL Server, AngularJS and React Native.'),
      l('Diseño de soluciones a medida y aplicación de patrones de arquitectura orientados a escalabilidad y rendimiento.', 'Custom solution design and architecture patterns focused on scalability and performance.'),
    ],
    stack: ['Vue.js', 'Java', 'SQL Server', 'AngularJS', 'React Native'],
  },
]

export const modernizationJourney = [
  { n: '01', title: 'Java 11 + JSP', es: 'Monolitos y base enterprise', en: 'Monoliths and enterprise base' },
  { n: '02', title: 'Vue 3', es: 'Pinia · PrimeVue · migración UI', en: 'Pinia · PrimeVue · UI migration' },
  { n: '03', title: 'Java 21 + Spring Boot 3', es: 'APIs y microservicios', en: 'APIs and microservices' },
  { n: '04', title: 'OAuth2 · JWT', es: 'CyberArk · LDAP · identity', en: 'CyberArk · LDAP · identity' },
  { n: '05', title: 'OpenShift 4 / OCP4', es: 'GitLab CI/CD · workloads', en: 'GitLab CI/CD · workloads' },
  { n: '06', title: 'Observability', es: 'OpenTelemetry · Dynatrace', en: 'OpenTelemetry · Dynatrace' },
]

export const caseStudies = [
  {
    company: 'PERSONAL / TELECOM', title: 'Field Manager Modernization',
    category: l('Modernización enterprise', 'Enterprise modernization'),
    challenge: l('Modernizar una plataforma enterprise sin detener la evolución funcional mientras conviven monolitos, pantallas JSP y servicios de distintas generaciones.', 'Modernize an enterprise platform while functional evolution continues and monoliths, JSP screens and services from different generations coexist.'),
    role: l('Tech Lead de Field Manager: arquitectura, dirección técnica, coordinación con DevOps y desarrollo hands-on.', 'Field Manager Tech Lead: architecture, technical direction, DevOps coordination and hands-on development.'),
    architecture: l('Java 11/JSP/Spring Security → Vue 3/Pinia/PrimeVue; módulos a Java 21/Spring Boot 3; Java 17/21; OAuth2/JWT/CyberArk/LDAP; OCP4; GitLab CI/CD; OpenTelemetry y Dynatrace.', 'Java 11/JSP/Spring Security → Vue 3/Pinia/PrimeVue; modules to Java 21/Spring Boot 3; Java 17/21; OAuth2/JWT/CyberArk/LDAP; OCP4; GitLab CI/CD; OpenTelemetry and Dynatrace.'),
    stack: ['Java', 'JSP', 'Vue 3', 'Spring Boot 3', 'OCP4', 'OpenTelemetry'],
  },
  {
    company: 'BBVA ARGENTINA', title: 'Digital Banking & Identity',
    category: l('Banca digital e identidad', 'Digital banking & identity'),
    challenge: l('Integrar biometría e identidad digital en canales bancarios web/mobile durante la evolución hacia microservicios.', 'Integrate biometrics and digital identity into web/mobile banking channels during the evolution toward microservices.'),
    role: l('Tech Lead & Dev en canales digitales, identidad, seguros y microseguros.', 'Tech Lead & Dev across digital channels, identity, insurance and microinsurance.'),
    architecture: l('React/React Native, VeriFinger/VeriLook, RENAPER, OCR, Java 11/Spring Boot, Oracle/MongoDB, Jenkins, OpenShift y Terraform.', 'React/React Native, VeriFinger/VeriLook, RENAPER, OCR, Java 11/Spring Boot, Oracle/MongoDB, Jenkins, OpenShift and Terraform.'),
    stack: ['React', 'React Native', 'Java 11', 'Spring Boot', 'OpenShift'],
  },
  {
    company: 'IBM / ICBC', title: 'Mobile Social Login',
    category: l('Identidad móvil', 'Mobile identity'),
    challenge: l('Integrar proveedores de login social y coordinar dependencias entre células para una app bancaria móvil.', 'Integrate social login providers and coordinate dependencies across teams for a mobile banking app.'),
    role: l('Tech Lead de la célula de login social.', 'Tech Lead for the social login team.'),
    architecture: l('Google, Facebook y Apple login con Node.js 14, Angular 11 e Ionic 5; evolución de servicios heredados a microservicios y participación en microfrontends.', 'Google, Facebook and Apple login with Node.js 14, Angular 11 and Ionic 5; legacy service evolution to microservices and participation in microfrontends.'),
    stack: ['Node.js 14', 'Angular 11', 'Ionic 5', 'Microservices'],
  },
  {
    company: 'CALEGROUP', title: 'Healthcare Platform',
    category: l('Salud conectada', 'Connected healthcare'),
    challenge: l('Conectar videollamadas, fichas clínicas, recetas digitales y farmacias en una plataforma de salud.', 'Connect video consultations, clinical records, digital prescriptions and pharmacies in a healthcare platform.'),
    role: l('Tech Lead con participación en desarrollo, UX, infraestructura y operación.', 'Tech Lead involved in development, UX, infrastructure and operations.'),
    architecture: l('.NET Core, Vue.js y OpenVidu/WebRTC, con integraciones de receta digital y farmacias.', '.NET Core, Vue.js and OpenVidu/WebRTC, with digital prescription and pharmacy integrations.'),
    stack: ['.NET Core', 'Vue.js', 'OpenVidu', 'WebRTC'],
  },
]

export const stackGroups = [
  { title: l('Backend', 'Backend'), items: ['Java 6 / 8 / 11 / 17 / 21', 'Spring Boot 3', 'Spring MVC', 'Spring Security', 'Jakarta EE', 'Node.js', '.NET Core'] },
  { title: l('Frontend', 'Frontend'), items: ['Vue 3', 'Pinia', 'PrimeVue', 'React', 'React Native', 'Angular 11', 'AngularJS', 'Ionic 5', 'JSP', 'PrimeFaces'] },
  { title: l('Arquitectura', 'Architecture'), items: ['Microservices', 'Microfrontends', 'REST APIs', 'Legacy modernization', 'MVC'] },
  { title: l('Seguridad e identidad', 'Security & identity'), items: ['OAuth2', 'JWT', 'CyberArk', 'LDAP', 'Spring Security', 'Biometrics', 'RENAPER', 'AES/3DES', 'CSRF'] },
  { title: l('DevOps / Cloud', 'DevOps / Cloud'), items: ['OpenShift / OCP4', 'GitLab CI/CD', 'Jenkins', 'Terraform', 'Docker', 'Nginx', 'JBoss', 'WebLogic', 'Tomcat'] },
  { title: l('Datos', 'Data'), items: ['Oracle', 'MongoDB', 'SQL Server', 'JDBC'] },
  { title: l('Observabilidad', 'Observability'), items: ['OpenTelemetry', 'Dynatrace'] },
]

export const leadership = [
  l('Arquitectura conectada al negocio y a las restricciones reales del sistema.', 'Architecture connected to business needs and real system constraints.'),
  l('Liderazgo técnico cercano al código: decisiones, revisión, acompañamiento y ejecución.', 'Technical leadership close to the code: decisions, reviews, guidance and execution.'),
  l('Modernización progresiva: reducir riesgo mientras legacy y nuevas arquitecturas conviven.', 'Progressive modernization: reduce risk while legacy and new architectures coexist.'),
  l('Seguridad e identidad como parte de la arquitectura, no como agregado final.', 'Security and identity as part of architecture, not an afterthought.'),
  l('Colaboración con DevOps, CI/CD y operación para llevar decisiones hasta producción.', 'Collaboration with DevOps, CI/CD and operations to carry decisions into production.'),
]

export const education = [
  { institution: 'Pontificia Universidad Católica Argentina', title: l('Licenciatura en Sistemas', 'Information Systems degree program'), period: '2019–2025' },
  { institution: 'Universidad Nacional Autónoma de México (UNAM)', title: l('Java Programming and Software Engineering Fundamentals Specialization', 'Java Programming and Software Engineering Fundamentals Specialization'), period: '2023' },
  { institution: 'CaleGroup / Trailhead Academy', title: l('Capacitación interna en MuleSoft para desarrolladores Salesforce', 'Internal MuleSoft training for Salesforce developers'), period: '2022' },
  { institution: 'EducacionIT', title: l('Carrera Java Developer', 'Java Developer program'), period: '2021–2022' },
  { institution: 'Universidad Siglo 21', title: l('Hacking Ético, Seguridad Informática y de Sistemas', 'Ethical Hacking, Information and Systems Security'), period: '2017' },
]
