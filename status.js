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

window.UPDATED = '13 September 2026';

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
    scope: 'CBSE · Class 10 · Science · one chapter',
    tasks: [
      { t: 'Landing page', s: 'todo' },
      { t: 'Parent-primary account architecture (parent account, child profiles beneath)', s: 'todo' },
      { t: 'Registration — email and mobile mandatory, student date of birth, parental consent captured', s: 'todo' },
      { t: 'Board / class / medium / subject / chapter selection', s: 'todo' },
      { t: 'AI tutor grounded in the chapter: Explain, Simplify, Give Example, Hint, Test Me', s: 'todo' },
      { t: 'Adaptive practice questions', s: 'todo' },
      { t: 'Concept mastery score, calculated not cosmetic', s: 'todo' },
      { t: 'Parent dashboard for that child', s: 'todo' },
      { t: 'Works properly in a phone browser', s: 'todo' },
      { t: 'AI provider key or funded budget', s: 'block', owner: 'client',
        note: 'Every tutor answer costs money per question. I cannot run this on my own account.' }
    ]
  },
  {
    id: 2,
    name: 'Curriculum engine',
    goal: 'The part that is genuinely hard, and the part a general chatbot cannot copy.',
    tasks: [
      { t: 'Board → class → subject → chapter → topic → concept → learning objective schema', s: 'todo' },
      { t: 'Prerequisite graph between concepts', s: 'todo' },
      { t: 'Content admin panel — create, review, approve, publish, archive', s: 'todo' },
      { t: 'Academic-year versioning (old syllabus never overwritten)', s: 'todo' },
      { t: 'Content validation pipeline — out-of-syllabus check before publish', s: 'todo' },
      { t: 'Second board onboarded against the same engine', s: 'todo' }
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
   The section renders an honest empty state until the first one exists. */
window.SHOTS = [];
