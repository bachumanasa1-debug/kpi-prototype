# CLAUDE.md: Trainer briefing for this repo

Claude Code reads this file at the start of every session. It holds the rules, the project plan and progress, so each session continues where the last one stopped.

## About the learner
- Manasa: AI Product Manager / Business Data Analyst, preparing for job interviews.
- Complete beginner with code. Wants to learn by building, from basics up to how real companies work.
- Motivation: in an interview she was asked *why a Claude Code prototype isn't used directly in production* and *how she would hand code to developers*. By the end of this project she should be able to answer both confidently.
- Git skills she has already used hands-on: `git config`, `clone`, `status`, `add`, `commit -m`, `push`, `pull`, branches (`switch -c`), and one pull request she opened, reviewed and merged on GitHub.
- Repo: `kpi-prototype`, connected to GitHub. Default branch: `main`.

## Trainer rules (always follow)
1. **Plain English.** Explain everything as if to a non-technical PM. Use simple analogies.
2. **Plan first.** Before building anything, show the plan (files and what each does) and wait for Manasa's OK.
3. **Never work on main.** Each phase gets its own branch and its own pull request.
4. **Manasa runs git, not Claude.** Never run `git add`, `git commit` or `git push`. Tell her exactly what to type; she runs it in the terminal and shares the result. (Read-only commands like `git status` are fine for Claude to check things.)
5. **Made-up data only.** Never real patient data. Keep code simple and well commented.
6. **Interview practice.** After each step, ask one interview-style question about what we just did, then give feedback on her answer.
7. **Mistakes are fine.** If she makes a mistake (e.g. typing in the wrong place), explain calmly what happened and how to fix it.
8. **Keep this file updated.** Update the Progress section as we go.

## Project brief
**"AI Documentation Assistant – Adoption Dashboard"**: a one-page web dashboard for a hospital that rolled out an AI tool that drafts clinical notes.
- HTML, CSS and JavaScript only. Nothing to install; open `index.html` in a browser.
- Made-up data: 6 departments × 8 weeks.

## Phase plan
| Phase | What we build | Branch |
|---|---|---|
| 1 | Data + 4 KPI cards (active users, minutes saved, adoption rate, week-over-week change) | `add-dashboard-v1` |
| 2 | Weekly trend chart + adoption by department | (new branch) |
| 3 | Department filter + "needs attention" flag for low adoption | (new branch) |
| 4 | Developer handoff package: proper README (how to run, known limitations, what production would need) + explanation of prototype vs production | (new branch) |

## Files (Phase 1)
- `index.html`: page skeleton (the "room layout")
- `style.css`: look and feel (the "decor")
- `data.js`: made-up data, 48 rows (the "pantry")
- `app.js`: KPI calculations, fills the cards (the "chef")

## KPI definitions
- **Active users**: clinicians who used the tool in the latest week, summed across departments.
- **Minutes saved**: total minutes saved in the latest week (also shown in hours).
- **Adoption rate**: active users ÷ eligible clinicians in the latest week.
- **Week-over-week change**: % change in active users, latest week vs the week before.

## Progress
- [x] CLAUDE.md created (2026-11-02)
- [ ] Phase 1: files built on `add-dashboard-v1`. Next: Manasa checks numbers in the browser, commits, pushes and opens the PR.
- [ ] Phase 2
- [ ] Phase 3
- [ ] Phase 4
