# SONIC GUARD — Acoustic Safety Intelligence

A premium, responsive presentation layer for the existing SONIC GUARD acoustic-safety monitoring concept.

## Run locally

Open `index.html` in a modern browser while connected to the internet. For the installable PWA and Bluetooth connection flow, serve the folder over HTTPS (or localhost). A simple local server is:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in Chrome.

## What is included

- Existing Three.js handheld-device and smart-vest models.
- 360-degree pointer/touch rotation and zoom.
- Component selection, inspection, exploded view and wiring view.
- Scenario simulator, system architecture and technical specification panels.
- Existing Web Bluetooth connection flow for a compatible `SonicGuard` peripheral.
- Existing simulated telemetry, clearly labelled as simulated when no sensor is connected.
- Refined responsive product UI, premium dark industrial visual identity and mobile performance settings.
- PWA manifest and updated service-worker cache version.

## Technical choices

The project remains vanilla HTML/CSS/JavaScript with Three.js r128. React, React Three Fiber and GSAP were not added because the existing app does not use React and its current interactions do not require another animation framework. The 3D model remains procedural Three.js geometry; no Blender-authored GLB asset was present in the supplied archive, so this update does not claim to contain a Blender render or model.

Three.js is loaded from cdnjs with jsDelivr as a fallback. The first load requires an internet connection. The page and PWA shell are cached by the service worker, but the external Three.js library is not bundled for guaranteed offline 3D operation.

## Performance notes

- Rendering pixel ratio is capped at 1.15 on narrow/low-memory devices and 1.5 otherwise.
- Shadow mapping is disabled on narrow/low-memory devices and reduced for low-power devices.
- Camera interpolation and auto-rotation are frame-time aware.
- The existing render loop skips expensive scene renders when the scene is idle.

## Validation

- JavaScript syntax checked with Node.js.
- HTML parsed successfully with Python's standard HTML parser.
- Manifest validated as JSON.
- Service-worker JavaScript syntax checked with Node.js.
- A full visual/WebGL interaction test could not be completed in this environment because headless Chromium's WebGL/EGL context failed to initialize. Test the 3D scene in Chrome on the target Android phone before production release.

## Important limitations

- Device readings are simulated until a compatible physical sensor is connected.
- Bluetooth support requires a compatible browser/device and an HTTPS or localhost origin.
- Technical values and component descriptions are preserved from the supplied prototype; they have not been independently hardware-validated.
