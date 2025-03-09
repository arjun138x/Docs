CSS is a vast topic, but here’s a structured breakdown of the key topics you should focus on, especially for interviews and real-world development:

# **1. Basics of CSS**

- Selectors (Universal, Element, Class, ID, Attribute, Pseudo-selectors)
- Specificity & Inheritance
- Box Model (Content, Padding, Border, Margin)
- Units (px, em, rem, %, vh, vw, etc.)
- Colors (RGB, HEX, HSL, transparency)

---

## **1. Selectors**

CSS selectors determine which elements the styles will be applied to.

### **Types of Selectors:**

1. **Universal Selector (`*`)**

   - Selects all elements on the page.

   ```css
   * {
     margin: 0;
     padding: 0;
   }
   ```

2. **Element Selector (Type Selector)**

   - Targets specific HTML elements.

   ```css
   p {
     font-size: 16px;
   }
   ```

3. **Class Selector (`.`)**

   - Targets elements with a specific class.

   ```css
   .btn {
     background-color: blue;
   }
   ```

4. **ID Selector (`#`)**

   - Targets a unique element with a specific ID.

   ```css
   #header {
     background-color: red;
   }
   ```

5. **Attribute Selector**

   - Targets elements based on attributes.

   ```css
   input[type="text"] {
     border: 1px solid black;
   }
   ```

6. **Pseudo-classes & Pseudo-elements**
   - `:hover`, `:focus`, `:nth-child()`, `::before`, `::after`
   ```css
   a:hover {
     color: red;
   }
   ```

---

## **2. Specificity & Inheritance**

### **CSS Specificity Rules:**

- **Inline styles (`style=""`)** → Highest specificity (**1000**)
- **ID selectors (`#id`)** → High specificity (**100**)
- **Class, attributes, and pseudo-classes (`.class`, `[attr]`, `:hover`)** → Medium specificity (**10**)
- **Element and pseudo-elements (`div`, `h1`, `::before`)** → Lowest specificity (**1**)

**Example of specificity calculation:**

```css
#navbar .menu li a {
  color: blue;
} /* Specificity: 100 + 10 + 1 + 1 = 112 */
```

### **CSS Inheritance:**

- Some properties (like `color` and `font-family`) **inherit** from parent elements.
- Others (like `margin` and `padding`) **do not inherit**.
- You can force inheritance using `inherit`, `initial`, or `unset`.

```css
p {
  color: inherit; /* Takes color from the parent */
}
```

---

## **3. Box Model**

The CSS Box Model defines how elements are structured in terms of size and spacing.

### **Box Model Components:**

1. **Content** → The actual text or image inside the element.
2. **Padding** → Space between content and border.
3. **Border** → The outline around the padding.
4. **Margin** → Space outside the border separating it from other elements.

```css
.box {
  width: 200px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}
```

🔹 **Total width** = `width + padding + border + margin`  
🔹 Use `box-sizing: border-box;` to make width include padding & border.

```css
* {
  box-sizing: border-box;
}
```

---

## **4. CSS Units**

CSS supports different units to define sizes, margins, padding, etc.

### **Absolute Units**

- `px` (Pixels) – Fixed size.
  ```css
  div {
    width: 200px;
  }
  ```

### **Relative Units**

- `%` – Relative to the parent element.
  ```css
  div {
    width: 50%;
  } /* 50% of its parent container */
  ```
- `em` – Relative to the font-size of the element.
  ```css
  p {
    font-size: 2em;
  } /* Twice the size of the parent font-size */
  ```
- `rem` – Relative to the root `<html>` font-size (default is `16px`).
  ```css
  div {
    font-size: 1.5rem;
  } /* 1.5 * 16px = 24px */
  ```
- `vh`, `vw` – Relative to the viewport height/width.
  ```css
  div {
    height: 50vh;
  } /* 50% of viewport height */
  ```

---

## **5. CSS Colors**

### **Color Formats:**

1. **Named Colors:**

   ```css
   color: red;
   ```

2. **HEX Code (`#RRGGBB`)**

   ```css
   color: #ff5733;
   ```

3. **RGB (`rgb(red, green, blue)`)**

   ```css
   color: rgb(255, 87, 51);
   ```

4. **RGBA (`rgb + alpha transparency`)**

   ```css
   color: rgba(255, 87, 51, 0.5); /* 50% transparency */
   ```

5. **HSL (`hue, saturation, lightness`)**

   ```css
   color: hsl(200, 100%, 50%);
   ```

6. **HSLA (`hsl + alpha transparency`)**
   ```css
   color: hsla(200, 100%, 50%, 0.7);
   ```

---

# **2. Positioning & Layout**

- Display (block, inline, inline-block, none)
- Position (static, relative, absolute, fixed, sticky)
- Float & Clear
- Flexbox
- Grid Layout
- Multi-column Layout

---

## **1. Display Property**

The `display` property controls how elements are rendered in the layout.

### **Main Display Types:**

1. **`block`**

   - Takes up the full width of the parent container.
   - Starts on a new line.
   - Examples: `<div>`, `<p>`, `<h1>`, `<section>`

   ```css
   div {
     display: block;
   }
   ```

2. **`inline`**

   - Does not start on a new line.
   - Takes up only as much width as necessary.
   - Examples: `<span>`, `<a>`, `<strong>`

   ```css
   span {
     display: inline;
   }
   ```

3. **`inline-block`**

   - Similar to `inline`, but allows width & height customization.

   ```css
   .button {
     display: inline-block;
     width: 100px;
     height: 50px;
   }
   ```

4. **`none`**
   - Hides the element completely (removes from layout).
   ```css
   .hidden {
     display: none;
   }
   ```

---

## **2. Positioning in CSS**

The `position` property determines how elements are placed in the document.

### **Types of Positioning:**

1. **`static` (Default)**

   - Normal document flow.
   - `top`, `left`, `right`, `bottom` properties do not work.

   ```css
   div {
     position: static;
   }
   ```

2. **`relative`**

   - Moves relative to its original position.

   ```css
   div {
     position: relative;
     top: 10px;
     left: 20px;
   }
   ```

3. **`absolute`**

   - Removed from normal flow and positioned relative to the nearest positioned ancestor.

   ```css
   div {
     position: absolute;
     top: 50px;
     left: 100px;
   }
   ```

4. **`fixed`**

   - Stays fixed relative to the viewport, does not move when scrolling.

   ```css
   div {
     position: fixed;
     bottom: 10px;
     right: 10px;
   }
   ```

5. **`sticky`**
   - Acts like `relative` but sticks to a position when scrolling.
   ```css
   div {
     position: sticky;
     top: 20px;
   }
   ```

---

## **3. Float & Clear**

### **Float**

Used to align elements to the left or right.

```css
img {
  float: left;
  margin-right: 10px;
}
```

### **Clear**

Prevents elements from wrapping around floated elements.

```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

---

## **4. Flexbox**

Flexbox is used for **one-dimensional layouts** (row or column).

### **Parent (Container) Properties:**

```css
.container {
  display: flex;
  flex-direction: row; /* row | column */
  justify-content: space-between; /* Main axis */
  align-items: center; /* Cross axis */
}
```

### **Child (Item) Properties:**

```css
.item {
  flex-grow: 1;
  flex-basis: 100px;
}
```

---

## **5. CSS Grid**

Grid is used for **two-dimensional layouts** (rows & columns).

### **Basic Grid Layout**

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
```

### **Grid Item Positioning**

```css
.item {
  grid-column: 1 / span 2;
  grid-row: 1 / 3;
}
```

---

## **6. Multi-Column Layout**

Used for newspaper-style text layouts.

```css
.text {
  column-count: 3;
  column-gap: 20px;
}
```

---

# **3. Responsive Design**

- Media Queries
- Mobile-first vs. Desktop-first approach
- CSS Units (%, vw, vh, em, rem, etc.)
- Viewport Meta Tag
- Responsive Images & Videos
- CSS Frameworks (Bootstrap, Tailwind, etc.)

---

## **1. Media Queries**

Media queries allow CSS rules to be applied based on screen size, resolution, or device type.

### **Basic Syntax:**

```css
@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}
```

### **Common Breakpoints:**

- **Extra small devices** (phones): `max-width: 576px`
- **Small devices** (tablets): `max-width: 768px`
- **Medium devices** (desktops): `max-width: 992px`
- **Large devices** (large desktops): `max-width: 1200px`

```css
@media (max-width: 576px) {
  /* Mobile styles */
}
@media (max-width: 768px) {
  /* Tablet styles */
}
@media (max-width: 992px) {
  /* Laptop styles */
}
@media (max-width: 1200px) {
  /* Desktop styles */
}
```

---

## **2. Mobile-First vs. Desktop-First Approach**

### **Mobile-First (Recommended ✅)**

- Start with **styles for smaller screens** and use `min-width` media queries for larger screens.
- Example:

  ```css
  body {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    body {
      font-size: 16px;
    }
  }
  ```

### **Desktop-First**

- Start with **desktop styles** and use `max-width` media queries for smaller screens.
- Example:

  ```css
  body {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
  ```

💡 **Best Practice:** Mobile-first approach is recommended because it improves performance on mobile devices.

---

## **3. CSS Units (`%, vw, vh, em, rem`, etc.)**

### **Relative Units:**

- `%` → Relative to parent element
  ```css
  div {
    width: 50%; /* 50% of parent container */
  }
  ```
- `vw` & `vh` → Relative to the viewport (browser window)
  ```css
  div {
    width: 50vw; /* 50% of the viewport width */
    height: 100vh; /* Full viewport height */
  }
  ```
- `em` → Relative to the **parent element's font size**
  ```css
  p {
    font-size: 2em; /* 2 times parent font size */
  }
  ```
- `rem` → Relative to the **root `<html>` font size**
  ```css
  body {
    font-size: 1.5rem; /* 1.5 * 16px = 24px */
  }
  ```

💡 **Use `rem` instead of `em` for better consistency in scaling across devices.**

---

## **4. Viewport Meta Tag**

This tag ensures correct scaling on mobile devices.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### **Parameters:**

- `width=device-width` → Matches the device width
- `initial-scale=1` → 1x zoom (no zoom-in or zoom-out by default)

---

## **5. Responsive Images & Videos**

### **Responsive Images (`max-width: 100%`)**

```css
img {
  max-width: 100%;
  height: auto;
}
```

- Ensures the image scales down without distortion.

### **Using `picture` for Different Image Sizes**

```html
<picture>
  <source srcset="small.jpg" media="(max-width: 600px)" />
  <source srcset="medium.jpg" media="(max-width: 1200px)" />
  <img src="large.jpg" alt="Responsive Image" />
</picture>
```

### **Responsive Videos**

```css
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

---

## **6. CSS Frameworks (Bootstrap, Tailwind, etc.)**

### **Bootstrap (Component-Based)**

- Uses a **grid system** (12 columns).
- Example:
  ```html
  <div class="container">
    <div class="row">
      <div class="col-md-6">50% width</div>
      <div class="col-md-6">50% width</div>
    </div>
  </div>
  ```
- Provides prebuilt components like buttons, modals, and forms.

### **Tailwind CSS (Utility-First)**

- Uses **utility classes** instead of components.
- Example:
  ```html
  <div class="w-1/2 bg-blue-500 text-white p-4">50% width with Tailwind</div>
  ```
- More **customizable and flexible** than Bootstrap.

💡 **Which framework do you prefer?** If you want faster development, use Bootstrap. If you want more control and flexibility, go for Tailwind.

---

# **4. Typography & Text Styling**

- Font properties (size, weight, style, family)
- Line height, Letter spacing, Word spacing
- Text alignment & transformation
- Web-safe fonts & Custom fonts (Google Fonts, @font-face)

---

## **1. Font Properties**

### **1.1 Font Size (`font-size`)**

Defines the size of the text.

```css
p {
  font-size: 16px; /* Fixed size */
  font-size: 1.5rem; /* Relative to root */
}
```

### **1.2 Font Weight (`font-weight`)**

Defines the thickness of text.

```css
p {
  font-weight: normal; /* 400 */
  font-weight: bold; /* 700 */
  font-weight: 300; /* Light */
}
```

### **1.3 Font Style (`font-style`)**

Defines if text is italicized.

```css
p {
  font-style: italic;
}
```

### **1.4 Font Family (`font-family`)**

Defines the typeface used for text.

```css
p {
  font-family: Arial, sans-serif;
}
```

---

## **2. Line Height, Letter Spacing, Word Spacing**

### **2.1 Line Height (`line-height`)**

Controls the space between lines of text.

```css
p {
  line-height: 1.5; /* 1.5 times the font size */
}
```

### **2.2 Letter Spacing (`letter-spacing`)**

Adjusts the space between characters.

```css
p {
  letter-spacing: 2px;
}
```

### **2.3 Word Spacing (`word-spacing`)**

Adjusts the space between words.

```css
p {
  word-spacing: 5px;
}
```

---

## **3. Text Alignment & Transformation**

### **3.1 Text Alignment (`text-align`)**

Controls how text is positioned within an element.

```css
p {
  text-align: left; /* Default */
  text-align: center;
  text-align: right;
  text-align: justify; /* Stretches text to fit width */
}
```

### **3.2 Text Transformation (`text-transform`)**

Changes text case.

```css
p {
  text-transform: uppercase; /* ALL CAPS */
  text-transform: lowercase; /* all small */
  text-transform: capitalize; /* First Letter Uppercase */
}
```

---

## **4. Web-Safe Fonts & Custom Fonts**

### **4.1 Web-Safe Fonts**

These are fonts available on most operating systems.

**Common Web-Safe Fonts:**

- Arial (sans-serif)
- Times New Roman (serif)
- Courier New (monospace)
- Verdana (sans-serif)
- Georgia (serif)

```css
p {
  font-family: Arial, sans-serif;
}
```

### **4.2 Google Fonts (CDN-Based Custom Fonts)**

Google Fonts provides free fonts that can be loaded via a link.

**Using Google Fonts:**  
1️⃣ Add this to your HTML `<head>`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

2️⃣ Use it in CSS:

```css
p {
  font-family: "Roboto", sans-serif;
}
```

### **4.3 @font-face (Self-Hosted Custom Fonts)**

For locally stored fonts, use `@font-face`.

```css
@font-face {
  font-family: "MyCustomFont";
  src: url("fonts/MyCustomFont.woff2") format("woff2"), url("fonts/MyCustomFont.woff")
      format("woff");
}

p {
  font-family: "MyCustomFont", sans-serif;
}
```

---

# **5. CSS Preprocessors**

- SASS & SCSS
- LESS
- Variables, Nesting, Mixins, Functions

---

### **1. SASS & SCSS**

SASS (Syntactically Awesome Stylesheets) is a CSS preprocessor that adds powerful features like **variables, nesting, mixins, functions, and imports** to CSS.

- **SASS** → Uses **indentation-based syntax** (no curly braces `{}` or semicolons `;`).
- **SCSS** → Uses **CSS-like syntax** (with `{}` and `;`).

👉 SCSS is more commonly used since it's closer to regular CSS.

**Example:**  
🔹 **SASS (Indentation-based)**

```sass
$primary-color: blue

body
  background: $primary-color
```

🔹 **SCSS (CSS-like Syntax)**

```scss
$primary-color: blue;

body {
  background: $primary-color;
}
```

---

### **2. LESS**

LESS (Leaner Style Sheets) is another CSS preprocessor similar to SASS but **uses JavaScript-like syntax** and is **processed in the browser or compiled**.

**Example:**

```less
@primary-color: blue;

body {
  background: @primary-color;
}
```

📌 **Key Differences:**  
| Feature | SASS/SCSS | LESS |
|--------------|----------|------|
| Variables | `$variable` | `@variable` |
| Functions | ✅ Yes | ✅ Yes |
| Nesting | ✅ Yes | ✅ Yes |
| Mixins | ✅ Yes | ✅ Yes |
| CSS-like Syntax | ✅ (SCSS) | ✅ |
| Browser Compilation | ❌ (Needs preprocessor) | ✅ (via JS) |

👉 **SCSS is more popular than LESS due to its flexibility and powerful features.**

---

### **3. SASS & LESS Features**

#### **3.1 Variables**

Store reusable values like colors, fonts, and spacing.

**SCSS Example:**

```scss
$primary-color: blue;

body {
  background: $primary-color;
}
```

**LESS Example:**

```less
@primary-color: blue;

body {
  background: @primary-color;
}
```

---

#### **3.2 Nesting**

Write CSS in a structured way inside parent elements.

**SCSS Example:**

```scss
nav {
  background: #333;

  ul {
    list-style: none;

    li {
      display: inline-block;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
```

**LESS Example:**

```less
nav {
  background: #333;

  ul {
    list-style: none;

    li {
      display: inline-block;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
```

✔️ **Nesting works the same in both SCSS and LESS.**

---

#### **3.3 Mixins**

Reusable blocks of CSS to avoid repetition.

**SCSS Example:**

```scss
@mixin button-style {
  padding: 10px 20px;
  border-radius: 5px;
  background: blue;
  color: white;
}

.button {
  @include button-style;
}
```

**LESS Example:**

```less
.button-style {
  padding: 10px 20px;
  border-radius: 5px;
  background: blue;
  color: white;
}

.button {
  .button-style;
}
```

✔️ **SCSS uses `@mixin` and `@include`, whereas LESS directly calls mixins.**

---

#### **3.4 Functions**

Perform calculations and return values.

**SCSS Example:**

```scss
@function square($size) {
  @return $size * $size;
}

.box {
  width: square(10px);
}
```

**LESS Example:**

```less
.square(@size) {
  width: @size * @size;
}

.box {
  .square(10px);
}
```

✔️ **SCSS uses `@function`, while LESS uses mixins for functions.**

---

### **Which One Should You Use?**

✅ **SCSS** → Best for **modern projects** with better support & community.  
✅ **LESS** → Works well **inside JavaScript-based projects** (e.g., older UI frameworks).

---

# **6. Transitions & Animations**

- CSS Transitions (ease, ease-in, ease-out, linear, cubic-bezier)
- CSS Animations (`@keyframes`)
- Transform (translate, rotate, scale, skew)

---

### **1. CSS Transitions**

CSS transitions allow smooth changes between CSS property values over time.

#### **1.1 Syntax:**

```css
selector {
  transition: property duration timing-function delay;
}
```

Example:

```css
.button {
  background: blue;
  transition: background 0.5s ease-in-out;
}

.button:hover {
  background: red;
}
```

---

#### **1.2 Timing Functions**

Defines how speed changes over the transition duration.

| Timing Function                | Effect                                           |
| ------------------------------ | ------------------------------------------------ |
| `ease`                         | Default, starts slow, speeds up, then slows down |
| `ease-in`                      | Starts slow, then speeds up                      |
| `ease-out`                     | Starts fast, then slows down                     |
| `ease-in-out`                  | Starts slow, speeds up, then slows down          |
| `linear`                       | Constant speed throughout                        |
| `cubic-bezier(x1, y1, x2, y2)` | Custom curve                                     |

Example using `cubic-bezier` for fine-tuned control:

```css
.button {
  transition: background 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
```

---

### **2. CSS Animations (`@keyframes`)**

Unlike transitions (which only occur on user interaction), **CSS animations** allow continuous or timed animations.

#### **2.1 Basic Syntax**

```css
@keyframes animation-name {
  0% {
    property: value;
  }
  100% {
    property: value;
  }
}

.selector {
  animation: animation-name duration timing-function delay iteration-count
    direction;
}
```

Example:

```css
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.box {
  animation: fade-in 2s ease-in-out;
}
```

---

#### **2.2 Advanced Example (Bouncing Ball)**

```css
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
}

.ball {
  width: 50px;
  height: 50px;
  background: red;
  border-radius: 50%;
  animation: bounce 1s ease-in-out infinite;
}
```

---

### **3. CSS Transforms (`translate`, `rotate`, `scale`, `skew`)**

CSS transforms allow modifying an element’s position, size, rotation, or shape.

#### **3.1 Translate (Move)**

```css
.box {
  transform: translate(50px, 100px); /* Move right 50px, down 100px */
}
```

#### **3.2 Rotate**

```css
.box {
  transform: rotate(45deg); /* Rotate 45 degrees */
}
```

#### **3.3 Scale (Resize)**

```css
.box {
  transform: scale(1.5); /* 1.5 times larger */
}
```

#### **3.4 Skew (Tilt)**

```css
.box {
  transform: skew(20deg, 10deg);
}
```

---

### **4. Combining Multiple Transforms**

```css
.box {
  transform: translate(50px, 100px) rotate(45deg) scale(1.2);
}
```

---

### **5. Practical Example (Rotating Button on Hover)**

```css
.button {
  transition: transform 0.3s ease-in-out;
}

.button:hover {
  transform: rotate(10deg) scale(1.1);
}
```

# **7. Advanced CSS Concepts**

- CSS Variables (`--custom-var`)
- CSS Custom Properties
- CSS Filters (blur, grayscale, brightness, etc.)
- Backdrop Filter
- Clipping & Masking (`clip-path`, `mask-image`)
- Blend Modes (`mix-blend-mode`, `background-blend-mode`)

---

## **1. CSS Variables (`--custom-var`) & Custom Properties**

CSS variables (also called **custom properties**) allow you to store and reuse values across stylesheets.

### **1.1 Declaring & Using CSS Variables**

```css
:root {
  --primary-color: blue;
  --font-size: 16px;
}

.button {
  background: var(--primary-color);
  font-size: var(--font-size);
}
```

✅ **Advantages:**

- Easy to update theme colors globally
- Supports dynamic updates with JavaScript

### **1.2 Modifying Variables in JavaScript**

```js
document.documentElement.style.setProperty("--primary-color", "red");
```

---

## **2. CSS Filters**

Filters apply effects like **blur, brightness, contrast, grayscale**, etc.

### **2.1 Common Filter Functions**

```css
img {
  filter: blur(5px); /* Blurs the image */
  filter: brightness(1.2); /* Increases brightness */
  filter: grayscale(100%); /* Converts to black & white */
  filter: contrast(150%); /* Increases contrast */
  filter: sepia(80%); /* Adds a sepia tone */
  filter: hue-rotate(90deg); /* Changes color hue */
  filter: invert(100%); /* Inverts colors */
}
```

### **2.2 Combining Filters**

```css
img {
  filter: grayscale(100%) blur(5px);
}
```

---

## **3. Backdrop Filter**

`backdrop-filter` applies effects **behind** an element (like blurred glass UI).

```css
.glass-effect {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}
```

🔹 Used in **modals, cards, or navigation bars**.

---

## **4. Clipping & Masking**

### **4.1 `clip-path` (Clipping an Element)**

```css
.clip {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
```

👉 Cuts an element into a **custom shape**.

### **4.2 `mask-image` (Masking an Element)**

```css
.mask {
  mask-image: url("mask.png");
}
```

👉 **Masks** an element based on the alpha channel of an image.

---

## **5. Blend Modes (`mix-blend-mode`, `background-blend-mode`)**

### **5.1 `mix-blend-mode` (Blends Element with Background)**

```css
.text {
  mix-blend-mode: multiply;
}
```

🔹 Works like **Photoshop layer blending**.

### **5.2 `background-blend-mode` (Blends Background Layers)**

```css
.background {
  background: url("image.jpg"), linear-gradient(to right, red, blue);
  background-blend-mode: overlay;
}
```

🔹 Blends **multiple background layers**.

---

# **8. CSS Grid & Flexbox (Detailed Study)**

- Flexbox: `flex-grow`, `flex-shrink`, `align-items`, `justify-content`
- Grid: `grid-template-rows`, `grid-template-columns`, `grid-area`

---

## **1. Flexbox**

Flexbox is a CSS layout module that allows easy alignment, spacing, and positioning of elements.

### **1.1 Key Flexbox Properties**

#### ✅ **`flex-grow`**

Defines how much an item should **grow** relative to others.

```css
.container {
  display: flex;
}

.item1 {
  flex-grow: 1; /* Takes up remaining space */
}

.item2 {
  flex-grow: 2; /* Grows twice as much as item1 */
}
```

#### ✅ **`flex-shrink`**

Defines how much an item should **shrink** when space is reduced.

```css
.item1 {
  flex-shrink: 1; /* Shrinks less */
}

.item2 {
  flex-shrink: 3; /* Shrinks 3x faster than item1 */
}
```

#### ✅ **`align-items`** (Aligns items along the cross-axis)

```css
.container {
  display: flex;
  align-items: center; /* Other values: flex-start, flex-end, stretch, baseline */
}
```

#### ✅ **`justify-content`** (Aligns items along the main axis)

```css
.container {
  display: flex;
  justify-content: space-between; /* Other values: flex-start, flex-end, center, space-around */
}
```

---

## **2. CSS Grid**

Grid allows full **2D layout control**, aligning items in both **rows and columns**.

### **2.1 `grid-template-rows`**

Defines row sizes.

```css
.container {
  display: grid;
  grid-template-rows: 100px auto 50px;
}
```

👉 **Creates three rows**:

- **100px height**
- **Auto-sized row**
- **50px height**

### **2.2 `grid-template-columns`**

Defines column sizes.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
```

👉 **Creates three columns**:

- First and last columns take **1 fraction** each
- Middle column takes **2 fractions** (twice as large)

### **2.3 `grid-area`**

Defines an item’s position in the grid.

```css
.item {
  grid-area: 1 / 2 / 3 / 4; /* row-start / col-start / row-end / col-end */
}
```

👉 **Places item in rows 1-3 and columns 2-4**

---

# **9. CSS for Forms & UI Components**

- Styling Forms (inputs, buttons, checkboxes, radio buttons)
- Pseudo-classes (`:hover`, `:focus`, `:nth-child()`)
- Pseudo-elements (`::before`, `::after`)

---

## **1. Styling Forms**

### **1.1 Styling Inputs**

```css
input {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
}

input:focus {
  border-color: blue;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}
```

👉 **`outline: none;`** removes the default focus outline.

---

### **1.2 Styling Buttons**

```css
button {
  background: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: darkblue;
}

button:active {
  transform: scale(0.98);
}
```

👉 **`cursor: pointer;`** ensures the button looks clickable.

---

### **1.3 Styling Checkboxes & Radio Buttons**

```css
input[type="checkbox"],
input[type="radio"] {
  accent-color: blue; /* Changes default color */
  width: 18px;
  height: 18px;
}
```

For **custom checkboxes & radio buttons**, use `::before`:

```css
.custom-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #333;
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.custom-checkbox.checked::before {
  content: "✔";
  position: absolute;
  left: 3px;
  top: -2px;
  font-size: 18px;
  color: blue;
}
```

---

## **2. Pseudo-classes**

Pseudo-classes select elements **based on state or position**.

### ✅ **`:hover` (Mouse Hover)**

```css
a:hover {
  color: red;
}
```

👉 Changes color when the user hovers.

### ✅ **`:focus` (When Input is Focused)**

```css
input:focus {
  border-color: blue;
}
```

👉 Applies styling when the user clicks inside the input.

### ✅ **`:nth-child(n)` (Target Specific Child)**

```css
li:nth-child(odd) {
  background: #f0f0f0;
}
```

👉 Styles **odd-numbered** list items.

```css
li:nth-child(3) {
  color: red;
}
```

👉 Styles only the **third item**.

---

## **3. Pseudo-elements**

Pseudo-elements **style parts of an element** (before/after its content).

### ✅ **`::before` (Adds Content Before Element)**

```css
h1::before {
  content: "🔥 ";
}
```

👉 Adds a fire emoji **before** `h1`.

### ✅ **`::after` (Adds Content After Element)**

```css
h1::after {
  content: " 💡";
}
```

👉 Adds a lightbulb emoji **after** `h1`.

### ✅ **Example: Custom Underline Effect**

```css
a::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background: blue;
  transition: width 0.3s;
}

a:hover::after {
  width: 50%;
}
```

👉 Creates an **animated underline effect** on hover.

---

# **10. Performance Optimization & Best Practices**

- Minification & Compression
- Critical CSS & Lazy Loading
- Avoiding Unused CSS
- Efficient Use of Selectors

---

## **1. Minification & Compression**

### ✅ **CSS Minification**

Minification removes unnecessary characters (whitespace, comments) to reduce file size.  
Example:  
**Before (Normal CSS)**

```css
body {
  background-color: white;
  color: black;
  font-size: 16px;
}
```

**After (Minified CSS)**

```css
body {
  background-color: #fff;
  color: #000;
  font-size: 16px;
}
```

### ✅ **Tools for CSS Minification**

- **Online:** [CSS Minifier](https://cssminifier.com/)
- **Build Tools:**
  - Webpack (`css-minimizer-webpack-plugin`)
  - Gulp (`gulp-clean-css`)
  - PostCSS

---

## **2. Critical CSS & Lazy Loading**

### ✅ **Critical CSS**

Critical CSS is **the minimum CSS required to render above-the-fold content** for faster page loads.

**Steps to implement:**

1. Identify critical styles using tools like **Google PageSpeed Insights**.
2. Inline critical styles in the `<head>`.
3. Load non-critical CSS asynchronously.

Example:

```html
<style>
  /* Critical CSS (Only needed for above-the-fold content) */
  body {
    font-family: Arial, sans-serif;
    background: white;
  }
</style>
<link
  rel="stylesheet"
  href="styles.css"
  media="print"
  onload="this.onload=null;this.removeAttribute('media');"
/>
```

👉 The `onload` event ensures **CSS loads asynchronously**.

---

### ✅ **Lazy Loading CSS**

Instead of loading all styles at once, **lazy loading defers non-critical CSS**.

Example using JavaScript:

```js
let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "extra-styles.css";
document.head.appendChild(link);
```

🔹 **Use Cases:**

- Load **extra themes** only when needed
- Reduce initial page load time

---

## **3. Avoiding Unused CSS**

Unused CSS **slows down performance**. Remove it with these tools:

### ✅ **Tools to Find & Remove Unused CSS**

- **PurgeCSS** (Webpack, Gulp, CLI)
- **UnCSS** (Removes unused styles from HTML)
- **Google Chrome DevTools → Coverage Tab** (Shows unused CSS)

Example using **PurgeCSS in Tailwind**:

```js
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
};
```

🔹 This **removes unused classes** from Tailwind CSS.

---

## **4. Efficient Use of Selectors**

Using efficient CSS selectors **improves rendering performance**.

### ✅ **Best Practices**

❌ **Avoid Deep Nesting** (Slower)

```css
.nav ul li a {
  color: blue;
}
```

✅ **Use Direct Selectors** (Faster)

```css
.nav a {
  color: blue;
}
```

❌ **Avoid Universal Selectors in Large Apps**

```css
* {
  margin: 0;
  padding: 0;
}
```

✅ **Use Specific Selectors**

```css
body {
  margin: 0;
  padding: 0;
}
```

❌ **Avoid Overly Generic Selectors**

```css
div {
  padding: 10px;
}
```

✅ **Use Class Names Instead**

```css
.card {
  padding: 10px;
}
```

---

# **11. CSS Frameworks & Utility-First CSS**

- Bootstrap
- Tailwind CSS
- Material UI (MUI)

---

## **1. Bootstrap**

Bootstrap is a **popular CSS framework** for building responsive websites quickly.

### ✅ **Key Features**

- Prebuilt **grid system** (`container`, `row`, `col`)
- Ready-to-use **components** (`buttons`, `modals`, `cards`)
- Supports **JavaScript components** (dropdowns, carousels)
- **Mobile-first & responsive**

### ✅ **Installation**

#### Using CDN:

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
```

#### Using npm:

```sh
npm install bootstrap
```

#### Import in React:

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

### ✅ **Basic Example (Grid Layout)**

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Column 1</div>
    <div class="col-md-6">Column 2</div>
  </div>
</div>
```

👉 **Responsive Design**: `col-md-6` makes each column **50% width on medium (md) screens and larger**.

---

## **2. Tailwind CSS**

Tailwind CSS is a **utility-first CSS framework** that allows rapid UI development.

### ✅ **Key Features**

- **Utility classes** (`text-center`, `bg-blue-500`)
- No predefined components (more flexible)
- **Highly customizable** via `tailwind.config.js`
- **Better performance** (removes unused CSS)

### ✅ **Installation**

#### Using CDN (For quick testing):

```html
<script src="https://cdn.tailwindcss.com"></script>
```

#### Using npm:

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

#### Add Tailwind to CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### ✅ **Basic Example (Flexbox Layout)**

```html
<div class="flex items-center justify-center h-screen bg-gray-200">
  <div class="p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-xl font-bold">Hello, Tailwind!</h2>
  </div>
</div>
```

👉 Uses **`flex` for centering**, `bg-gray-200` for background, and `shadow-md` for a card effect.

---

## **3. Material UI (MUI)**

MUI is a **React component library** that follows **Google's Material Design**.

### ✅ **Key Features**

- Prebuilt **React components** (buttons, cards, dialogs)
- **Theming support**
- Uses **CSS-in-JS** (JSS)
- Great for **enterprise applications**

### ✅ **Installation**

```sh
npm install @mui/material @emotion/react @emotion/styled
```

### ✅ **Basic Example (Button)**

```jsx
import { Button } from "@mui/material";

export default function App() {
  return (
    <Button variant="contained" color="primary">
      Click Me
    </Button>
  );
}
```

👉 The `variant="contained"` makes it a filled button.

### ✅ **Using Grid System**

```jsx
import { Grid, Paper } from "@mui/material";

export default function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper style={{ padding: 20 }}>Left Column</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper style={{ padding: 20 }}>Right Column</Paper>
      </Grid>
    </Grid>
  );
}
```

👉 **MUI Grid** follows a **12-column layout** (`xs={6}` = 50% width).

---

## **Which one should you choose?**

| Feature             | Bootstrap             | Tailwind CSS              | Material UI (MUI)         |
| ------------------- | --------------------- | ------------------------- | ------------------------- |
| **Design Approach** | Predefined Components | Utility Classes           | Prebuilt React Components |
| **Customization**   | Limited               | Highly Customizable       | Theming via JSS           |
| **Best For**        | Quick Prototyping     | Modern UI Design          | Enterprise React Apps     |
| **Responsiveness**  | Built-in Grid System  | Flex/Grid Utility Classes | MUI Grid System           |

# **12. Modern CSS Features**

- Container Queries
- Subgrid
- Scroll Snap (`scroll-snap-type`, `scroll-behavior`)
- CSS Nesting (like SCSS but native)

---

## **1. Container Queries**

Container Queries allow elements to **adapt** based on their parent container's size (instead of the viewport like Media Queries).

### ✅ **Basic Syntax**

```css
@container (min-width: 500px) {
  .card {
    background: lightblue;
  }
}
```

👉 **When `.card`'s parent container is at least 500px wide, the background turns light blue.**

### ✅ **Enabling Container Queries**

Set `container-type` on a parent:

```css
.container {
  container-type: inline-size; /* Enables container queries */
}
```

### ✅ **Example: Responsive Cards**

```css
.container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    font-size: 1.5rem;
  }
}
```

👉 **Cards change font-size only when their container reaches 400px, independent of viewport size.**

---

## **2. CSS Subgrid**

Subgrid allows child elements to inherit the parent **grid layout**, maintaining column/row alignment.

### ✅ **Basic Example**

```css
.parent {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.child {
  display: grid;
  grid-template-columns: subgrid; /* Inherits parent columns */
}
```

👉 **The `.child` follows the same grid column structure as `.parent`.**

### ✅ **Use Case: Aligning Nested Elements**

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.item {
  display: grid;
  grid-template-columns: subgrid;
}
```

👉 Useful for **complex layouts** where elements need **consistent alignment** inside grids.

---

## **3. Scroll Snap**

Scroll Snap makes scrolling **snappy** by locking the viewport at specific points.

### ✅ **Basic Syntax**

```css
.scroll-container {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  display: flex;
}

.scroll-item {
  scroll-snap-align: center;
  min-width: 300px;
}
```

👉 **`scroll-snap-type: x mandatory;`** ensures scrolling stops at each `.scroll-item`.

### ✅ **Types of `scroll-snap-type`**

| Value         | Behavior                                         |
| ------------- | ------------------------------------------------ |
| `x mandatory` | Snaps horizontally, user must stop at an element |
| `y mandatory` | Snaps vertically, strict scrolling               |
| `x proximity` | Snaps horizontally, but allows free movement     |
| `y proximity` | Snaps vertically, but allows free movement       |

### ✅ **Smooth Scrolling**

```css
html {
  scroll-behavior: smooth;
}
```

👉 Enables **smooth scrolling** instead of instant jumps.

---

## **4. Native CSS Nesting**

CSS now supports **native nesting** similar to SCSS.

### ✅ **Example Without Nesting**

```css
.card {
  background: white;
}

.card:hover {
  background: lightgray;
}

.card .title {
  font-weight: bold;
}
```

### ✅ **Same Example With Native Nesting**

```css
.card {
  background: white;

  &:hover {
    background: lightgray;
  }

  .title {
    font-weight: bold;
  }
}
```

👉 **No need for SCSS!** This improves readability and reduces repetition.

---
