# 🔢 Counter App

A clean, minimal counter application built with pure **HTML**, **CSS**, and **JavaScript** — no frameworks, no dependencies.

![Counter App](https://img.shields.io/badge/built%20with-HTML%20%7C%20CSS%20%7C%20JS-e8ff47?style=flat-square&labelColor=0d0d0d)
![License](https://img.shields.io/badge/license-MIT-e8ff47?style=flat-square&labelColor=0d0d0d)

---

## ✨ Features

- **Increment & Decrement** — increase or decrease the counter with a click
- **Custom Step** — set any step value to count by 2, 5, 10, etc.
- **Reset** — snap back to zero instantly
- **Color-coded display** — yellow at zero, white for positive, red for negative
- **Recent history bar** — mini sparkbar visualizing your last 20 values
- **Keyboard shortcuts** — fully keyboard-accessible
- **Ripple effect** — satisfying click animation on buttons
- **Bump animation** — display pulses on every count change

---

## 🗂️ Project Structure

```
counter-app/
├── index.html    # App structure & markup
├── style.css     # All styles, animations & CSS variables
└── script.js     # Counter logic, DOM updates & event handling
```

---

## 🚀 Getting Started

No build tools or installs needed. Just open the file in your browser.

**Option 1 — Direct open:**
```bash
# Clone the repo
git clone https://github.com/your-username/counter-app.git

# Open in browser
open counter-app/index.html
```

**Option 2 — Local server (optional):**
```bash
cd counter-app

# Using Python
python -m http.server 3000

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:3000` in your browser.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `↑` Arrow Up | Increment |
| `↓` Arrow Down | Decrement |
| `R` | Reset to zero |

---

## 🛠️ Built With

- **HTML5** — semantic markup
- **CSS3** — custom properties, animations, grid layout
- **Vanilla JavaScript** — no libraries or frameworks

---

## 📁 File Overview

### `index.html`
The skeleton of the app. Contains the counter display, step input, increment/decrement buttons, reset button, history bar, and keyboard hint section.

### `style.css`
All visual styling including:
- CSS custom properties (variables) for the color theme
- Grid background effect
- Responsive display typography using `clamp()`
- Button hover/active states and ripple animation
- Color-coded display states (zero, positive, negative)
- History sparkbar styles

### `script.js`
All app logic including:
- Counter state management
- Step input parsing
- DOM update with animation restart
- History tracking and sparkbar rendering
- Ripple effect generation
- Keyboard event handling

---

## 📸 Preview

> Dark industrial theme with a neon-yellow accent, monospace typography, and a real-time history bar.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repo
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

<p align="center">Made with 🖤 using plain HTML, CSS & JS</p>
