# Internship Admin

---

## 1. Internship Admin Overview

### Summary

**Value:** Makes your work visible, trackable and easy to review across Slack, GitHub and Asana.
**Risks:** Skipping logs or reflections breaks the record of your learning and makes it harder for mentors to help.
**Next step:** Set up your folders, files and Asana tasks in Week 1 and start using the templates from Day 1.

### 1.1 Systems at a Glance

During the internship you’ll use three core systems for admin and communication:

#### Daily Logs

-   **GitHub:** Detailed daily log file for each working day.
-   **Asana:** Comment with a link to the log.
-   **Slack:** Share your daily stand-up and link to the previous day’s log if requested.

#### Weekly Planning

-   **GitHub:** Weekly planning file for the coming week.
-   **Asana:** Comment with planning link each Friday.
-   **Slack:** Used during stand-ups to confirm what you’re focusing on.

#### Weekly Reflections

-   **GitHub:** Weekly reflection file at the end of each week.
-   **Asana:** Comment with reflection link each Friday.
-   **Slack:** Supports a bi-weekly retrospective with your mentor and/or cohort.

There is also a final internship reflection in GitHub at the end of the programme.

### 1.2 Tools and How They Fit Together

#### Slack

-   Daily stand-ups (what you did, what you’ll do, blockers).
-   Bi-weekly retrospectives in a shared channel or call.

#### GitHub

-   Code, pull requests and issues.
-   `logs/` folder for daily logs, weekly planning and weekly reflections.

#### Asana

-   Tracks higher-level tasks and client/internal work.
-   One main task each for: Logs, Weekly Planning, Weekly Reflections.
-   You post links to your GitHub files as comments on these tasks.

#### Harvest

-   Official time tracking app.
-   Total hours for the day are copied into your daily log.

### 1.3 Weekly Rhythm

**Every day (Mon–Fri):**

**Before or immediately after stand-up (Slack):**

-   Start your Harvest timer.
-   Open today’s Daily Log file in GitHub.

**During the day:**

-   Work on your assigned tasks.
-   Update your Daily Log at least every 2–3 hours.

**End of day:**

-   Finalise the Daily Log and push to GitHub.
-   Comment in Asana Logs task with today’s log link.

**Every Friday:**

-   Finalise Daily Log.
-   Complete Weekly Reflection (GitHub) and comment link in Asana Weekly Reflections task.
-   Complete Weekly Planning for next week (GitHub) and comment link in Asana Weekly Planning task.
-   Participate in any scheduled retro or check-in on Slack.

**Every second Friday:**

-   Short bi-weekly retrospective in Slack or over a call, using your logs and reflections as input.

### 1.4 Minimum Expectations

#### Time

-   Aim for 40 hours per week, tracked in Harvest.
-   Hours in Harvest must match the hours summarised in your Daily Logs.

#### Visibility

-   Daily commits to GitHub unless explicitly agreed otherwise.
-   Daily Logs, Weekly Planning and Weekly Reflections must be up to date and linked in Asana.

#### Communication

-   Reply to Slack and Asana mentions within the same working day where possible.
-   Clearly state blockers in logs, reflections and stand-ups so mentors can assist.

### 1.5 Notes

-   When in doubt, write it down: it’s better to over-document than under-document.
-   Use existing intern examples in the repo (e.g. Brandon’s logs) as a reference for tone and depth.
-   Consistency is more important than perfection; keep to the same structure week to week.

---

## 2. Daily Logs

### Summary

**Value:** Creates a day-by-day history of what you did, how long it took and how you felt about it.
**Risks:** Vague or missing logs make it hard to assess progress, unblock you or write reference letters later.
**Next step:** Set up your `logs/` structure and start using the Daily Log template from your first day.

### 2.1 Purpose

Daily Logs are your work journal. They should answer:

-   What did you actually do today?
-   How did it go?
-   How much time did you spend and on what?
-   What needs attention tomorrow (or from your mentor)?

They should be detailed enough that someone else could reconstruct your week without asking you.

### 2.2 Folder and File Structure (GitHub)

In your project repo:

Create a top-level folder:

```
logs/
```

For each week, create a subfolder:

```
logs/week10/, logs/week11/, etc.
```

For each working day, create a daily log file, following a consistent naming pattern:

```
logs/week10/logs-week10-day1.md
logs/week10/logs-week10-day2.md
…
```

Follow the patterns used in the example logs in the repo.

✅ **Tip:** Start from an existing example (e.g. Brandon’s logs-week10-day3.md) and copy it for each new day, updating dates and content.

### 2.3 Daily Log Template (Markdown)

Recommended structure:

```markdown
# Week 10, Day 3 Log

**Date:** 2025-11-05

---

## Today's Progress

### What did you accomplish today?

-   Task 1 – short description (Issue #85, PR #100)
-   Task 2 – short description (link to PR/branch if relevant)
-   Course / tutorial progress
-   Meetings or check-ins

---

## How do you feel about today’s progress?

-   Short paragraph on how the day went.
-   Mention any blockers, confusion, or wins.

---

## Time Logs

-   2.0 hrs – Block Editor tutorial + feedback
-   1.5 hrs – Issue #85 (Repeatable Field Groups) – PR + review
-   1.5 hrs – Issue #86 (Custom Blocks) – PR + review
-   1.5 hrs – Issue #87 (Multi-Block Architecture) – PR + review + fixes
-   0.5 hrs – Milestone creation + naming updates

**Total:** 8.0 hrs (must match Harvest)

---

## Notes

-   Anything you want your mentor to know.
-   Items to revisit tomorrow.
-   Links to issues, PRs, or resources.
```

You may adjust headings slightly, but the core sections must remain: Today’s Progress, Feelings, Time Logs, Notes.

### 2.4 Daily Workflow

**After stand-up (Slack):**

-   Start or update your Harvest timer.
-   Open today’s Daily Log file in GitHub (create it if needed).
-   Note your main focus for the day based on your Weekly Plan.

**During the day:**

-   Update your Today’s Progress section as you complete tasks.
-   Keep Time Logs roughly in sync with Harvest entries.
-   If you get blocked, note it in the log and in Slack.

**End of day:**

-   Finalise the Daily Log:
    -   Ensure Time Logs match Harvest.
    -   Add a brief comment in How do you feel about today’s progress?
-   Commit and push the updated log file to GitHub.

**Report in Asana:**

-   Open the main Logs task.
-   Add a comment with:
    -   The GitHub link to today’s Daily Log.
    -   Optional short note if there’s anything you’d like reviewed.

Do not create subtasks for days; all links live as comments on the single Logs task.

### 2.5 Notes

-   Keep your writing concise but specific. “Worked on plugin” is weak; “Refactored CPT registration into separate file and fixed HTTP 500” is strong.
-   If you have no code to show (e.g. learning day), your log should still be detailed.
-   Daily Logs are used during 1:1s, retrospectives and final review – treat them as part of your portfolio.

---

## 3. Weekly Reflections

### Summary

**Value:** Helps you step back, spot patterns, and turn experience into learning.
**Risks:** Without reflection you may repeat mistakes, miss growth opportunities or misalign with expectations.
**Next step:** Block 30–45 minutes every Friday to complete your Weekly Reflection before you log off.

### 3.1 Purpose

Weekly Reflections help you:

-   Capture what you actually learned, not just what you did.
-   Identify what went well and what needs adjustment.
-   Prepare for retrospectives, 1:1s and future planning.

Think of this as your weekly debrief.

### 3.2 Folder and File Structure (GitHub)

In the same `logs/weekNN/` folder, create one reflection file per week:

```
logs/week12/logs-week12-reflections.md
```

Use the same naming pattern each week.

At the end of the internship you’ll also create a global reflection:

```
logs/reflections.md
```

(covers the entire programme).

### 3.3 Weekly Reflection Template (Markdown)

```markdown
# Week 12 Reflection

**Dates:** 2025-11-24 to 2025-11-28

---

## Courses, Learning, and Key Activities

-   Brief list of courses, tutorials, major tasks and milestones.
-   Include links to key PRs/issues where useful.

---

## What Went Well?

-   Wins, breakthroughs and things you’re proud of.
-   Examples of where you used feedback effectively.

---

## What Can Be Improved?

-   Specific areas that didn’t go well.
-   Processes, habits or skills you want to adjust.

---

## What Have You Learned?

-   Technical skills (tools, libraries, workflows).
-   Product / UX / teamwork insights.
-   Anything that surprised you.

---

## Next Actions

-   Concrete actions for next week (can feed into Weekly Planning).
-   Skills you want to practice or resources you want to use.
```

### 3.4 End-of-Internship Reflection

When the internship ends:

Create `logs/reflections.md`.

Write a longer retrospective covering:

-   What you learned overall.
-   Tools, workflows and habits that helped most.
-   Major challenges and how you handled them.
-   How you’d like to continue developing after the internship.

This file is often used as input for reference letters and future planning.

### 3.5 Reporting in Asana

**Every Friday:**

-   Finalise your weekly reflection in GitHub.
-   Commit and push.
-   Open the main Weekly Reflections task in Asana.
-   Add a comment with:
    -   A short note: e.g. Week 12 reflection complete – ready for review.
    -   The GitHub link to the reflection file.

Do not create subtasks. The Weekly Reflections task stays open for the entire internship.

### 3.6 Link to Slack Retrospectives

Every second Friday there may be a retro session in Slack or a call. To prepare:

-   Skim your Daily Logs and Weekly Reflections.
-   Be ready to share:
    -   2–3 wins.
    -   2–3 challenges.
    -   2–3 ideas for improving your own workflow or the programme.

### 3.7 Notes

-   Be honest. Reflections are for learning, not for performing.
-   Mention blockers even if you didn’t fully solve them. That’s how mentors know where to help.
-   Over time, these reflections will show your growth curve – treat them as a personal learning asset.

---

## 4. Weekly Planning

### Summary

**Value:** Turns vague intentions into a clear, realistic plan for the coming week.
**Risks:** No plan means scattered focus, missed deadlines and weak progress in key learning areas.
**Next step:** Complete your Weekly Plan every Friday after your reflection and before clocking out.

### 4.1 Purpose

Weekly Planning connects:

-   Your goals (what you want to achieve and learn).
-   Your tasks (what you’ll actually do, day by day).
-   Your mentor’s expectations (what must be done first).

It gives mentors a quick, single place to see what you’re aiming for next week.

### 4.2 Folder and File Structure (GitHub)

In each `logs/weekNN/` folder create one planning file:

```
logs/week13/logs-week13-planning.md
```

Keep this convention for all weeks of the internship.

### 4.3 Weekly Planning Template (Markdown)

```markdown
# Week 13 Planning (2025-11-24 to 2025-11-28)

---

## Weekly Goals

-   Goal 1 – specific, measurable (e.g. “Resolve FacetWP filtering bug and release RC2 of plugin”).
-   Goal 2 – learning (e.g. “Complete WordPress Section Styles module and apply to CPT templates”).
-   Goal 3 – project milestone (e.g. “Finish core archive templates for CPTs”).

---

## Key Tasks

### Monday (2025-11-24)

-   [ ] Fix single-fish template and re-test.
-   [ ] Tag release for plugin (RC2).
-   [ ] Start course: Creating a 4-Page Business Website.

### Tuesday (2025-11-25)

-   [ ] Continue plugin progression (issues #86–#87).
-   [ ] Clear BugHerd tasks assigned to me.
-   [ ] Continue 4-Page Website course; take notes in docs/.

### Wednesday (2025-11-26)

-   [ ] Fix local DB to register CPTs correctly.
-   [ ] Add short content + custom fields to each CPT.
-   [ ] Retry FacetWP integration after fixes.

### Thursday (2025-11-27)

-   [ ] Learn Section Styles in block themes.
-   [ ] Implement Section Styles on key templates (CPT archives, blog, 404).

### Friday (2025-11-28)

-   [ ] Review weekly deliverables and tick off completed tasks.
-   [ ] Document progress and learning (feed into Weekly Reflection).
-   [ ] Draft next-phase planning items (for next week’s plan).

---

## Learning Goals

-   FacetWP troubleshooting and block-based filtering.
-   Plugin testing and release workflow.
-   Section Styles in WordPress block themes.

---

## Technical Skills Focus

-   FacetWP debugging and performance.
-   Plugin release management and tagging.
-   Local WordPress environment setup and testing.

---

## Collaboration & Communication

-   Daily updates in Slack stand-up.
-   Daily Logs updated and pushed before clock-out.
-   Raise blockers early in Slack and Asana comments.
-   Share key learnings or questions in 1:1s.

---

## Success Metrics

-   [ ] FacetWP errors resolved and tested.
-   [ ] Plugin tag release (RC2) completed.
-   [ ] Critical templates (CPT archives, blog, 404) are functional.
-   [ ] Local environments configured and verified with LSX demo theme.
-   [ ] Learning goals demonstrable via PRs, notes or small demos.
```

You can simplify or expand the daily task lists depending on the week, but keep the core sections: Weekly Goals, Key Tasks, Learning Goals, Technical Skills, Collaboration & Communication, Success Metrics.

### 4.4 Using GitHub Copilot (Optional Enhancement)

If Copilot or an AI assistant is available, you can:

-   Draft a quick list of goals and constraints in plain English.
-   Ask Copilot to:
    -   Break your goals into daily tasks.
    -   Suggest Learning Goals and Success Metrics.
-   Review and edit the generated plan to keep it realistic for a 40-hour week.

This should speed up planning, not replace your own judgement.

### 4.5 Reporting in Asana

**Every Friday, after writing your Weekly Plan:**

-   Commit and push the planning file to GitHub.
-   Open the main Weekly Planning task in Asana.
-   Add a comment with:
    -   A short note (e.g. Week 13 planning complete – ready for review).
    -   The GitHub link to the planning file.

Again, do not create subtasks. All weekly plans are tracked via comments on the single Weekly Planning task.

### 4.6 Notes

-   Planning should be ambitious but realistic; if everything is always done by Thursday, you’re probably under-planning.
-   At the end of the week, compare the plan with reality in your Weekly Reflection and adjust for the next week.
-   Your Weekly Planning + Daily Logs + Weekly Reflections together tell the full story of your internship. Keep them aligned.

---

## 5. Internship Admin – Frequently Asked Questions (FAQ)

### 1. How do I know whether to put something in Slack, GitHub, or Asana?

Slack is for daily stand-ups, quick questions, and bi-weekly retros.

GitHub is for code, issues, pull requests, daily logs, weekly planning, and weekly reflections.

Asana is for task tracking — you post links to your GitHub logs, reflections, and planning as comments (no subtasks).

When unsure:

-   If it’s part of your work history, it goes in GitHub;
-   If it’s part of team coordination, it goes in Asana;
-   If it’s real-time communication, it goes in Slack.

### 2. What if I forget to do my Daily Log, Weekly Planning, or Weekly Reflection?

These three items are mandatory.

If you forget:

-   Update and push the missing file immediately.
-   Post the link in the correct Asana task.
-   Let your mentor know in Slack if it will affect your next day’s work.

Missing logs or reflections repeatedly will affect your internship review.

### 3. What does a “good” Daily Log or Weekly Reflection look like?

A good log or reflection is:

-   Specific (mentions tasks, issues, PRs, tutorials, and actions)
-   Updated throughout the day/week
-   Honest about challenges and blockers
-   Consistent with your Harvest hours

If it helps: compare your writing to examples in logs/ or previous intern work (e.g., Brandon’s logs).

### 4. Do I need to create GitHub issues for everything I work on?

Yes — for any meaningful task, learning activity, fix, or feature.

Creating issues helps you:

-   Track your own progress
-   Link work in your logs
-   Provide context for mentors
-   Create a record for your portfolio

Small one-off notes can go in Daily Logs, but anything involving code, learning time, research, or multi-step work belongs in an issue.

### 5. What should I do when I’m stuck or blocked on something?

Being blocked is normal. The process is:

-   Write down the problem clearly in your Daily Log.
-   Search the docs, examples, resources and previous issues.
-   If still stuck, ask for help in Slack or GitHub:
    -   Include screenshots, error messages, links to branches or PRs.
    -   Describe what you tried and what you expected to happen.
-   While waiting, move to another task in your Weekly Plan.

Good blockers include:
“API isn’t returning data”,
“Gutenberg block not rendering”, or
“Not sure how to structure plugin files”.
