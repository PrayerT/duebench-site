// Master copy. Every locale file must match this shape exactly
// (enforced by the Dict type). Tone: plain, concrete, honest —
// write for a busy founder, not for another auditor.

const en = {
  meta: {
    langName: 'English',
    htmlLang: 'en',
  },

  a11y: {
    verifyLabel: 'How this claim is verified',
    sections: 'Sections',
    language: 'Language',
  },

  nav: {
    services: 'What we do',
    method: 'How we check',
    sample: 'Sample',
    pricing: 'Pricing',
    faq: 'Questions',
    contact: 'Contact',
  },

  hero: {
    eyebrow: 'DueBench · Independent verification desk',
    title: 'We show our work.',
    lede1:
      'We build lead lists and review code for software founders. The difference: everything we hand you comes with its proof attached — where it came from, when we checked it, and how.',
    lede2:
      'No black boxes, no “trust us”. If we can’t prove something, we flag it — and you see the flag.',
    proofNote:
      'Every row and every finding ships with a source link, a check date, and the method used. Scroll down to see exactly what that looks like.',
    ctaPrimary: 'Get a free 10-lead sample',
    ctaSecondary: 'Ask about a code check',
    feed: {
      title: 'LIVE CHECK — WHAT WE DO ALL DAY',
      checking: 'checking',
      valid: 'VERIFIED',
      flagged: 'FLAGGED',
      rows: [
        { label: 'Email address', detail: 'asked their mail server directly', ok: true },
        { label: 'Hiring page', detail: 're-checked today, still live', ok: true },
        { label: 'Product claim', detail: 'source link attached', ok: true },
        { label: 'Catch-all domain', detail: 'server won’t confirm — we say so', ok: false },
      ],
      note: 'A flag is not a failure. It’s us telling you the truth instead of guessing.',
    },
  },

  services: {
    kicker: 'What we do',
    title: 'Two ways we save you from bad surprises',
    lead: {
      no: 'SERVICE 01',
      title: 'Lead lists that don’t bounce',
      sub: 'Real companies, real people, ready to email on day one — researched by hand, not exported from a stale database.',
      bullets: [
        'Every company checked one by one, with a link to the proof and a same-day freshness check',
        'Every email verified with the mail server — and when a server won’t tell us, we tell you instead of guessing',
        'A personalised opening line for each company, based on something true about them',
        'You press send, not us — your domain, your voice, your control',
      ],
      tickNote:
        'Hiring pages, funding notes and product claims are re-checked the day the list ships. Anything stale is cut, not shipped.',
    },
    audit: {
      no: 'SERVICE 02',
      title: 'Code checks in plain English',
      sub: 'For founders who built fast with AI tools — and buyers about to pay five figures for someone else’s app.',
      bullets: [
        'We read your code the way an attacker would — not just run a scanner and print the output',
        'Every finding shows the exact file and line, why it matters, and how to fix it',
        'A summary you can act on without a security background',
        'Fix the issues and we re-check them — included on the bigger tiers',
      ],
    },
    railNote:
      'Why these two? Same skill, two moments: checking who you sell to, and checking what you ship or buy. Both are due diligence — hence the name.',
  },

  method: {
    kicker: 'How we check',
    title: 'Three simple rules, no exceptions',
    gates: [
      {
        name: 'Rule 1 — Show the source.',
        text: 'If we can’t show you where a fact came from, we don’t say it. A claim without a source gets cut, no matter how plausible it sounds.',
      },
      {
        name: 'Rule 2 — Check it fresh.',
        text: 'Facts go stale fast — roles get filled, pages get taken down. Everything time-sensitive is re-checked on the day we deliver, not the day we found it.',
      },
      {
        name: 'Rule 3 — Flag what we can’t prove.',
        text: 'Some things can’t be confirmed from the outside. Those ship with a clear flag and a note on what we could and couldn’t verify — you never have to guess which rows are solid.',
      },
    ],
    legendTitle: 'The four labels you’ll see on your deliverable',
    legend: [
      { code: 'VALID', ok: true, text: 'Confirmed at the source — e.g. the mail server accepted this exact address' },
      { code: 'LIVE', ok: true, text: 'Re-checked on delivery day — the page, role or claim is still current' },
      { code: 'CATCHALL', ok: false, text: 'The domain accepts all mail, so the address can’t be fully confirmed — flagged, never sold as verified' },
      { code: 'UNVERIFIED', ok: false, text: 'Couldn’t be confirmed from outside — disclosed honestly, never counted as verified' },
    ],
    railNote:
      'The honest limit: some mail servers refuse to answer, some claims live behind logins. Our rule is simple — the flag ships with the row. We’d rather you see UNVERIFIED than believe a guess.',
  },

  sample: {
    kicker: 'Sample',
    title: 'See exactly what you get',
    intro:
      'Two rows from a real workpaper — companies are fictional, the format and checks are exactly what lands in your inbox.',
    wpTitle: 'DUEBENCH · LEAD LIST WORKPAPER — EXCERPT',
    specimen: 'SPECIMEN',
    cols: { account: 'Company', contact: 'Contact', status: 'Email status', hook: 'Opening line · source' },
    rows: [
      {
        company: 'Northgate Payroll',
        companyMeta: 'SaaS · 40 people',
        contact: 'M. Reyes',
        contactMeta: 'Head of RevOps',
        ok: true,
        status: 'VALID · checked 2026-07-12',
        hook: 'They’re hiring their first sales rep (careers page, checked on delivery day)',
        hookSrc: 'source: careers URL · LIVE',
      },
      {
        company: 'Harbor & Ledger',
        companyMeta: 'Fintech API · 25 people',
        contact: 'D. Osei',
        contactMeta: 'Co-founder',
        ok: false,
        status: 'CATCHALL · disclosed',
        hook: 'Working toward SOC 2 per their trust page',
        hookSrc: 'source: trust-center URL · LIVE',
      },
    ],
    railNote:
      'Look at the second row: that CATCHALL flag is the product. A database export would have sold you that address as “verified” — we tell you what it really is, and how to approach it anyway.',
  },

  pricing: {
    kicker: 'Pricing',
    title: 'Flat fees, quoted before we start',
    auditTitle: 'Code checks',
    cols: { tier: 'Tier', scope: 'What you get', fee: 'Fee' },
    tiers: [
      {
        name: 'Spot Check',
        time: '2 business days',
        scope: 'The riskiest parts of one app, top findings with fixes',
        fee: '$350',
      },
      {
        name: 'Full Audit',
        time: '3–4 business days',
        scope: 'Full review, a prioritised fix list, and one free re-check after you fix',
        fee: '$750',
      },
      {
        name: 'Buy-side Check',
        time: '4–5 business days',
        scope: 'Buying an app? We check security, code health and handover risks before you wire the money',
        fee: '$1,200',
      },
    ],
    leadsTitle: 'Lead lists',
    leadsText:
      'Quoted flat per project, based on list size and verification depth. While we collect our first public case studies, pilot terms are deliberately generous: a free 10-lead sample in exchange for a short testimonial — if it proves useful.',
    freeNote:
      'Genuinely free: no signature, no card. If the sample isn’t useful, you owe nothing — including the testimonial.',
    railNote:
      'Why so generous? A new practice earns trust with shown work, not claimed logos. We’d rather trade a sample for a sentence of honest feedback than pretend to a track record we haven’t published yet.',
  },

  faq: {
    kicker: 'Straight answers',
    title: 'What buyers usually ask',
    items: [
      {
        q: 'Who am I actually working with?',
        a: 'A small independent practice — one accountable desk, async-first. You talk to the person doing the work, not an account manager. Modern research tooling is part of the bench; every deliverable is verified and signed off by hand before it ships.',
      },
      {
        q: 'Do you send the cold emails for me?',
        a: 'No, on purpose. You keep the send button, your domain reputation, and final say on every word. We deliver the verified list, the opening lines, and a ready-to-run sequence — plus a simple setup guide for warm-up, daily limits and handling replies.',
      },
      {
        q: 'Do you guarantee replies, or a “100% safe” audit?',
        a: 'No — and be wary of anyone who does. What we guarantee is that the work is real: addresses verified or flagged, claims sourced, findings reproducible. Reply rates are quoted as honest industry ranges, and an audit reduces risk — it can’t certify that zero bugs exist.',
      },
      {
        q: 'How do we start?',
        a: 'Write one line about what you need to the address below — a target customer type for a sample list, or a repo you want looked at. Lists start with a free 10-lead sample; code checks start with a short call or a few async questions, your pick.',
      },
      {
        q: 'Is a cold-outreach list even legal? What about GDPR?',
        a: 'The lists are business contacts from public, linkable sources — careers pages, company sites, announcements — and every row shows exactly where it came from, which is what an honest legal basis is built on. The duty for the outreach itself sits with the sender, and rules differ by region (GDPR, PECR, CAN-SPAM), so we flag EU-based contacts and ship plain-language sending guidance with every list. We’re researchers, not your lawyers — for edge cases, ask yours.',
      },
    ],
    railNote:
      'House rule: if the honest answer to a buyer’s question costs us the deal, the answer doesn’t change. It’s cheaper to lose a deal than to owe an apology.',
  },

  contact: {
    kicker: 'Contact',
    title: 'Send the first line',
    text:
      'One sentence about what you need is enough — a customer type for a sample list, or a repo you want checked. Replies within one business day.',
    email: 'hello@duebench.com',
    mailSubject: 'Free 10-lead sample',
    mailSubjectAudit: 'Code check — quick question',
    mailBody:
      'Hi DueBench,\n\nWhat I need: [ a free 10-lead sample — my target customer is: … ] or [ a code check on: … ]\n\nThanks,',
    copyHint: 'No mail app on this device?',
    copyBtn: 'Copy the address',
    copied: 'Copied ✓',
  },

  footer: {
    copyright: '© 2026 DueBench · duebench.com',
    note: 'This page annotates its own claims — hover any',
  },
} as const

// Locale files use this mutable shape so translated strings type-check.
type DeepWritable<T> = { -readonly [K in keyof T]: DeepWritable<T[K]> }
type WidenLiterals<T> = T extends string
  ? string
  : T extends boolean
    ? boolean
    : { [K in keyof T]: WidenLiterals<T[K]> }
export type Dict = WidenLiterals<DeepWritable<typeof en>>

export default en as Dict
