# Ascent — GATE CSE & DA command center

A zero-dependency, offline-capable study system for GATE CSE + GATE DA aspirants following GO Classes–style lecture courses. The whole app is one `index.html`; the extra files just make it installable and offline.

---

## Deploy on GitHub Pages (3 minutes)

1. Create a **public** repo (e.g. `gate-tracker`).
2. Upload all five files to the repo root: `index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`. Commit.
3. **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)`. Save.

Live at `https://shhubham311.github.io/Ascent-Gate/` . On your phone, "Add to Home Screen" — it installs as a real app, works offline, and can send notifications.

*(`index.html` alone still works on its own; without the other files you only lose install/offline.)*

**Hugging Face Spaces alternative:** new Space → SDK **Static** → upload the same files.

---

## Data & sync

Everything is stored in your browser's `localStorage` — private, offline, free.

- **JSON backup** — Settings → Export / Import.
- **Cross-device sync (easy)** — Settings → **Create sync link**. Ascent compresses everything into a link; send it to yourself (WhatsApp, email, AirDrop, Notes), open it on the other device and confirm. No account, no password, no setup. The data rides inside the link's `#fragment`, which browsers never transmit to any server — but anyone holding the link can read your study data, so don't post it publicly.
- **Cross-device sync (advanced, optional)** — if you already use GitHub, Settings → Advanced lets you paste a token with only the **gist** scope so Ascent can push/pull automatically from a secret gist on your own account.
- **Calendar** — Settings → Export `.ics`: 60 days of study blocks, mock days, revision due-dates and exam days, importable into Google Calendar.

---

## What's inside

**Dashboard** — dual live countdown; **adaptive required-pace number** (rises when you fall behind, falls when you run ahead — see below); readiness score; weighted progress rings; current phase with time split; streak; consistency heatmap; **editable daily plan** (auto-generated from your phase, progress and mock weak-areas — edit, delete, add your own, or mark a task *repeat daily*); **revision queue** (spaced repetition, due today); **focus timer** that auto-logs finished blocks into today's hours and the subject you picked; quick log.

**Subjects** — 20 pre-loaded subjects with lecture counts, marks weightage, PYQ pools, revision passes. Steppers auto-count lectures into today's log. Add/edit/delete anything.

**Planner** — the one number that matters (hours/day to finish on time); **Road to GATE CSE / DA** runways listing every phase with its exact date range, length, daily split and mock cadence; allocation donut; **what-if slider** (days to completion, finish date, days sooner/later than your current plan, days left over for practice); per-exam pacing; weekly rhythm template.

**Insights**
- **Readiness score** (0–100) from coverage, PYQ depth, mock form, revision health and consistency — plus the single biggest lever to move it.
- **Study debt** — planned vs actual hours, with a recovery curve when you fall behind (add *x*/day for 14 days) instead of silently inflating your required pace.
- **Burn-down chart** — lectures remaining vs the ideal line, with your real 14-day pace projected forward.
- **ROI ranking** — marks per remaining hour, per subject: what to study next, and what not to start.
- **Two-paper overlap optimizer** — how much of your remaining syllabus is shared, and what the *second* paper actually costs per day.
- **Rank projection** — GATE score and an AIR band from your last three mocks (rough heuristic, not a predictor).
- **Attempt strategy** — accuracy, attempts, and the marks the ⅓ negative marking is costing you.
- **Weak areas** flagged in mocks — automatically pushed into the daily plan.

**Daily Log** — hours, lectures, questions, notes; streaks, averages, editable history, and a two-mode heatmap: **Year** (24 weeks with month labels) and **Month** (calendar grid showing exactly how many hours you did on each day, with monthly totals, days studied, actual-vs-planned hours and your best day — tap any day to edit its log).

**Mocks** — score trend chart, best/avg/last, per-paper filter, attempted/correct counts, weak-area tagging, analysis notes.

**Settings** — exam dates; both/CSE-only/DA-only; **weekday vs weekend hours**; revision buffer; minutes-per-lecture; spaced-repetition intervals; focus-block length; theme; **phase-tinted accent** (the UI warms from indigo to rose as the exam nears); notifications; export/import/ics/share; gist sync.

**Everywhere** — ⌘K / Ctrl-K command palette (or `/`), and `d s p i l m` to jump between views.

### How the required pace is computed

Five steps, all visible inside Planner → *How today's number is computed*:

1. **Work left** — remaining lectures × minutes-per-lecture (default 55) = hours of watching left.
2. **Days to do it in** — days until the exam **minus your revision buffer** (default 30), because lectures must finish before the buffer starts. Subjects shared by both papers are paced against the *nearer* exam.
3. **Lecture hours/day** = step 1 ÷ step 2, summed per subject against its own deadline.
4. **Scale by phase** — in Foundation, lectures are only 60% of a study day (the rest is practice/revision/mocks), so the *total* day = lecture hours ÷ 0.60. In Final Sprint that share drops to 5%, and the number reflects it.
5. **Adapt to reality** — Ascent compares hours you *planned* (weekday/weekend budget) with hours you actually *logged*. A deficit is amortised over the next 14 days and added to today's target; a surplus is credited back and subtracted (capped at −1.5 h/day, so one heroic Sunday can't buy a lazy week). Needs 3+ logged days to activate.

So the number is genuinely dynamic: study more than required and it drops tomorrow — both because fewer lectures remain and because the surplus is credited. Study less and it climbs, so the debt never quietly disappears. It also recomputes whenever you tick a lecture, log a day, or a day passes.

---

## Adjust before you trust it

- **Exam dates** default to 6 & 7 Feb 2027 (GATE's usual pattern). Update when the official schedule lands.
- **Lecture counts, weightages, PYQ pools** are practical estimates — edit them to match your batch.
- **Minutes per lecture** should be real time including pauses and notes (45–70 is typical).
- **Rank projections** are heuristics from historical marks→rank patterns. Read the band, not the number.

Unofficial; not affiliated with GO Classes, the IITs, or the GATE organizing committee.
