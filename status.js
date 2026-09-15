/* ---------------------------------------------------------------------------
   AI Learning Platform — live development status.

   This file IS the tracker's data. To move something forward, change one
   `s:` value and push; the page recomputes every percentage, count and bar.
   Nothing is hard-coded in the HTML.

       s: 'done'    finished and verified
       s: 'prog'    actively being built right now
       s: 'block'   cannot start until something outside the code arrives
       s: 'todo'    not started

   `owner: 'client'` marks a blocker that is NOT mine to clear, so the page can
   say plainly whose move it is instead of leaving it looking like slippage.
--------------------------------------------------------------------------- */

window.UPDATED = '14 September 2026 · Phase 10 complete except the legal opinion';

window.PHASES = [
  {
    id: 0,
    name: 'Assessment & planning',
    goal: 'Decide whether this is worth building, and on what evidence — before a line of product code exists.',
    tasks: [
      { t: 'Read both product blueprints end to end', s: 'done' },
      { t: 'Feasibility and market assessment (competition, unit economics, content IP)', s: 'done' },
      { t: 'Regulatory review — India DPDP Act 2023 and Apple App Store rules', s: 'done' },
      { t: 'Scope recommendation: build the proof, not the platform', s: 'done' },
      { t: 'Phase-by-phase development plan', s: 'done' },
      { t: 'This live status tracker', s: 'done' }
    ]
  },
  {
    id: 1,
    name: 'Proof slice — the five-minute magic moment',
    goal: 'One complete learning loop, working for real, on one chapter. The thing you put in front of parents and schools to find out whether anyone will pay.',
    scope: 'CBSE · Class 10 · Science · Light — Reflection and Refraction · 6 concepts, 24 questions',
    tasks: [
      { t: 'Landing page', s: 'done' },
      { t: 'Parent-primary account architecture (parent account, child profiles beneath)', s: 'done' },
      { t: 'Registration — email and mobile mandatory, student date of birth, parental consent captured', s: 'done',
        note: 'Tested to REJECT, not just to accept: a missing date of birth, an unticked consent box, '
            + 'a short mobile number and a malformed email each block the account. The date of birth '
            + 'drives an age check that states whether parental consent applies.' },
      { t: 'Board / class / medium / subject / chapter selection', s: 'done' },
      { t: 'Tutor grounded in the chapter: Explain, Simplify, Give Example, Exam answer, diagram, Hint', s: 'done',
        note: 'Every answer is drawn from the chapter\'s own content and names the curriculum node it '
            + 'came from, so it cannot wander out of syllabus. That retrieval step is the grounding the '
            + 'blueprint asks for. A generative model plugs into the same interface once a key exists.' },
      { t: 'Adaptive practice questions', s: 'done',
        note: 'Verified climbing easy → medium → hard on correct answers, and stepping back down after '
            + 'a wrong one rather than pressing on.' },
      { t: 'Concept mastery score, calculated not cosmetic', s: 'done',
        note: 'Built from accuracy weighted by question difficulty, a penalty when a hint was used, a '
            + 'confidence factor so two lucky answers do not read as mastery, and decay over time — '
            + 'which is what will drive revision scheduling in Phase 3.' },
      { t: 'Parent dashboard for that child', s: 'done',
        note: 'Includes the consent record — who consented, to which version, when — and states plainly '
            + 'that behavioural tracking is off.' },
      { t: 'Works properly in a phone browser', s: 'done',
        note: 'No horizontal overflow at 390px or 1280px.' },
      { t: 'AI provider key or funded budget', s: 'block', owner: 'client',
        note: 'The tutor answers from the curriculum today, which costs nothing and cannot hallucinate. '
            + 'Switching on a generative model needs a key — every answer then costs money per question, '
            + 'and I cannot run that on my own account.' }
    ]
  },
  {
    id: 2,
    name: 'Curriculum engine',
    goal: 'The part that is genuinely hard, and the part a general chatbot cannot copy.',
    scope: 'One engine, board-specific data — CBSE and Maharashtra State Board both running on it',
    tasks: [
      { t: 'Board → class → subject → unit → chapter → topic → concept → learning objective schema', s: 'done' },
      { t: 'Prerequisite graph between concepts', s: 'done',
        note: 'Resolves transitively, so "weak at lenses because refraction is weak" is computed '
            + 'rather than guessed. Cycles and prerequisites pointing outside the syllabus are '
            + 'validation errors, not surprises found in production.' },
      { t: 'Content admin panel — browse, inspect and validate', s: 'prog',
        note: 'Built and working: syllabus switching, statistics, the full curriculum tree with '
            + 'question-difficulty coverage per concept, validation, and version history. NOT yet '
            + 'built: creating and editing content in the panel, and the reviewer approval workflow. '
            + 'Those need the backend and a login to attach an approver identity to.' },
      { t: 'Academic-year versioning (old syllabus never overwritten)', s: 'done',
        note: 'A syllabus has effectiveFrom / effectiveTo dates and is never edited in place. A '
            + 'child\'s syllabus is resolved once at registration and stored by id, so next year\'s '
            + 'version going live cannot silently move a student mid-course.' },
      { t: 'Content validation pipeline — out-of-syllabus check before publish', s: 'done',
        note: 'Tested to REJECT: a missing explanation level, a concept with no questions, an '
            + 'answer index out of range, a prerequisite cycle, and a prerequisite pointing outside '
            + 'its own syllabus are all caught and block publication.' },
      { t: 'Second board onboarded against the same engine', s: 'done',
        note: 'Maharashtra State Board Class 10 Science added as ONE data file. No change to the '
            + 'engine, the tutor, the mastery model or any screen. Its shape genuinely differs from '
            + 'CBSE — two chapters instead of one, and topics (total internal reflection, '
            + 'dispersion) that CBSE Class 10 treats elsewhere.' }
    ]
  },
  {
    id: 3,
    name: 'Learning loop',
    goal: 'Learn → practise → revise, so knowledge survives past the week it was taught.',
    scope: 'Both boards · notes, generated flashcards and a revision schedule that asks for itself',
    tasks: [
      { t: 'Notes engine — one-minute revision, formula sheet, exam guidance, common mistakes', s: 'done',
        note: 'Assembled from the curriculum the student is already on. Nothing is invented — '
            + 'revision notes that disagree with the lesson are worse than no notes at all.' },
      { t: 'Smart flashcards', s: 'done',
        note: 'Generated from the content rather than authored a second time, from three sources: '
            + 'the formulae, the chapter\'s common-mistake list, and recall of the question bank. '
            + 'Add a formula to a syllabus and its card appears; there is nothing to keep in sync.' },
      { t: 'Spaced revision engine (1 / 3 / 7 / 14 / 30 / 60-day ladder, reset on failure)', s: 'done',
        note: 'A concept climbs the ladder only if EVERY card in it was recalled — "4 of 6" is not '
            + 'evidence it can wait a fortnight. Two independent things make a concept due: the '
            + 'clock, or a mastery score that has decayed far enough that waiting would be '
            + 'negligent. The second case is flagged Relearn rather than Review, because a '
            + 'flashcard cannot repair a score that low — it needs practice questions instead.' },
      { t: 'Adaptive difficulty', s: 'done',
        note: 'Landed in Phase 1 — recorded here so the phase list stays honest rather than '
            + 'counting the same work twice.' },
      { t: 'Student learning graph and next-concept recommendation', s: 'done',
        note: 'Today\'s mission is chosen by the engine: an unmet prerequisite outranks a new '
            + 'concept, which outranks one that merely has room to improve.' }
    ]
  },
  {
    id: 4,
    name: 'Assessment & exam',
    goal: 'Practice that resembles the actual paper the student will sit.',
    tasks: [
      { t: 'Question engine — all twelve question types, tagged by concept and difficulty', s: 'todo' },
      { t: 'AI question generator, constrained to the curriculum node', s: 'todo' },
      { t: 'AI answer evaluation for written answers', s: 'todo' },
      { t: 'Mock exam — board format, real timing, section rules', s: 'todo' },
      { t: 'Performance report: careless mistakes vs concept mistakes', s: 'todo' },
      { t: 'Previous-year-questions layer', s: 'block', owner: 'client',
        note: 'Board question papers and textbooks are copyrighted. You have said you will secure the approvals — this starts once they are in hand.' }
    ]
  },
  {
    id: 5,
    name: 'Gamification',
    goal: 'Make the learning itself the game, rather than bolting a game beside it.',
    scope: 'Every point is earned by a learning action — there is nothing to collect that does not involve understanding something',
    tasks: [
      { t: 'XP, levels, streaks, badges', s: 'done',
        note: 'XP, level and badges are RECOMPUTED from the existing event log every time they '
            + 'are read. Nothing is stored, so there is no points balance to drift, be edited or '
            + 'be lost — and no new personal data is collected to support any of it. Verified by '
            + 'deleting events and watching the total fall.' },
      { t: 'Daily mission', s: 'done',
        note: 'Three goals covering the whole loop — learn, practise, recall — rather than three '
            + 'variations of "answer questions". Counts today only; verified that yesterday\'s '
            + 'work does not carry over.' },
      { t: 'Chapter-end challenge', s: 'done',
        note: 'Eight questions drawn across a WHOLE chapter and spread round-robin across its '
            + 'concepts, so it tests whether the pieces connect. Locked until most of the chapter '
            + 'has been attempted — a test on material never taught is not a challenge, it is '
            + 'just discouraging. No hints, 75% to clear.' },
      { t: 'Personal-best progress instead of public student ranking', s: 'done',
        note: 'Progress is measured against the student\'s own previous week and the page says so '
            + 'in as many words. A ranked list of named children is both a motivation disaster for '
            + 'the bottom half of a class and, under DPDP, exposure of a child\'s data that is not '
            + 'worth the engagement.' }
    ]
  },
  {
    id: 6,
    name: 'Teacher & school',
    goal: 'The B2B layer. My recommendation is to pull this forward — schools pay per student per year and do not churn after exam season.',
    scope: 'First instalment: the class layer. A demonstration class of 22 with per-concept mastery in exactly the shape the student app already produces',
    tasks: [
      { t: 'Teacher dashboard — class, students, per-concept view', s: 'done',
        note: 'The headline is an instruction, not a number: WHICH CONCEPT DO I RE-TEACH THIS '
            + 'WEEK, with the evidence behind it. That is the question a teacher actually has on '
            + 'a Monday morning.' },
      { t: 'Class-level weak-concept analytics', s: 'done',
        note: 'Reports the SPLIT — secure / developing / struggling — not just an average, '
            + 'because a class averaging 58% might be everyone mediocre or half secure and half '
            + 'lost, and those need opposite responses.' },
      { t: 'Remedial grouping, with the teaching material behind it', s: 'done',
        note: 'Selects exactly the students below 40% on a concept and attaches that concept\'s '
            + 'learning objectives and common-mistake list. Deliberately not an AI feature — no '
            + 'model is needed to do the useful part.' },
      { t: 'AI teaching assistant — generate tests, worksheets, remedial lessons', s: 'todo' },
      { t: 'School tenant isolation', s: 'todo' },
      { t: 'School-wide analytics', s: 'todo' }
    ]
  },
  {
    id: 7,
    name: 'Mobile applications',
    goal: 'One React Native codebase producing both stores.',
    scope: 'The installable, offline half is done. The native store builds are not.',
    tasks: [
      { t: 'Installable app with offline support (PWA)', s: 'done',
        note: 'Installs to the home screen on both Android and iOS and opens without browser '
            + 'chrome. More importantly it works with no connection at all: the curriculum, the '
            + 'questions, the tutor and the mastery model are already on the device. Verified by '
            + 'cutting the network and using it. For a student on patchy data three days before '
            + 'the month ends, this matters more than most of the feature list.' },
      { t: 'Shared React Native codebase', s: 'todo',
        note: 'Not started. I will not claim a native build I cannot run on a real device here.' },
      { t: 'iOS build — free tier only, no pricing and no purchase UI anywhere', s: 'todo',
        note: 'Apple guideline 3.1.1: an education app is not a "reader" app, so any in-app premium unlock must be sold through in-app purchase. A free-tier-only build is the version that passes review.' },
      { t: 'Android build', s: 'todo' },
      { t: 'Google Play Families policy compliance', s: 'todo' },
      { t: 'Store submission', s: 'block', owner: 'client',
        note: 'Needs your Apple Developer account (99 USD/year) and Google Play account (25 USD once). I cannot log into your accounts — I hand you signed builds and instructions.' }
    ]
  },
  {
    id: 8,
    name: 'Multi-language',
    goal: 'Explanation language independent of curriculum language — CBSE Science in English, explained in Marathi.',
    scope: 'Architecture complete; translated content is a content operation, not a coding task',
    tasks: [
      { t: 'Language layer separated from curriculum structure', s: 'done',
        note: 'Explanation language is a separate field from curriculum medium, so a child sits '
            + 'an English paper and is explained to in Marathi. The choice follows them across '
            + 'concepts and does not touch their syllabus.' },
      { t: 'Devanagari font bundled with the app', s: 'done',
        note: 'A 59KB subset of Noto Sans Devanagari (SIL Open Font License), cached offline. '
            + 'Plenty of low-cost Android phones ship without an Indian-language font, and on '
            + 'those a Marathi explanation renders as a row of empty boxes — which reads as a '
            + 'broken app rather than a missing font.' },
      { t: 'Marathi and Hindi explanation', s: 'prog',
        note: 'Working end to end on four concepts across both boards — about 20% of the text. '
            + 'Every translation is labelled DRAFT in the interface because it has not been '
            + 'checked by a subject teacher. Translating the rest is a content operation with '
            + 'Marathi-speaking teachers, not a coding task.' },
      { t: 'Subject-terminology validation (literal machine translation is not safe for exam material)', s: 'done',
        note: 'Enforced rather than advised: an unsigned translation is a BLOCKING validation '
            + 'error, so drafts cannot be published. And where a particular explanation has no '
            + 'translation the interface says "shown in English" rather than silently falling '
            + 'back — a student should never wonder why the language button did nothing.' }
    ]
  },
  {
    id: 9,
    name: 'Voice & vision',
    goal: 'Ask by speaking; solve by photographing.',
    tasks: [
      { t: 'Read explanations aloud, in the chosen language', s: 'done',
        note: 'Built on the device\'s own speech engine, not a cloud voice API: it costs nothing '
            + 'per use, nothing leaves the device, and it works offline. Where a device has no '
            + 'voice for the chosen language the control is disabled and SAYS why, rather than '
            + 'being a button that silently does nothing.' },
      { t: 'Speech-to-text (ask a question by speaking)', s: 'todo' },
      { t: 'Camera doubt solving — OCR, question detection, curriculum mapping', s: 'todo',
        note: 'Needs a vision model, so it is gated on the same provider key as the generative '
            + 'tutor. Nothing to build until that exists.' },
      { t: 'Identity stripped before anything reaches a third-party AI provider', s: 'done',
        note: "Apple's Kids Category rules forbid sending personally identifiable information to third parties. Designed in from the start; very expensive to retrofit." }
    ]
  },
  {
    id: 10,
    name: 'Launch readiness',
    goal: 'The work that decides whether this can legally and affordably run at scale.',
    tasks: [
      { t: 'Legal opinion on the personalisation engine under DPDP s.9(3)', s: 'block', owner: 'client',
        note: 'Every user of a Class 5–12 platform is a child under Indian law. s.9(3) prohibits behavioural monitoring of children regardless of consent — and "the AI learns the student’s learning behaviour" is the core of this product. This needs an Indian data-protection lawyer before the engine is built, not after.' },
      { t: 'Privacy page, data export and erasure', s: 'done',
        note: 'Under the DPDP Act a parent can ask what you hold about their child and ask you '
            + 'to erase it. Both are real here, not described: the export downloads the ACTUAL '
            + 'stored record rather than a summary of it, and the erasure genuinely removes the '
            + 'account, the consent record and every answer. Verified by exporting, reading the '
            + 'file, deleting, and checking the storage is empty.' },
      { t: 'AI cost controls — model routing, caching, per-tier daily quotas', s: 'done',
        note: 'Four controls in order of what they save: curriculum answers cost nothing, a '
            + 'cache means one right answer is paid for once, cheap models take cheap jobs, and '
            + 'a hard daily cap per tier stops one heavy user running up an unbounded bill. '
            + 'A refused request explains itself and points at the free path rather than just '
            + 'saying no.' },
      { t: 'Unit-economics calculator', s: 'done',
        note: 'The calculation the blueprint\'s ₹199-599 pricing never shows, and the first '
            + 'thing an investor asks for. It found a real problem in my own draft tiers: Pro at '
            + '250 AI answers a day would have cost ₹1,460 a month against ₹599 — an ₹861 loss '
            + 'per heavy user. The cap is now 100/day, which is the highest that price can '
            + 'carry. Every paid tier is now provably safe at its own ceiling.' },
      { t: 'Load and performance pass', s: 'done',
        note: 'Measured on a simulated mid-range Android: CPU throttled 4x, ~1.6 Mbps, 150ms '
            + 'latency. First contentful paint 1.6s, fully loaded 1.6s, total download 303KB. '
            + 'Every screen re-renders in under 3ms, including the 22-student class analytics. '
            + 'Then stress-tested with 2,000 recorded answers — roughly a year of daily use: '
            + 'the mastery calculation takes 0.1ms, the XP recompute 1.1ms, badges 3.1ms, and '
            + 'the home screen still renders instantly. Nothing needed optimising.' },
      { t: 'Security review', s: 'done',
        note: 'Tested by attacking it, not by reading the code. Five XSS payloads were entered '
            + 'as the parent and student names and followed through every screen that echoes '
            + 'them: none executed, none produced a live element, and each appears on screen as '
            + 'harmless text. Also confirmed: the password is never stored in clear, signed-out '
            + 'deep links to the parent dashboard are refused, and the app makes ZERO requests '
            + 'to any third party — no analytics, no fonts, no CDN, nothing. Known and stated: '
            + 'the admin and teacher views are unauthenticated because there is no server to '
            + 'authenticate against yet.' }
    ]
  }
];

/* Decisions already taken, and why. Recorded here so the reasoning survives the
   conversation it came from — and so it can be argued with cheaply now rather
   than expensively later. */
window.DECISIONS = [
  {
    d: 'Build the proof, not the platform',
    why: 'The full brief — five boards, Classes 5–12, every subject, multiple languages, '
       + 'AI voice, AI video lessons, games, school SaaS, web and both app stores — is a '
       + 'multi-crore, multi-year build aimed at the market that destroyed BYJU\'S. Phase 1 '
       + 'instead builds one complete learning loop so you can test whether anyone pays, '
       + 'before the money is spent.'
  },
  {
    d: 'Parent is the primary account holder',
    why: 'Your own requirement, and it is also the only structure that works legally. Every '
       + 'user of a Class 5–12 platform is a child under the DPDP Act, so verifiable parental '
       + 'consent is mandatory rather than optional.'
  },
  {
    d: 'The student\'s date of birth is mandatory, not optional',
    why: 'This is the one requirement of yours I pushed back on. If date of birth is optional '
       + 'you cannot tell who is a child, and you must know that to apply the children\'s rules '
       + 'correctly. One extra field now avoids rebuilding the consent system later. The '
       + 'parent\'s own date of birth stays optional.'
  },
  {
    d: 'The iOS build ships with no pricing and no purchase screen at all',
    why: 'Apple guideline 3.1.1 — an education app is not a "reader" app, so any premium '
       + 'unlock inside the app must be sold through in-app purchase. A genuinely useful '
       + 'free-tier-only build is the version that passes review. Students who subscribed on '
       + 'the web sign in and use what they bought. Android has no such restriction.'
  },
  {
    d: 'Identity is stripped before anything reaches a third-party AI provider',
    why: 'Apple\'s Kids Category rules forbid sending personally identifiable information to '
       + 'third parties, and a student\'s typed question routed to an external model is exactly '
       + 'that. Cheap to design in now, very expensive to retrofit.'
  },
  {
    d: 'Recommendation: move teacher and school work earlier than Phase 6',
    why: 'Schools and coaching institutes pay per student per year, do not churn after exam '
       + 'season, and are reached through one sales conversation rather than four hundred '
       + 'parent-facing ad impressions. In India this is where this kind of product makes '
       + 'money. Your call — the plan currently keeps your original ordering.'
  }
];

/* Screens land here as they are built. Each entry: { src, caption }.
   Every one of these is a capture of the running application, taken by driving
   it end to end — not a mockup, and not a design that was never wired up. */
window.SHOTS = [
  { src: 'screenshots/app-01-landing.png',
    caption: 'Landing page.' },
  { src: 'screenshots/app-02-register.png',
    caption: 'Registration. The parent is the account holder; the student\'s date of birth is mandatory and drives the age check; consent is explicit and recorded.' },
  { src: 'screenshots/app-03-home.png',
    caption: 'Student home — today\'s mission is chosen by the engine, not picked at random: an unmet prerequisite wins over a new concept.' },
  { src: 'screenshots/app-04-tutor.png',
    caption: 'The tutor. Explain / Simplify / Give example / Exam answer, and each reply names the curriculum node it came from.' },
  { src: 'screenshots/app-04c-tutor-diagram.png',
    caption: 'Diagram view — drawn as SVG, so it stays sharp on any screen.' },
  { src: 'screenshots/app-05-practice.png',
    caption: 'Practice with a hint open. Hints come from the chapter\'s common-mistake list, so they point at the trap without giving the answer away.' },
  { src: 'screenshots/app-06-verdict.png',
    caption: 'Answer feedback — the correct option is marked and the working is shown, whether the student was right or wrong.' },
  { src: 'screenshots/app-07-score.png',
    caption: 'End of a practice run, with the recalculated mastery for that concept.' },
  { src: 'screenshots/app-08-parent.png',
    caption: 'Parent dashboard. The summary sentence is generated from the numbers, so it cannot claim progress the data does not show.' },
  { src: 'screenshots/app-09-phone-home.png',
    caption: 'The same student home on a phone.' },

  { src: 'screenshots/p2-00-register-boards.png',
    caption: 'Phase 2 — registration now offers every board that has a published syllabus behind it. The list is generated from the content, so a board can never be advertised with nothing behind it.' },
  { src: 'screenshots/p2-02-msb-home.png',
    caption: 'Phase 2 — the same application running Maharashtra State Board. Two chapters instead of CBSE\'s one, and a different concept list. No code changed; only a data file was added.' },
  { src: 'screenshots/p2-03-msb-tir.png',
    caption: 'Phase 2 — Total Internal Reflection, a Maharashtra Board topic CBSE Class 10 treats elsewhere. A board is not a relabelling of another board.' },
  { src: 'screenshots/p2-04-msb-dispersion.png',
    caption: 'Phase 2 — dispersion through a prism, with the spectrum drawn in the order the physics actually produces.' },
  { src: 'screenshots/p2-05-admin.png',
    caption: 'Phase 2 — the content admin panel. Switch syllabus, see its statistics, status, version and effective dates, and run validation.' },
  { src: 'screenshots/p2-06-admin-tree.png',
    caption: 'Phase 2 — the curriculum tree: every chapter, topic and concept with its objectives, question counts by difficulty, and prerequisites. "Thin" flags a concept that cannot support adaptive practice yet.' },
  { src: 'screenshots/p2-09-parent-msb.png',
    caption: 'Phase 2 — the parent dashboard, now grouping progress by chapter because a syllabus is not always a single chapter.' },

  { src: 'screenshots/p3-02-home-due.png',
    caption: 'Phase 3 — the schedule asks for itself. Two concepts are flagged Relearn because their scores decayed, one is simply overdue for review. The reason is stated on every row.' },
  { src: 'screenshots/p3-01-notes.png',
    caption: 'Phase 3 — notes to remember: one-minute revision, formula sheet, what you must be able to do, how to write it in the exam, and where students lose marks.' },
  { src: 'screenshots/p3-03-card-front.png',
    caption: 'Phase 3 — a flashcard. Cards are generated from the curriculum, so there is no second copy of the content to keep in sync.' },
  { src: 'screenshots/p3-04-card-back.png',
    caption: 'Phase 3 — the answer, with the student judging their own recall. That judgement is what drives the spacing ladder.' },
  { src: 'screenshots/p3-05-revision-done.png',
    caption: 'Phase 3 — end of a session. It refuses to send the student back round a flashcard loop that cannot help them, and points at practice questions instead.' },
  { src: 'screenshots/p3-06-phone-notes.png',
    caption: 'Phase 3 — notes on a phone. Every route was checked for horizontal overflow at 390, 768 and 1280 pixels.' },

  { src: 'screenshots/p5-01-home-mission.png',
    caption: 'Phase 5 — level, XP and the daily mission. Three goals covering learn, practise and recall, not three ways of saying "answer questions".' },
  { src: 'screenshots/p5-02-progress.png',
    caption: 'Phase 5 — progress measured against the student\'s own previous week. The page states outright that there is no leaderboard of other children, and why.' },
  { src: 'screenshots/p5-05-badges.png',
    caption: 'Phase 5 — badges. Each is a pure function of the event log, so none can be awarded twice or lost, and every one shows Earned or Locked in words as well as colour.' },
  { src: 'screenshots/p5-03-challenge.png',
    caption: 'Phase 5 — the chapter challenge: eight questions spread across the whole chapter, no hints, 75% to clear.' },
  { src: 'screenshots/p5-04-challenge-result.png',
    caption: 'Phase 5 — the result. A fail is explained in terms of what happens next, not just a score.' },
  { src: 'screenshots/p6-01-teacher.png',
    caption: 'Phase 6 — the teacher view leads with an instruction, not a number: which concept to re-teach this week, and the evidence for it.' },
  { src: 'screenshots/p6-02-teacher-concepts.png',
    caption: 'Phase 6 — concept by concept across the class, showing the secure / developing / struggling split rather than an average that hides it.' },
  { src: 'screenshots/p6-03-remedial.png',
    caption: 'Phase 6 — a remedial group: exactly the students below 40% on that concept, worst first, with the objectives and common mistakes to teach from.' },
  { src: 'screenshots/p6-04-student.png',
    caption: 'Phase 6 — one student, concept by concept, for the conversation with a parent.' },
  { src: 'screenshots/p6-05-phone-teacher.png',
    caption: 'Phase 6 — the class analytics on a phone, for a teacher checking between lessons.' },

  { src: 'screenshots/p8-01-marathi.png',
    caption: 'Phase 8 — the same CBSE/Maharashtra concept explained in Marathi. Note the draft warning: the translation has not been checked by a subject teacher, and the app says so rather than hiding it.' },
  { src: 'screenshots/p8-02-hindi.png',
    caption: 'Phase 8 — the same concept in Hindi. Explanation language is independent of the curriculum, so the paper stays English.' },
  { src: 'screenshots/p8-03-fallback.png',
    caption: 'Phase 8 — where a particular explanation has no translation yet, it says "shown in English" instead of silently doing nothing.' },
  { src: 'screenshots/p8-04-phone-marathi.png',
    caption: 'Phase 8 — Marathi on a phone, using the Devanagari font bundled with the app so it renders even on a device with no Indian-language font installed.' },
  { src: 'screenshots/p7-01-offline.png',
    caption: 'Phase 7 — the app running with the network switched off. The curriculum, questions and progress are all already on the device.' },

  { src: 'screenshots/p10-01-cost.png',
    caption: 'Phase 10 — what the AI actually costs per student per month. Move the sliders and the margin moves; the blueprint prices at ₹199-599 but never shows this.' },
  { src: 'screenshots/p10-05-pro-tier.png',
    caption: 'Phase 10 — the worst case each tier permits. This is the check that found the Pro tier, as originally drafted, would lose ₹861 a month on a heavy user.' },
  { src: 'screenshots/p10-02-privacy.png',
    caption: 'Phase 10 — privacy written for a parent to read: what is collected, and what is deliberately not.' },
  { src: 'screenshots/p10-06-privacy-rights.png',
    caption: 'Phase 10 — data rights that actually work. The export is the real stored record; the deletion really deletes.' },
  { src: 'screenshots/p10-03-phone-cost.png',
    caption: 'Phase 10 — the cost model on a phone.' },
  { src: 'screenshots/sec-01-xss-escaped.png',
    caption: 'Security review — a script-injection payload entered as the student name, shown here rendered as harmless text on the parent dashboard. It did not execute anywhere it is echoed.' }
];
