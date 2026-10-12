# Process note

## Concept choice

I chose learning rate and gradient descent from Chapter 2, **“The engine of neural networks: Gradient-based optimization.”** This concept is easy to describe as a formula but harder to feel. The interaction turns the update into a visible movement across a loss curve. The learner changes only the learning rate, so the result of that choice stays clear.

## What I learned

The gradient points in the direction where loss increases. Gradient descent therefore moves the weight in the opposite direction. The learning rate changes the size of that move. A very small value makes slow progress. A very large value can jump across the valley and increase the loss. These claims were checked against the named Chapter 2 section in *Deep Learning with Python* by François Chollet.

The visual is intentionally simple. It uses one weight and a U-shaped teaching curve. A real neural network can have many weights and a much more complex loss surface. The page does not claim that its one-dimensional curve is a complete neural network.

## Design and build

The first version was planned as one open workspace instead of a long lesson. The curve is the main object. The slider, step button and live loss values sit next to it. The three short steps below explain what the learner just saw. All graphics are made in HTML, CSS and SVG; no figure from the book is copied.

The final visual direction is a warm digital learning laboratory. It uses an ivory page, a deep navy instrument area, violet data lines, peach actions and an acid-green live marker. The chart and controls form one connected workbench instead of a dashboard of separate cards. Dribbble learning-tool and scientific-interface work informed broad patterns such as focus, hierarchy and immediate feedback, but the composition and visual system are original. The HTML uses BEM class names. TailwindCSS utilities live inside SCSS with `@apply`, and Flexbox controls the layout.

## Playtest changes

No human playtests have been completed yet. This section must be updated after two people who have not read the chapters use the page. Their hesitations, mistakes and explanation afterwards belong in `playtest-notes.md`. Do not claim this acceptance criterion until those sessions are real.

## What I would build next

After the playtests, I would first fix the points that confused both testers. If extra time remained, I would add an optional slow-motion view that labels the old weight, gradient direction and new weight during one step. I would not add more deep-learning topics, because the assignment is stronger when one concept is explained clearly.

