import type { Dict } from './en'

const fr: Dict = {
  meta: {
    langName: 'Français',
    htmlLang: 'fr',
  },

  a11y: {
    verifyLabel: 'Comment cette affirmation est vérifiée',
    sections: 'Sections',
    language: 'Langue',
  },

  nav: {
    services: 'Ce que nous faisons',
    method: 'Notre méthode',
    sample: 'Exemple',
    pricing: 'Tarifs',
    faq: 'Questions',
    contact: 'Contact',
  },

  hero: {
    eyebrow: 'DueBench · Bureau de vérification indépendant',
    title: 'Nous montrons notre travail.',
    lede1:
      'Nous construisons des listes de prospects et auditons du code pour des fondateurs de startups logicielles. La différence : tout ce que nous vous remettons est accompagné de sa preuve — d’où ça vient, quand nous l’avons vérifié, et comment.',
    lede2:
      'Pas de boîte noire, pas de « faites-nous confiance ». Si nous ne pouvons pas prouver un fait, nous le signalons — et vous voyez le signalement.',
    proofNote:
      'Chaque ligne et chaque constat est livré avec un lien source, une date de vérification et la méthode utilisée. Faites défiler pour voir exactement à quoi cela ressemble.',
    ctaPrimary: 'Obtenir un échantillon gratuit de 10 prospects',
    ctaSecondary: 'Demander un audit de code',
    feed: {
      title: 'VÉRIFICATION EN DIRECT — CE QUE NOUS FAISONS TOUTE LA JOURNÉE',
      checking: 'vérification',
      valid: 'VÉRIFIÉ',
      flagged: 'SIGNALÉ',
      rows: [
        { label: 'Adresse e-mail', detail: 'interrogé directement leur serveur mail', ok: true },
        { label: 'Page de recrutement', detail: 'revérifiée aujourd’hui, toujours en ligne', ok: true },
        { label: 'Affirmation produit', detail: 'lien source joint', ok: true },
        { label: 'Domaine fourre-tout', detail: 'le serveur refuse de confirmer — nous le disons', ok: false },
      ],
      note: 'Un signalement n’est pas un échec. C’est nous qui vous disons la vérité plutôt que de deviner.',
    },
  },

  services: {
    kicker: 'Ce que nous faisons',
    title: 'Deux façons de vous éviter de mauvaises surprises',
    lead: {
      no: 'SERVICE 01',
      title: 'Des listes de prospects qui ne rebondissent pas',
      sub: 'De vraies entreprises, de vraies personnes, prêtes à contacter dès le premier jour — recherchées à la main, pas extraites d’une base de données périmée.',
      bullets: [
        'Chaque entreprise vérifiée une par une, avec un lien vers la preuve et un contrôle de fraîcheur le jour même',
        'Chaque e-mail vérifié auprès du serveur mail — et quand un serveur refuse de répondre, nous vous le disons au lieu de deviner',
        'Une phrase d’accroche personnalisée pour chaque entreprise, fondée sur un fait vrai à son sujet',
        'C’est vous qui envoyez, pas nous — votre domaine, votre voix, votre contrôle',
      ],
      tickNote:
        'Les pages de recrutement, les levées de fonds et les affirmations produit sont revérifiées le jour où la liste est livrée. Tout ce qui est périmé est retiré, jamais livré.',
    },
    audit: {
      no: 'SERVICE 02',
      title: 'Des audits de code en français clair',
      sub: 'Pour les fondateurs qui ont codé vite avec des outils d’IA — et les acheteurs sur le point de payer cinq chiffres pour l’application de quelqu’un d’autre.',
      bullets: [
        'Nous lisons votre code comme le ferait un attaquant — pas seulement en lançant un scanner et en imprimant le résultat',
        'Chaque constat indique le fichier et la ligne exacts, pourquoi cela compte, et comment le corriger',
        'Une synthèse actionnable même sans bagage en sécurité',
        'Corrigez les problèmes et nous les revérifions — inclus dans les formules supérieures',
      ],
    },
    railNote:
      'Pourquoi ces deux services ? Une même compétence, deux moments : vérifier à qui vous vendez, et vérifier ce que vous livrez ou achetez. Les deux relèvent de la due diligence — d’où le nom.',
  },

  method: {
    kicker: 'Notre méthode',
    title: 'Trois règles simples, sans exception',
    gates: [
      {
        name: 'Règle 1 — Montrer la source.',
        text: 'Si nous ne pouvons pas vous montrer d’où vient un fait, nous ne l’affirmons pas. Une affirmation sans source est écartée, aussi plausible soit-elle.',
      },
      {
        name: 'Règle 2 — Revérifier au jour J.',
        text: 'Les faits périment vite — les postes se pourvoient, les pages disparaissent. Tout ce qui est sensible au facteur temps est revérifié le jour de la livraison, pas le jour où nous l’avons trouvé.',
      },
      {
        name: 'Règle 3 — Signaler ce que nous ne pouvons pas prouver.',
        text: 'Certaines choses ne peuvent pas être confirmées de l’extérieur. Elles sont livrées avec un signalement clair et une note sur ce que nous avons pu vérifier ou non — vous n’avez jamais à deviner quelles lignes sont solides.',
      },
    ],
    legendTitle: 'Les quatre étiquettes que vous verrez sur votre livrable',
    legend: [
      { code: 'VALID', ok: true, text: 'Confirmé à la source — par ex. le serveur mail a accepté cette adresse exacte' },
      { code: 'LIVE', ok: true, text: 'Revérifié le jour de la livraison — la page, le poste ou l’affirmation est toujours d’actualité' },
      { code: 'CATCHALL', ok: false, text: 'Le domaine accepte tous les e-mails, donc l’adresse ne peut pas être totalement confirmée — signalée, jamais vendue comme vérifiée' },
      { code: 'UNVERIFIED', ok: false, text: 'N’a pas pu être confirmé de l’extérieur — divulgué honnêtement, jamais compté comme vérifié' },
    ],
    railNote:
      'La limite honnête : certains serveurs mail refusent de répondre, certaines affirmations se cachent derrière une connexion. Notre règle est simple — le signalement accompagne la ligne. Nous préférons que vous voyiez UNVERIFIED plutôt que de croire une supposition.',
  },

  sample: {
    kicker: 'Exemple',
    title: 'Voyez exactement ce que vous obtenez',
    intro:
      'Deux lignes issues d’un vrai dossier de travail — les entreprises sont fictives, mais le format et les vérifications sont exactement ce qui arrive dans votre boîte de réception.',
    wpTitle: 'DUEBENCH · DOSSIER DE TRAVAIL — LISTE DE PROSPECTS — EXTRAIT',
    specimen: 'SPÉCIMEN',
    cols: { account: 'Entreprise', contact: 'Contact', status: 'Statut de l’e-mail', hook: 'Phrase d’accroche · source' },
    rows: [
      {
        company: 'Northgate Payroll',
        companyMeta: 'SaaS · 40 personnes',
        contact: 'M. Reyes',
        contactMeta: 'Responsable RevOps',
        ok: true,
        status: 'VALID · vérifié le 2026-07-12',
        hook: 'Ils recrutent leur premier commercial (page carrières, vérifiée le jour de la livraison)',
        hookSrc: 'source : URL carrières · LIVE',
      },
      {
        company: 'Harbor & Ledger',
        companyMeta: 'API fintech · 25 personnes',
        contact: 'D. Osei',
        contactMeta: 'Cofondateur',
        ok: false,
        status: 'CATCHALL · divulgué',
        hook: 'En voie de certification SOC 2, selon leur page de confiance',
        hookSrc: 'source : URL centre de confiance · LIVE',
      },
    ],
    railNote:
      'Regardez la seconde ligne : ce signalement CATCHALL, c’est ça le produit. Un export de base de données vous aurait vendu cette adresse comme « vérifiée » — nous, nous vous disons ce qu’elle est vraiment, et comment l’aborder quand même.',
  },

  pricing: {
    kicker: 'Tarifs',
    title: 'Des forfaits, annoncés avant de commencer',
    auditTitle: 'Audits de code',
    cols: { tier: 'Formule', scope: 'Ce que vous obtenez', fee: 'Tarif' },
    tiers: [
      {
        name: 'Contrôle ciblé',
        time: '2 jours ouvrés',
        scope: 'Les parties les plus à risque d’une application, principaux constats avec corrections',
        fee: '$350',
      },
      {
        name: 'Audit complet',
        time: '3 à 4 jours ouvrés',
        scope: 'Revue complète, une liste de corrections priorisée, et une revérification gratuite une fois les correctifs faits',
        fee: '$750',
      },
      {
        name: 'Audit acheteur',
        time: '4 à 5 jours ouvrés',
        scope: 'Vous achetez une application ? Nous vérifions la sécurité, la qualité du code et les risques de passation avant que vous ne transfériez les fonds',
        fee: '$1,200',
      },
    ],
    leadsTitle: 'Listes de prospects',
    leadsText:
      'Un forfait par projet, selon la taille de la liste et la profondeur de vérification. Le temps de réunir nos premières études de cas publiques, les conditions pilotes sont volontairement généreuses : un échantillon gratuit de 10 prospects contre un court témoignage — si vous le jugez utile.',
    freeNote:
      'Vraiment gratuit : pas de signature, pas de carte bancaire. Si l’échantillon ne vous est pas utile, vous ne devez rien — pas même le témoignage.',
    railNote:
      'Pourquoi tant de générosité ? Un cabinet qui débute gagne la confiance par des preuves, pas par des logos affichés. Nous préférons échanger un échantillon contre une phrase de retour honnête plutôt que de prétendre à un historique que nous n’avons pas encore publié.',
  },

  faq: {
    kicker: 'Réponses franches',
    title: 'Ce que les acheteurs demandent le plus souvent',
    items: [
      {
        q: 'Avec qui est-ce que je travaille, concrètement ?',
        a: 'Un petit cabinet indépendant — un seul bureau responsable, fonctionnant d’abord en asynchrone. Vous parlez à la personne qui fait le travail, pas à un chargé de compte. Des outils de recherche modernes font partie de l’équipement ; chaque livrable est vérifié et validé à la main avant d’être envoyé.',
      },
      {
        q: 'Envoyez-vous les e-mails de prospection à ma place ?',
        a: 'Non, volontairement. Vous gardez le bouton d’envoi, la réputation de votre domaine, et le dernier mot sur chaque phrase. Nous livrons la liste vérifiée, les phrases d’accroche, et une séquence prête à l’emploi — ainsi qu’un guide simple pour la mise en chauffe, les limites quotidiennes et la gestion des réponses.',
      },
      {
        q: 'Garantissez-vous des réponses, ou un audit « 100 % sûr » ?',
        a: 'Non — et méfiez-vous de quiconque le prétend. Ce que nous garantissons, c’est que le travail est réel : adresses vérifiées ou signalées, affirmations sourcées, constats reproductibles. Les taux de réponse sont donnés sous forme de fourchettes honnêtes du secteur, et un audit réduit le risque — il ne peut pas certifier l’absence totale de bugs.',
      },
      {
        q: 'Comment commencer ?',
        a: 'Écrivez une ligne sur votre besoin à l’adresse ci-dessous — un type de client cible pour un échantillon de liste, ou un dépôt de code que vous voulez faire examiner. Les listes démarrent avec un échantillon gratuit de 10 prospects ; les audits de code démarrent par un court appel ou quelques questions en asynchrone, à votre choix.',
      },
    ],
    railNote:
      'Règle de la maison : si la réponse honnête à la question d’un acheteur nous coûte le contrat, la réponse ne change pas. Il est moins coûteux de perdre un contrat que de devoir des excuses.',
  },

  contact: {
    kicker: 'Contact',
    title: 'Envoyez la première ligne',
    text:
      'Une phrase sur votre besoin suffit — un type de client pour un échantillon de liste, ou un dépôt de code à vérifier. Réponse sous un jour ouvré.',
    email: 'hello@duebench.com',
  },

  footer: {
    copyright: '© 2026 DueBench · duebench.com',
    note: 'Cette page annote ses propres affirmations — survolez n’importe quel',
  },
}

export default fr
