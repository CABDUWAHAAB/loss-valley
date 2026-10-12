(function startLossValley() {
  "use strict";

  const { TARGET_WEIGHT, lossAt, takeStep } = window.GradientLab;
  const START_WEIGHT = -2.6;
  const MIN_WEIGHT = -3;
  const MAX_WEIGHT = 3;
  const MAX_LOSS = 11.2;
  const INITIAL_MESSAGE = {
    title: "Try one step.",
    detail: "Loss shows how wrong the model is. Lower loss is better. Change the learning rate, then watch the marker.",
    tone: "default",
  };
  const bounds = { left: 70, right: 710, top: 48, bottom: 455 };
  const ui = {
    curve: document.querySelector("#loss-curve"),
    path: document.querySelector("#travel-path"),
    arrow: document.querySelector("#step-arrow"),
    minimum: document.querySelector("#minimum-marker"),
    marker: document.querySelector("#current-marker"),
    description: document.querySelector("#plot-description"),
    slider: document.querySelector("#learning-rate"),
    rate: document.querySelector("#learning-rate-value"),
    stepButton: document.querySelector("#step-button"),
    runButton: document.querySelector("#run-button"),
    resetButton: document.querySelector("#reset-button"),
    step: document.querySelector("#step-value"),
    weight: document.querySelector("#weight-value"),
    loss: document.querySelector("#loss-value"),
    feedback: document.querySelector("#feedback"),
    feedbackTitle: document.querySelector(".learning-console__feedback-title"),
    feedbackCopy: document.querySelector(".learning-console__feedback-copy"),
    statusLabel: document.querySelector("#status-label"),
    statusCopy: document.querySelector("#status-copy"),
    navToggle: document.querySelector("#nav-toggle"),
    nav: document.querySelector("#site-nav"),
  };
  let weight = START_WEIGHT;
  let stepCount = 0;
  let points = [START_WEIGHT];
  let previousWeight = null;
  let timer = null;

  const scaleX = (value) => bounds.left + ((value - MIN_WEIGHT) / (MAX_WEIGHT - MIN_WEIGHT)) * (bounds.right - bounds.left);
  const scaleY = (value) => bounds.bottom - (Math.min(value, MAX_LOSS) / MAX_LOSS) * (bounds.bottom - bounds.top);
  const formatWeight = (value) => value.toFixed(2).replace("-", "−");

  function drawCurve() {
    const commands = [];
    for (let index = 0; index <= 120; index += 1) {
      const sample = MIN_WEIGHT + (index / 120) * (MAX_WEIGHT - MIN_WEIGHT);
      commands.push(`${index ? "L" : "M"} ${scaleX(sample).toFixed(1)} ${scaleY(lossAt(sample)).toFixed(1)}`);
    }
    ui.curve.setAttribute("d", commands.join(" "));
  }

  function messageFor(oldLoss, newLoss, learningRate) {
    if (Math.abs(weight - TARGET_WEIGHT) < 0.02) return { title: "You reached the bottom!", detail: "The weight is close to the lowest point.", tone: "success" };
    if (newLoss > oldLoss) return { title: "That jump was too large.", detail: "The marker crossed the valley and the loss went up.", tone: "warning" };
    if (learningRate <= 0.05) return { title: "The loss is lower, but slowly.", detail: "A small learning rate needs many steps.", tone: "slow" };
    return { title: "Nice progress!", detail: "The step moved the weight toward a lower loss.", tone: "success" };
  }

  function showMessage(message) {
    const modifier = message.tone === "default" ? "" : ` learning-console__feedback--${message.tone}`;
    ui.feedback.className = `learning-console__feedback${modifier}`;
    ui.feedbackTitle.textContent = message.title;
    ui.feedbackCopy.textContent = message.detail;
    ui.statusLabel.textContent = message.tone === "warning" ? "Overshot" : message.tone === "slow" ? "Small step" : message.tone === "success" ? "Moving down" : "Ready";
    ui.statusCopy.textContent = message.detail;
  }

  function render(message) {
    const currentLoss = lossAt(weight);
    const x = scaleX(weight);
    const y = scaleY(currentLoss);
    ui.marker.setAttribute("transform", `translate(${x} ${y})`);
    ui.minimum.setAttribute("transform", `translate(${scaleX(TARGET_WEIGHT)} ${scaleY(lossAt(TARGET_WEIGHT))})`);
    ui.path.setAttribute("points", points.map((point) => `${scaleX(point)},${scaleY(lossAt(point))}`).join(" "));
    if (previousWeight === null) ui.arrow.classList.remove("loss-chart__step-arrow--visible");
    else {
      ui.arrow.setAttribute("x1", scaleX(previousWeight));
      ui.arrow.setAttribute("y1", scaleY(lossAt(previousWeight)));
      ui.arrow.setAttribute("x2", x);
      ui.arrow.setAttribute("y2", y);
      ui.arrow.classList.add("loss-chart__step-arrow--visible");
    }
    ui.step.textContent = stepCount;
    ui.weight.textContent = formatWeight(weight);
    ui.loss.textContent = currentLoss.toFixed(3);
    ui.rate.textContent = Number(ui.slider.value).toFixed(2);
    ui.description.textContent = `After ${stepCount} steps, the weight is ${formatWeight(weight)} and the loss is ${currentLoss.toFixed(3)}.`;
    if (message) showMessage(message);
  }

  function stop() {
    if (timer !== null) window.clearInterval(timer);
    timer = null;
    ui.runButton.textContent = "Run";
    ui.runButton.setAttribute("aria-pressed", "false");
  }

  function step() {
    const learningRate = Number(ui.slider.value);
    const oldLoss = lossAt(weight);
    previousWeight = weight;
    weight = takeStep(weight, learningRate);
    stepCount += 1;
    points.push(weight);
    render(messageFor(oldLoss, lossAt(weight), learningRate));
    if (!Number.isFinite(weight) || Math.abs(weight) > 25 || stepCount >= 40) stop();
  }

  function toggleRun() {
    if (timer !== null) return stop();
    ui.runButton.textContent = "Pause";
    ui.runButton.setAttribute("aria-pressed", "true");
    step();
    timer = window.setInterval(step, 520);
  }

  function reset() {
    stop();
    weight = START_WEIGHT;
    stepCount = 0;
    points = [START_WEIGHT];
    previousWeight = null;
    showMessage(INITIAL_MESSAGE);
    render();
  }

  function toggleNavigation() {
    const isOpen = ui.nav.classList.toggle("site-nav--open");
    ui.navToggle.setAttribute("aria-expanded", String(isOpen));
    ui.navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }

  function setupFaq() {
    document.querySelectorAll(".faq__question").forEach((button) => {
      button.addEventListener("click", () => {
        const selectedItem = button.closest(".faq__item");
        const willOpen = !selectedItem.classList.contains("faq__item--open");
        document.querySelectorAll(".faq__item").forEach((item) => {
          item.classList.remove("faq__item--open");
          item.querySelector(".faq__question").setAttribute("aria-expanded", "false");
        });
        if (willOpen) {
          selectedItem.classList.add("faq__item--open");
          button.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  ui.slider.addEventListener("input", () => render());
  ui.stepButton.addEventListener("click", step);
  ui.runButton.addEventListener("click", toggleRun);
  ui.resetButton.addEventListener("click", reset);
  ui.navToggle.addEventListener("click", toggleNavigation);
  ui.nav.querySelectorAll(".site-nav__link").forEach((link) => link.addEventListener("click", () => {
    ui.nav.classList.remove("site-nav--open");
    ui.navToggle.setAttribute("aria-expanded", "false");
  }));
  setupFaq();
  drawCurve();
  reset();
})();
