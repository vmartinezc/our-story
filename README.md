# Our Story

An interactive project meant to feel like a digital scrapbook that combines a timeline and a map to tell the story of our families' journeys and relationship milestones.

## Features

- Timeline slider to move through key years
- Event cards grouped by person (`Person A`, `Person B`, or `Together`)
- Shared-year map markers that update with timeline selection
- Context-based shared state between timeline and map

## Tech Stack

- React 19
- Vite
- Chakra UI
- Leaflet + React Leaflet
- ESLint

## Getting Started

### Prerequisites

- Node.js (latest LTS recommended)
- npm

### Install and Run

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint

## Project Structure

```text
src/
	components/
		Map.jsx
		Timeline.jsx
	contexts/
		TimelineContext.jsx
	hooks/
		useMapData.js
		useTimelineEvents.js
	data/
		events.json
```

## Data Model (Events)

The app currently reads events from in-code arrays in `TimelineContext` and `useTimelineEvents`.

Each event follows this shape:

```json
{
	"id": 1,
	"year": "2019",
	"title": "Event title",
	"description": "Event details",
	"person": "a",
	"coordinates": [42.963, -85.668]
}
```

### Field Notes

- `id`: unique number
- `year`: string year used by slider grouping
- `person`: `a`, `b`, or `both`
- `coordinates`: optional `[lat, lng]`; required for map markers

## Current Status

- MVP in progress
- `src/data/events.json` exists but is not the active data source yet
- Next step: move event data into JSON and map it through a single source of truth
- Next step design: Change text color to improve contrast ratio between background and foreground colors to improve legibility 

## Accessibility

- Keep heading levels in logical order (`h1` → `h2` → `h3`)
- Ensure interactive controls (like slider) remain keyboard-usable

## Roadmap

- Move events to `src/data/events.json`
- Add data validation for event schema
- Add tests for timeline filtering and year-based map markers
- Expand family-story views (family tree and additional relationship milestones)



