import type { Dict } from './en'

const es: Dict = {
  meta: {
    langName: 'Español',
    htmlLang: 'es',
  },

  a11y: {
    verifyLabel: 'Cómo se verifica esta afirmación',
    sections: 'Secciones',
    language: 'Idioma',
  },

  nav: {
    services: 'Qué hacemos',
    method: 'Cómo verificamos',
    sample: 'Muestra',
    pricing: 'Precios',
    faq: 'Preguntas',
    contact: 'Contacto',
  },

  hero: {
    eyebrow: 'DueBench · Mesa de verificación independiente',
    title: 'Mostramos nuestro trabajo.',
    lede1:
      'Armamos listas de contactos y revisamos código para fundadores de software. La diferencia: todo lo que te entregamos trae su prueba adjunta — de dónde salió, cuándo lo verificamos y cómo.',
    lede2:
      'Nada de cajas negras ni «confía en nosotros». Si no podemos probar algo, lo señalamos — y tú ves la señal.',
    proofNote:
      'Cada fila y cada hallazgo llevan un enlace a la fuente, una fecha de verificación y el método usado. Baja para ver exactamente cómo se ve eso.',
    ctaPrimary: 'Pide una muestra gratis de 10 contactos',
    ctaSecondary: 'Consulta por una revisión de código',
    feed: {
      title: 'VERIFICACIÓN EN VIVO — A ESTO NOS DEDICAMOS TODO EL DÍA',
      checking: 'verificando',
      valid: 'VERIFICADO',
      flagged: 'SEÑALADO',
      rows: [
        { label: 'Dirección de correo', detail: 'le preguntamos directo a su servidor de correo', ok: true },
        { label: 'Página de empleo', detail: 'reverificada hoy, sigue activa', ok: true },
        { label: 'Afirmación de producto', detail: 'con enlace a la fuente', ok: true },
        { label: 'Dominio catch-all', detail: 'el servidor no confirma — y lo decimos', ok: false },
      ],
      note: 'Una señal no es un fracaso. Es que te decimos la verdad en vez de adivinar.',
    },
  },

  services: {
    kicker: 'Qué hacemos',
    title: 'Dos formas de evitarte malas sorpresas',
    lead: {
      no: 'SERVICIO 01',
      title: 'Listas de contactos que no rebotan',
      sub: 'Empresas reales, personas reales, listas para escribirles desde el día uno — investigadas a mano, no exportadas de una base de datos vieja.',
      bullets: [
        'Cada empresa verificada una por una, con enlace a la prueba y chequeo de vigencia el mismo día',
        'Cada correo verificado con su servidor — y cuando el servidor no responde, te lo decimos en vez de adivinar',
        'Una línea de apertura personalizada para cada empresa, basada en algo cierto sobre ella',
        'Envías tú, no nosotros — tu dominio, tu voz, tu control',
      ],
      tickNote:
        'Las páginas de empleo, notas de financiamiento y afirmaciones de producto se reverifican el día que sale la lista. Lo que ya caducó se descarta, no se entrega.',
    },
    audit: {
      no: 'SERVICIO 02',
      title: 'Revisiones de código en lenguaje claro',
      sub: 'Para fundadores que construyeron rápido con herramientas de IA — y compradores a punto de pagar cinco cifras por la app de otro.',
      bullets: [
        'Leemos tu código como lo haría un atacante — no solo corremos un escáner y copiamos la salida',
        'Cada hallazgo muestra el archivo y la línea exactos, por qué importa y cómo resolverlo',
        'Un resumen que puedes usar sin tener formación en seguridad',
        'Corriges los problemas y los reverificamos — incluido en los planes más completos',
      ],
    },
    railNote:
      '¿Por qué estos dos? La misma habilidad, en dos momentos: verificar a quién le vendes y verificar qué entregas o compras. Ambos son debida diligencia — de ahí el nombre.',
  },

  method: {
    kicker: 'Cómo verificamos',
    title: 'Tres reglas simples, sin excepciones',
    gates: [
      {
        name: 'Regla 1 — Muestra la fuente.',
        text: 'Si no podemos mostrarte de dónde salió un dato, no lo afirmamos. Una afirmación sin fuente se descarta, por creíble que suene.',
      },
      {
        name: 'Regla 2 — Verifícalo al día.',
        text: 'Los datos caducan rápido: los puestos se llenan, las páginas se dan de baja. Todo lo sensible al tiempo se reverifica el día de la entrega, no el día que lo encontramos.',
      },
      {
        name: 'Regla 3 — Señala lo que no podemos probar.',
        text: 'Algunas cosas no se pueden confirmar desde afuera. Esas se entregan con una señal clara y una nota de qué pudimos verificar y qué no — nunca tienes que adivinar qué filas son sólidas.',
      },
    ],
    legendTitle: 'Las cuatro etiquetas que verás en tu entrega',
    legend: [
      { code: 'VALID', ok: true, text: 'Confirmado en la fuente — p. ej., el servidor de correo aceptó esta dirección exacta' },
      { code: 'LIVE', ok: true, text: 'Reverificado el día de la entrega — la página, el puesto o la afirmación sigue vigente' },
      { code: 'CATCHALL', ok: false, text: 'El dominio acepta todo el correo, así que la dirección no se puede confirmar del todo — señalada, nunca vendida como verificada' },
      { code: 'UNVERIFIED', ok: false, text: 'No se pudo confirmar desde afuera — lo decimos con honestidad, nunca se cuenta como verificado' },
    ],
    railNote:
      'El límite honesto: algunos servidores de correo se niegan a responder, algunas afirmaciones viven detrás de un inicio de sesión. Nuestra regla es simple — la señal va pegada a la fila. Preferimos que veas UNVERIFIED a que creas una suposición.',
  },

  sample: {
    kicker: 'Muestra',
    title: 'Mira exactamente lo que recibes',
    intro:
      'Dos filas de un papel de trabajo real: las empresas son ficticias, pero el formato y las verificaciones son exactamente lo que llega a tu bandeja.',
    wpTitle: 'DUEBENCH · PAPEL DE TRABAJO DE LISTA DE CONTACTOS — EXTRACTO',
    specimen: 'MUESTRA',
    cols: { account: 'Empresa', contact: 'Contacto', status: 'Estado del correo', hook: 'Línea de apertura · fuente' },
    rows: [
      {
        company: 'Northgate Payroll',
        companyMeta: 'SaaS · 40 personas',
        contact: 'M. Reyes',
        contactMeta: 'Responsable de RevOps',
        ok: true,
        status: 'VALID · verificado 2026-07-12',
        hook: 'Están contratando a su primer representante de ventas (página de empleo, verificada el día de la entrega)',
        hookSrc: 'fuente: URL de empleo · LIVE',
      },
      {
        company: 'Harbor & Ledger',
        companyMeta: 'API fintech · 25 personas',
        contact: 'D. Osei',
        contactMeta: 'Cofundador',
        ok: false,
        status: 'CATCHALL · declarado',
        hook: 'En proceso de certificación SOC 2, según su página de confianza',
        hookSrc: 'fuente: URL del centro de confianza · LIVE',
      },
    ],
    railNote:
      'Mira la segunda fila: esa señal CATCHALL es el producto. Una exportación de base de datos te habría vendido esa dirección como «verificada» — nosotros te decimos qué es en realidad, y cómo abordarla de todos modos.',
  },

  pricing: {
    kicker: 'Precios',
    title: 'Tarifas fijas, cotizadas antes de empezar',
    auditTitle: 'Revisiones de código',
    cols: { tier: 'Plan', scope: 'Qué incluye', fee: 'Tarifa' },
    tiers: [
      {
        name: 'Revisión rápida',
        time: '2 días hábiles',
        scope: 'Las partes más riesgosas de una app, hallazgos principales con sus soluciones',
        fee: '$350',
      },
      {
        name: 'Auditoría completa',
        time: '3–4 días hábiles',
        scope: 'Revisión completa, lista priorizada de correcciones y una reverificación gratis después de que corrijas',
        fee: '$750',
      },
      {
        name: 'Revisión para compradores',
        time: '4–5 días hábiles',
        scope: '¿Vas a comprar una app? Revisamos seguridad, salud del código y riesgos de traspaso antes de que transfieras el dinero',
        fee: '$1,200',
      },
    ],
    leadsTitle: 'Listas de contactos',
    leadsText:
      'Cotizadas a tarifa fija por proyecto, según el tamaño de la lista y la profundidad de verificación. Mientras juntamos nuestros primeros casos públicos, las condiciones piloto son deliberadamente generosas: una muestra gratis de 10 contactos a cambio de un testimonio breve — si te resulta útil.',
    freeNote:
      'Gratis de verdad: sin firma, sin tarjeta. Si la muestra no te sirve, no debes nada — ni siquiera el testimonio.',
    railNote:
      '¿Por qué tan generoso? Una práctica nueva gana confianza mostrando trabajo, no presumiendo logos. Preferimos cambiar una muestra por una frase de retroalimentación honesta antes que fingir un historial que todavía no hemos publicado.',
  },

  faq: {
    kicker: 'Respuestas directas',
    title: 'Lo que suelen preguntar los compradores',
    items: [
      {
        q: '¿Con quién estoy trabajando en realidad?',
        a: 'Una práctica pequeña e independiente: una sola mesa responsable, pensada para trabajar de forma asíncrona. Hablas con la persona que hace el trabajo, no con un gestor de cuentas. Usamos herramientas de investigación modernas como parte del oficio, pero cada entrega se verifica y se aprueba a mano antes de salir.',
      },
      {
        q: '¿Ustedes envían los correos en frío por mí?',
        a: 'No, a propósito. Tú conservas el botón de enviar, la reputación de tu dominio y la última palabra sobre cada frase. Te entregamos la lista verificada, las líneas de apertura y una secuencia lista para usar — más una guía simple para el calentamiento del dominio, los límites diarios y el manejo de respuestas.',
      },
      {
        q: '¿Garantizan respuestas, o una auditoría «100 % segura»?',
        a: 'No — y desconfía de quien lo haga. Lo que garantizamos es que el trabajo es real: direcciones verificadas o señaladas, afirmaciones con fuente, hallazgos reproducibles. Las tasas de respuesta se cotizan como rangos honestos de la industria, y una auditoría reduce el riesgo — no puede certificar que no existan errores.',
      },
      {
        q: '¿Cómo empezamos?',
        a: 'Escribe una línea sobre lo que necesitas a la dirección de abajo: un tipo de cliente objetivo para una lista de muestra, o un repositorio que quieras que revisemos. Las listas empiezan con una muestra gratis de 10 contactos; las revisiones de código empiezan con una llamada breve o unas preguntas asíncronas, tú eliges.',
      },
    ],
    railNote:
      'Regla de la casa: si la respuesta honesta a la pregunta de un comprador nos cuesta el trato, la respuesta no cambia. Sale más barato perder un trato que deber una disculpa.',
  },

  contact: {
    kicker: 'Contacto',
    title: 'Envía la primera línea',
    text:
      'Con una frase sobre lo que necesitas basta: un tipo de cliente para una lista de muestra, o un repositorio que quieras que revisemos. Respondemos dentro de un día hábil.',
    email: 'hello@duebench.com',
  },

  footer: {
    copyright: '© 2026 DueBench · duebench.com',
    note: 'Esta página anota sus propias afirmaciones — pasa el cursor sobre cualquier',
  },
}

export default es
