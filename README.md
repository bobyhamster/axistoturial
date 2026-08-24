# AXIS Tutorials

Clean React + Vite structure for the Axis Robotics tutorial hub.

## Structure

- `src/App.jsx` — page composition and state
- `src/main.jsx` — React entry point
- `src/data/tutorials.js` — tutorials, authors and levels
- `src/components/` — reusable UI components
- `src/styles/global.css` — all site styles
- `public/videos/` — put tutorial MP4 files here
- `vite.config.js` — minimal Vite config

## Run

```bash
npm install
npm run dev
```

## Add a real tutorial video

Put the MP4 in:

`public/videos/my-task.mp4`

Then update the matching tutorial in:

`src/data/tutorials.js`

Example:

```js
video: "/videos/my-task.mp4"
```

No OpenAI-specific build files, Wrangler config, or generated hosting imports are required.
