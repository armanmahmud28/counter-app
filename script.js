let count = 0;
const MAX_HISTORY = 20;
const history = [];

const display = document.getElementById("display");
const stepInput = document.getElementById("stepInput");
const btnInc = document.getElementById("btnInc");
const btnDec = document.getElementById("btnDec");
const btnReset = document.getElementById("btnReset");
const histBar = document.getElementById("historyBar");

/* ── helpers ── */

function getStep() {
  const v = parseInt(stepInput.value, 10);
  return isNaN(v) || v < 1 ? 1 : v;
}

function updateDisplay() {
  display.textContent = count;
  display.className = "display";

  if (count < 0) display.classList.add("negative");
  else if (count === 0) display.classList.add("zero");

  // bump animation — force reflow to restart it
  display.classList.remove("bump");
  void display.offsetWidth;
  display.classList.add("bump");
}

function recordHistory(val) {
  history.push(val);
  if (history.length > MAX_HISTORY) history.shift();
  renderHistory();
}

function renderHistory() {
  if (history.length === 0) {
    histBar.innerHTML = "";
    return;
  }

  const maxAbs = Math.max(...history.map(Math.abs), 1);

  histBar.innerHTML = "";
  history.forEach((val) => {
    const tick = document.createElement("div");
    tick.className = "tick";

    const pct = Math.max(Math.abs(val) / maxAbs, 0.08);
    tick.style.height = pct * 100 + "%";
    tick.style.background =
      val < 0
        ? `rgba(255,71,71,${0.4 + pct * 0.6})`
        : val === 0
          ? "#333"
          : `rgba(232,255,71,${0.3 + pct * 0.7})`;

    histBar.appendChild(tick);
  });
}

function ripple(btn, e) {
  const r = document.createElement("span");
  r.className = "ripple";

  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  r.style.cssText = `
    width:${size}px;
    height:${size}px;
    left:${e.clientX - rect.left - size / 2}px;
    top:${e.clientY - rect.top - size / 2}px
  `;

  btn.appendChild(r);
  r.addEventListener("animationend", () => r.remove());
}

/* ── actions ── */

function increment() {
  count += getStep();
  updateDisplay();
  recordHistory(count);
}

function decrement() {
  count -= getStep();
  updateDisplay();
  recordHistory(count);
}

function reset() {
  count = 0;
  history.length = 0;
  updateDisplay();
  renderHistory();
}

/* ── event listeners ── */

btnInc.addEventListener("click", (e) => {
  ripple(btnInc, e);
  increment();
});
btnDec.addEventListener("click", (e) => {
  ripple(btnDec, e);
  decrement();
});
btnReset.addEventListener("click", reset);

document.addEventListener("keydown", (e) => {
  if (e.target === stepInput) return;
  if (e.key === "ArrowUp") {
    e.preventDefault();
    increment();
  }
  if (e.key === "ArrowDown") {
    e.preventDefault();
    decrement();
  }
  if (e.key === "r" || e.key === "R") {
    reset();
  }
});

/* ── init ── */
updateDisplay();
renderHistory();
