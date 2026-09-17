# FastCare Laundry — Hero Section Redesign Concepts

This repository contains **three ultra-modern, high-converting hero section concepts** designed specifically for **FastCare Laundry**. Each concept represents an independent creative campaign direction built from first-principles design thinking, avoiding generic boilerplate layouts.

---

## 🎨 Creative Directions Summary

### Concept 01: `"Laundry as a Living Object"` (`variant-1/`)
* **Core Philosophy**: Treats the laundry visual as a high-fashion spatial object bursting out of traditional layout grids into 3D space.
* **Composition**: Asymmetrical spatial composition with multi-plane depth layering.
* **Key Features**:
  * Organic cropped laundry centerpiece with ambient background glowing silhouette.
  * Layered editorial typography wrapping around and floating behind/in front of the centerpiece.
  * Art-directed 3D floating nodes (`24 HOUR TURNAROUND`, `FREE PICKUP`, `EXPERT CARE`) with live indicators.
  * Butter-smooth mouse parallax tilt & lerp rotation engine (`script.js`).

---

### Concept 02: `"24 Hours — The Motion System"` (`variant-2/`)
* **Core Philosophy**: Makes the `"24 HOURS"` promise the primary visual hero asset itself, inspired by Swiss precision motion identity.
* **Composition**: High-contrast Swiss grid with an integrated orbital 24-hour cycle timeline.
* **Key Features**:
  * Massive graphic typography (`24`) taking up over 45% of the screen stage width.
  * Circular motion track with an SVG orbital path and continuous traveling satellite pulse dot.
  * 4 Interactive process nodes (`01 PICKUP`, `02 CLEAN`, `03 QUALITY CHECK`, `04 DELIVERY`) mapping the user journey.
  * Central circular camera lens with laundry photography that reacts dynamically to process node selections.
  * Continuous high-speed marquee ticker at the base.

---

### Concept 03: `"Express Concierge"` (`variant-3/`)
* **Core Philosophy**: An ultra-modern, high-converting home page hero section featuring an interactive service estimator concierge widget.
* **Composition**: High-impact split stage pairing dynamic copy with interactive booking controls and a luxury wardrobe visual.
* **Key Features**:
  * Interactive service tabs (`Wash & Fold`, `Dry Cleaning`, `Steam Press`) with live turnaround estimation.
  * High-converting trust chips (`★ 4.9/5 Rated`, `⚡ 30-Min Dispatch`, `🛡️ 100% Garment Insurance`).
  * Floating 3D visual badges reacting to mouse movement.
  * Instant WhatsApp booking & pickup scheduling CTAs.

---

## 🛠️ Brand Guidelines & Technical Stack

* **Brand Colors**:
  * **FastCare Blue**: `#2165DF`
  * **FastCare Green**: `#168B58`
  * **FastCare Navy**: `#111A31` / Dark Studio `#0B101E`
  * **Muted**: `#657188`
  * **White**: `#FFFFFF`
* **Typography**: Plus Jakarta Sans (Google Fonts) with clamp-based fluid scaling.
* **3D Depth Engine**: Pure CSS 3D Transforms (`perspective`, `transform-style: preserve-3d`, `translateZ`, `rotateX`, `rotateY`) combined with requestAnimationFrame lerp interpolation.
* **Accessibility**: Full support for `prefers-reduced-motion`.

---

## 📂 File Structure

```
fastcare-hero/
├── assets/
│   ├── v1-living-object.png
│   ├── v2-motion-system.png
│   └── v3-freshness-studio.png
│
├── variant-1/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── variant-2/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── variant-3/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```
