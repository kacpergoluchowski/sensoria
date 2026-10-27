# Sensoria

React + Vite + Tailwind CSS, JavaScript/JSX. Backend: Node.js + Express.

- `src/` — frontend.
- `api/` — backend, docelowo integracja z Google Calendar.
- `design/` — materiały projektowe.

Jeden wspólny `package.json`, bez workspaces. Wymagany Node.js 24 LTS i npm.

## Uruchomienie

    npm install
    npm run dev

Uruchamia frontend (http://localhost:5173) i API (http://localhost:3001).
Vite przekazuje zapytania `/api` do backendu. Endpoint kontrolny: `/api/health`.
Opcjonalnie skopiuj `.env.example` do `.env` w głównym folderze.
Po zmianie portu API dostosuj proxy w `vite.config.js`.

## Komendy

- npm run build - build produkcyjny.
- npm run preview - podglad buildu.
- npm run lint - sprawdzenie ESLint.
- npm run dev:frontend - tylko frontend.
- npm run dev:api - tylko backend z obserwowaniem zmian.
- npm start - tylko backend, bez obserwowania zmian.
- npm run format - formatowanie projektu.
- npm run format:check - sprawdzenie formatowania.

Build i preview dotyczą frontendu. Backend uruchamia się osobno.

Materialy projektowe: design/.
