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

window.UPDATED = '13 September 2026 · Phase 2 built';

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
    tasks: [
      { t: 'Notes engine — quick notes, formula sheet, common mistakes', s: 'todo' },
      { t: 'Smart flashcards', s: 'todo' },
      { t: 'Spaced revision engine (3 / 7 / 14 / 30-day review, pulled earlier on failure)', s: 'todo' },
      { t: 'Adaptive difficulty', s: 'todo' },
      { t: 'Student learning graph and next-concept recommendation', s: 'todo' }
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
    tasks: [
      { t: 'XP, levels, streaks, badges', s: 'todo' },
      { t: 'Daily mission', s: 'todo' },
      { t: 'Chapter-end challenge', s: 'todo' },
      { t: 'Personal-best progress instead of public student ranking', s: 'todo',
        note: 'Deliberate: student data must not appear on a public leaderboard.' }
    ]
  },
  {
    id: 6,
    name: 'Teacher & school',
    goal: 'The B2B layer. My recommendation is to pull this forward — schools pay per student per year and do not churn after exam season.',
    tasks: [
      { t: 'Teacher dashboard — classes, students, assignments', s: 'todo' },
      { t: 'AI teaching assistant — generate tests, worksheets, remedial lessons', s: 'todo' },
      { t: 'Class-level weak-concept analytics', s: 'todo' },
      { t: 'School tenant isolation', s: 'todo' },
      { t: 'School-wide analytics', s: 'todo' }
    ]
  },
  {
    id: 7,
    name: 'Mobile applications',
    goal: 'One React Native codebase producing both stores.',
    tasks: [
      { t: 'Shared React Native codebase', s: 'todo' },
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
    tasks: [
      { t: 'Language layer separated from curriculum structure', s: 'todo' },
      { t: 'Marathi and Hindi explanation', s: 'todo' },
      { t: 'Subject-terminology validation (literal machine translation is not safe for exam material)', s: 'todo' }
    ]
  },
  {
    id: 9,
    name: 'Voice & vision',
    goal: 'Ask by speaking; solve by photographing.',
    tasks: [
      { t: 'Speech-to-text and text-to-speech', s: 'todo' },
      { t: 'Camera doubt solving — OCR, question detection, curriculum mapping', s: 'todo' },
      { t: 'Identity stripped before anything reaches a third-party AI provider', s: 'todo',
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
      { t: 'Privacy policy and verifiable parental consent records', s: 'todo' },
      { t: 'AI cost controls — model routing, caching, per-tier daily quotas', s: 'todo' },
      { t: 'Load and performance pass', s: 'todo' },
      { t: 'Security review', s: 'todo' }
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
    caption: 'Phase 2 — the parent dashboard, now grouping progress by chapter because a syllabus is not always a single chapter.' }
];
