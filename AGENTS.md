# Agent Instructions

## Project overview

A TypeScript Node.js application that reads a CSV file and maps each row into a Beacon-standard format. The primary task for this repository is implementing the row mapping logic in `src/mapRow/`.

## Commands

- `yarn start` — runs the importer with file watching (auto-restarts on changes)
- `yarn test` — runs the test suite using Node's native test runner

## Architecture

```
start.ts              entry point
src/
  index.ts            orchestrates read → map → log
  readCSVFile.ts      parses a CSV file into Record<string, string>[]
  mapRow/
    index.ts          maps one CSV row to the Beacon format (main work area)
test/
  readCSVFile.ts      tests for the CSV reader
  mapRow/             tests for the row mapper (add files here)
input.csv             sample data with intentionally messy values
```

## Tech stack

- **Runtime:** Node 24 (see `.nvmrc`)
- **Language:** TypeScript 5, compiled via `ts-node` (no separate build step)
- **Testing:** Node native test runner (`node:test` / `node:assert`)
- **Libraries:** `fast-csv` (CSV parsing), `lodash` (utilities)