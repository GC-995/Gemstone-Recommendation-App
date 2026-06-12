# Gemstone Recommendation App

A self-contained web app for recommending gemstones from a user profile. It was built for an interview assessment where the focus is clear thinking, product structure, and a working submission rather than production scale.

## Features

- Profile form with intention, birth month, daily context, color mood, budget, style, wear format, authenticity preference, durability priority, spiritual openness, and sensitive-skin preference.
- Scored recommendations with plain-language reasons.
- Sort by best match, lower cost, or easy care.
- Shortlist saved in `localStorage`.
- Lightweight comparison summary for shortlisted gemstones.
- Print-friendly recommendation report.
- No backend or external dependency required.

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Browser `localStorage`

## How To Run

Open `index.html` in a browser.

For a local server, run one of these from the project folder:

```bash
node server.mjs
```

Then open:

```text
http://localhost:4173
```

## Recommendation Logic

Each gemstone has structured metadata:

- applicable goals
- birth month alignment
- day-to-day context
- color mood
- budget range
- style fit
- preferred wear format
- authenticity preference
- durability priority
- care level
- suggested wearing method
- metal or material guidance

The app calculates a score from those signals and explains the strongest reasons for each recommendation. This keeps the logic inspectable for reviewers and easy to extend.

## Project Structure

```text
.
|-- index.html
|-- styles.css
|-- app.js
|-- server.mjs
|-- README.md
|-- PROJECT_NOTES.md
`-- AI_USAGE.md
```

## Future Improvements

- Add authentication for saved user profiles.
- Add an admin catalog editor for gemstones.
- Add server-side persistence and analytics.
- Add multilingual support.
- Add test coverage with Playwright or Cypress.
