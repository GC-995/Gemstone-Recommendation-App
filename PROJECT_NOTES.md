# Project Notes

## Objective

Build a working gemstone recommendation app that demonstrates product thinking, frontend structure, and clear engineering trade-offs within a limited assessment timeframe.

## Architecture

The app is intentionally frontend-only. The gemstone catalog is represented as structured JavaScript objects, and the recommendation engine scores those objects against the user's selected profile.

Main modules:

- `index.html`: application layout and reusable card template
- `styles.css`: responsive interface, card visuals, print layout
- `app.js`: gemstone data, scoring logic, rendering, sorting, shortlist state
- `server.mjs`: tiny static server for demos

## Key Assumptions

- Recommendations are lifestyle suggestions, not guaranteed astrological or medical advice.
- Users may be students, so affordability and low-maintenance options matter.
- Reviewers should be able to run the app without installing dependencies.
- A transparent scoring model is more useful for the assessment than a black-box model.

## Recommendation Scoring

Signals included:

- primary user intention
- birth month association
- day-to-day usage context
- color mood
- budget fit
- preferred jewelry style
- preferred wearing format
- authenticity preference
- durability priority
- sensitive-skin preference
- spiritual openness
- gemstone care level

The score is capped from 0 to 99 and paired with human-readable reasons.

## Design Decisions

- Used vanilla JavaScript to avoid dependency friction.
- Kept the first screen as the actual app experience, not a marketing page.
- Added a richer recommendation profile, shortlist, and comparison area to make the app feel useful beyond a static result list.
- Included print support so users can export or demo their recommendation report.

## Future Improvements

- Add automated tests for scoring and UI interactions.
- Move the gemstone catalog into JSON or a backend API.
- Add a form to enter birth date and derive zodiac or birthstone automatically.
- Add an admin dashboard to manage gemstones and scoring weights.
- Add accessibility testing and keyboard-focused interaction polish.
