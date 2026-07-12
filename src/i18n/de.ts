import type { Dict } from './en'

const de: Dict = {
  meta: {
    langName: 'Deutsch',
    htmlLang: 'de',
  },

  a11y: {
    verifyLabel: 'Wie diese Aussage geprüft wird',
    sections: 'Abschnitte',
    language: 'Sprache',
  },

  nav: {
    services: 'Was wir tun',
    method: 'Wie wir prüfen',
    sample: 'Beispiel',
    pricing: 'Preise',
    faq: 'Fragen',
    contact: 'Kontakt',
  },

  hero: {
    eyebrow: 'DueBench · Unabhängige Prüfstelle',
    title: 'Wir zeigen unsere Arbeit.',
    lede1:
      'Wir erstellen Lead-Listen und prüfen Code für Software-Gründer. Der Unterschied: Alles, was wir Ihnen liefern, kommt mit Nachweis – woher es stammt, wann wir es geprüft haben und wie.',
    lede2:
      'Keine Blackbox, kein „Vertrauen Sie uns“. Können wir etwas nicht belegen, kennzeichnen wir es – und Sie sehen die Kennzeichnung.',
    proofNote:
      'Jede Zeile und jeder Befund kommt mit Quellenlink, Prüfdatum und verwendeter Methode. Scrollen Sie nach unten, um genau zu sehen, wie das aussieht.',
    ctaPrimary: 'Kostenlose 10-Lead-Probe anfordern',
    ctaSecondary: 'Nach einem Code-Check fragen',
    feed: {
      title: 'LIVE-CHECK — WAS WIR DEN GANZEN TAG TUN',
      checking: 'wird geprüft',
      valid: 'VERIFIZIERT',
      flagged: 'MARKIERT',
      rows: [
        { label: 'E-Mail-Adresse', detail: 'direkt beim Mailserver nachgefragt', ok: true },
        { label: 'Karriereseite', detail: 'heute erneut geprüft, weiterhin aktiv', ok: true },
        { label: 'Produktaussage', detail: 'Quellenlink beigefügt', ok: true },
        { label: 'Catch-all-Domain', detail: 'Server bestätigt nicht – wir sagen es ehrlich', ok: false },
      ],
      note: 'Eine Markierung ist kein Makel. Sie heißt: Wir sagen Ihnen die Wahrheit, statt zu raten.',
    },
  },

  services: {
    kicker: 'Was wir tun',
    title: 'Zwei Wege, wie wir Sie vor bösen Überraschungen bewahren',
    lead: {
      no: 'LEISTUNG 01',
      title: 'Lead-Listen ohne Rückläufer',
      sub: 'Echte Unternehmen, echte Menschen, ab Tag eins versandbereit – von Hand recherchiert, nicht aus einer verstaubten Datenbank exportiert.',
      bullets: [
        'Jedes Unternehmen einzeln geprüft, mit Link zum Nachweis und einer taggleichen Aktualitätsprüfung',
        'Jede E-Mail beim Mailserver verifiziert – und wenn ein Server uns keine Auskunft gibt, sagen wir es Ihnen, statt zu raten',
        'Eine persönliche Eröffnungszeile für jedes Unternehmen, basierend auf einem wahren Detail über die jeweilige Firma',
        'Sie drücken auf Senden, nicht wir – Ihre Domain, Ihre Stimme, Ihre Kontrolle',
      ],
      tickNote:
        'Karriereseiten, Finanzierungsmeldungen und Produktaussagen werden am Tag der Lieferung erneut geprüft. Alles Veraltete fliegt raus, statt mitgeliefert zu werden.',
    },
    audit: {
      no: 'LEISTUNG 02',
      title: 'Code-Checks in klarem Deutsch',
      sub: 'Für Gründer, die mit KI-Tools schnell gebaut haben – und für Käufer, die fünfstellig für die App eines anderen zahlen wollen.',
      bullets: [
        'Wir lesen Ihren Code wie ein Angreifer – nicht nur einen Scanner laufen lassen und dessen Ergebnis ausspucken',
        'Jeder Befund zeigt die genaue Datei und Zeile, warum es wichtig ist und wie man es behebt',
        'Eine Zusammenfassung, die Sie auch ohne Sicherheitshintergrund umsetzen können',
        'Sie beheben die Probleme, wir prüfen erneut – bei den größeren Paketen inklusive',
      ],
    },
    railNote:
      'Warum diese zwei? Dieselbe Fähigkeit, zwei Momente: prüfen, an wen Sie verkaufen, und prüfen, was Sie ausliefern oder kaufen. Beides ist Due Diligence – daher der Name.',
  },

  method: {
    kicker: 'Wie wir prüfen',
    title: 'Drei einfache Regeln, keine Ausnahmen',
    gates: [
      {
        name: 'Regel 1 — Quelle zeigen.',
        text: 'Können wir Ihnen nicht zeigen, woher eine Tatsache stammt, sagen wir sie nicht. Eine Behauptung ohne Quelle fliegt raus, egal wie plausibel sie klingt.',
      },
      {
        name: 'Regel 2 — Frisch prüfen.',
        text: 'Fakten veralten schnell – Stellen werden besetzt, Seiten verschwinden. Alles Zeitkritische wird am Liefertag erneut geprüft, nicht am Tag des Fundes.',
      },
      {
        name: 'Regel 3 — Kennzeichnen, was wir nicht belegen können.',
        text: 'Manches lässt sich von außen nicht bestätigen. Das liefern wir mit klarer Kennzeichnung und einem Hinweis, was wir prüfen konnten und was nicht – Sie müssen nie raten, welche Zeilen solide sind.',
      },
    ],
    legendTitle: 'Die vier Kennzeichnungen, die Sie in Ihrer Lieferung sehen',
    legend: [
      { code: 'VALID', ok: true, text: 'Bestätigt an der Quelle – z. B. hat der Mailserver genau diese Adresse akzeptiert' },
      { code: 'LIVE', ok: true, text: 'Am Liefertag erneut geprüft – die Seite, Stelle oder Aussage ist noch aktuell' },
      { code: 'CATCHALL', ok: false, text: 'Die Domain akzeptiert jede Mail, die Adresse lässt sich also nicht vollständig bestätigen – markiert, nie als verifiziert verkauft' },
      { code: 'UNVERIFIED', ok: false, text: 'Von außen nicht bestätigbar – ehrlich offengelegt, nie als verifiziert gezählt' },
    ],
    railNote:
      'Die ehrliche Grenze: Manche Mailserver antworten nicht, manche Aussagen stecken hinter einem Login. Unsere Regel ist einfach – die Kennzeichnung reist mit der Zeile. Lieber sehen Sie UNVERIFIED, als dass Sie einer Vermutung glauben.',
  },

  sample: {
    kicker: 'Beispiel',
    title: 'Sehen Sie genau, was Sie bekommen',
    intro:
      'Zwei Zeilen aus einem echten Arbeitspapier – die Unternehmen sind fiktiv, Format und Prüfungen sind exakt das, was in Ihrem Postfach landet.',
    wpTitle: 'DUEBENCH · ARBEITSPAPIER LEAD-LISTE — AUSZUG',
    specimen: 'MUSTER',
    cols: { account: 'Unternehmen', contact: 'Kontakt', status: 'E-Mail-Status', hook: 'Eröffnungszeile · Quelle' },
    rows: [
      {
        company: 'Northgate Payroll',
        companyMeta: 'SaaS · 40 Mitarbeitende',
        contact: 'M. Reyes',
        contactMeta: 'Leitung RevOps',
        ok: true,
        status: 'VALID · geprüft am 2026-07-12',
        hook: 'Sie stellen ihren ersten Vertriebsmitarbeiter ein (Karriereseite, geprüft am Liefertag)',
        hookSrc: 'Quelle: Karriereseiten-URL · LIVE',
      },
      {
        company: 'Harbor & Ledger',
        companyMeta: 'Fintech-API · 25 Mitarbeitende',
        contact: 'D. Osei',
        contactMeta: 'Co-Founder',
        ok: false,
        status: 'CATCHALL · offengelegt',
        hook: 'Arbeitet laut eigener Trust-Seite auf SOC 2 hin',
        hookSrc: 'Quelle: Trust-Center-URL · LIVE',
      },
    ],
    railNote:
      'Schauen Sie sich die zweite Zeile an: Diese CATCHALL-Kennzeichnung ist das Produkt. Ein Datenbank-Export hätte Ihnen diese Adresse als „verifiziert“ verkauft – wir sagen Ihnen, was sie wirklich ist, und wie Sie trotzdem herangehen.',
  },

  pricing: {
    kicker: 'Preise',
    title: 'Festpreise, vor Beginn genannt',
    auditTitle: 'Code-Checks',
    cols: { tier: 'Paket', scope: 'Leistungsumfang', fee: 'Preis' },
    tiers: [
      {
        name: 'Schnellprüfung',
        time: '2 Werktage',
        scope: 'Die riskantesten Teile einer App, wichtigste Befunde inklusive Lösungen',
        fee: '$350',
      },
      {
        name: 'Vollprüfung',
        time: '3–4 Werktage',
        scope: 'Vollständige Prüfung, priorisierte Fix-Liste und eine kostenlose Nachprüfung nach der Behebung',
        fee: '$750',
      },
      {
        name: 'Kaufprüfung',
        time: '4–5 Werktage',
        scope: 'Sie kaufen eine App? Wir prüfen Sicherheit, Code-Qualität und Übergaberisiken, bevor Sie das Geld überweisen',
        fee: '$1,200',
      },
    ],
    leadsTitle: 'Lead-Listen',
    leadsText:
      'Pauschal pro Projekt kalkuliert, je nach Listengröße und Prüftiefe. Während wir unsere ersten öffentlichen Fallstudien sammeln, sind die Pilotkonditionen bewusst großzügig: eine kostenlose 10-Lead-Probe im Austausch für ein kurzes Testimonial – wenn sie sich als nützlich erweist.',
    freeNote:
      'Wirklich kostenlos: keine Unterschrift, keine Kreditkarte. Ist die Probe nicht nützlich, schulden Sie uns nichts – auch kein Testimonial.',
    railNote:
      'Warum so großzügig? Eine neue Praxis verdient sich Vertrauen durch gezeigte Arbeit, nicht durch behauptete Referenzen. Wir tauschen lieber eine Probe gegen einen Satz ehrliches Feedback, als uns eine Erfolgsbilanz anzudichten, die wir noch nicht veröffentlicht haben.',
  },

  faq: {
    kicker: 'Klare Antworten',
    title: 'Was Käufer meistens fragen',
    items: [
      {
        q: 'Mit wem arbeite ich hier eigentlich?',
        a: 'Eine kleine, unabhängige Praxis – ein verantwortlicher Ansprechpartner, async-first. Sie sprechen mit der Person, die die Arbeit macht, nicht mit einem Account Manager. Moderne Recherche-Tools gehören zur Ausstattung; jede Lieferung wird von Hand geprüft und abgenommen, bevor sie rausgeht.',
      },
      {
        q: 'Verschicken Sie die Kaltakquise-E-Mails für mich?',
        a: 'Nein, ganz bewusst. Sie behalten den Senden-Button, Ihre Domain-Reputation und das letzte Wort bei jeder Formulierung. Wir liefern die verifizierte Liste, die Eröffnungszeilen und eine startklare Sequenz – plus eine einfache Anleitung für Warm-up, Tageslimits und den Umgang mit Antworten.',
      },
      {
        q: 'Garantieren Sie Antworten oder ein „100 % sicheres“ Audit?',
        a: 'Nein – und seien Sie vorsichtig bei allen, die das behaupten. Was wir garantieren: Die Arbeit ist echt – Adressen verifiziert oder markiert, Behauptungen mit Quelle, Befunde reproduzierbar. Antwortquoten nennen wir als ehrliche Branchenspannen, und ein Audit senkt das Risiko – es kann nicht bescheinigen, dass null Bugs existieren.',
      },
      {
        q: 'Wie fangen wir an?',
        a: 'Schreiben Sie eine Zeile an die Adresse unten, was Sie brauchen – einen Zielkundentyp für eine Beispielliste oder ein Repo, das Sie geprüft haben möchten. Listen starten mit einer kostenlosen 10-Lead-Probe; Code-Checks starten mit einem kurzen Anruf oder ein paar asynchronen Fragen – ganz wie Sie möchten.',
      },
    ],
    railNote:
      'Hausregel: Kostet die ehrliche Antwort auf eine Käuferfrage uns den Auftrag, ändert sich die Antwort nicht. Einen Auftrag zu verlieren ist billiger, als eine Entschuldigung zu schulden.',
  },

  contact: {
    kicker: 'Kontakt',
    title: 'Schicken Sie die erste Zeile',
    text:
      'Ein Satz darüber, was Sie brauchen, reicht – ein Kundentyp für eine Beispielliste oder ein Repo, das geprüft werden soll. Antwort innerhalb eines Werktags.',
    email: 'hello@duebench.com',
  },

  footer: {
    copyright: '© 2026 DueBench · duebench.com',
    note: 'Diese Seite kommentiert ihre eigenen Aussagen – fahren Sie mit der Maus über ein',
  },
}

export default de
