# Loss Valley

**Author:** Abdi Abdikarim

Loss Valley is a five-minute browser activity about **learning rate and gradient descent**. The learner changes one slider and watches a model weight move across a simple loss curve.

The page focuses on one named section of *Deep Learning with Python, Third Edition* by François Chollet and Matthew Watson:

- Chapter 2, **“The engine of neural networks: Gradient-based optimization”**

Source: <https://deeplearningwithpython.io/chapters/chapter02_mathematical-building-blocks/#the-engine-of-neural-networks-gradient-based-optimization>

## What the learner does

1. Choose a learning rate.
2. Press **Take one step** or **Run**.
3. Watch the weight, loss and path change.
4. Compare a small, useful and very large learning rate.

The interaction uses a simple U-shaped loss curve. It is a teaching model, not a real neural-network training run. The update follows the chapter's gradient-descent rule: move the parameter in the opposite direction from the gradient, with the learning rate controlling the size of the move.

## Public URL

Live site: <https://playable-deep-learning-kohl.vercel.app/>

GitHub repository: <https://github.com/CABDUWAHAAB/loss-valley>

## Run locally

Open `index.html` in a current desktop browser. The compiled stylesheet is included, so no installation is needed just to view the site.

You can also serve the folder locally:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Change the design

The source styles use **SCSS**, **BEM class names** and **TailwindCSS v3**. Tailwind utilities are applied inside the BEM classes with `@apply`; the HTML does not contain utility-class lists. Layout uses Flexbox, not CSS Grid.

```powershell
npm install
npm run build
```

Run the build and math check together with `npm run check`.

## Project structure

```text
playable-deep-learning/
|-- README.md
|-- process-note.md
|-- playtest-notes.md
|-- index.html
|-- package.json
|-- package-lock.json
|-- tailwind.config.cjs
|-- scripts/
|   `-- build-site.js
|-- assets/
|   |-- concept.png
|   |-- concept-swiss-desktop.png
|   |-- concept-swiss-mobile.png
|   `-- README.md
|-- dist/
|   `-- styles.css
|-- src/
|   |-- app.js
|   |-- gradient.js
|   `-- styles.scss
`-- tests/
    `-- gradient.test.js
```

## Check the math

If Node.js is available, run `node tests/gradient.test.js`.

## AI use

AI helped turn the project brief into a focused interaction, explore visual directions, and draft and review the HTML, SCSS, Tailwind configuration, JavaScript and documentation. The final design uses an original digital learning-lab direction rather than copying one reference. The factual claims were checked against the official online text of Chapter 2, especially **“The engine of neural networks: Gradient-based optimization”** and **“Chaining derivatives: The Backpropagation algorithm.”** The gradient step has a small automated math check. The interaction was also checked in Microsoft Edge at desktop and mobile viewport sizes.

The delivered site is static HTML, compiled CSS and JavaScript with an original code-made SVG visual. TailwindCSS and Sass are development tools only. Before sharing the project, the author should read and explain every shipped line and remove anything they cannot explain.

## Project status

- Local interaction: implemented
- Automated math check: included
- Desktop and mobile browser checks: passed
- Simulated usability checks: documented in `playtest-notes.md`
- Human playtests: not claimed
- Public deployment: live on Vercel
- Git deployment: connected to the `main` branch
- Live URL check: passed

