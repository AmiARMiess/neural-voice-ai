# ️ NeuralVoice AI - Modern SaaS Landing Page

A sleek, high-performance, and fully responsive landing page template designed for Voice AI, SaaS, and tech startups. Built from scratch using clean, modular HTML5, CSS3, and Vanilla JavaScript—no heavy frameworks required.

<img width="1349" height="4023" alt="image" src="https://github.com/user-attachments/assets/fdb57162-bdef-428d-b72e-a7171ec594f9" />

## ✨ Features

- **🎨 Modern UI/UX:** Clean design with glassmorphism effects, smooth gradients, and a professional layout.
- **📱 Fully Responsive:** Looks great on desktops, tablets, and mobile devices.
- **💰 Dynamic Pricing Toggle:** Interactive Monthly/Yearly billing switch with smooth price transition animations and a 20% discount logic.
- **⚡ Interactive Elements:** Working text-to-speech demo UI, form validation, and toast notifications.
- **📊 Data Visualization:** Animated bar and line charts built with pure CSS/JS.
- **🚫 Zero Dependencies:** Built entirely with Vanilla HTML, CSS, and JavaScript. No React, Vue, or jQuery needed!

## ️ Tech Stack

- **HTML5** (Semantic structure)
- **CSS3** (Custom properties, Flexbox, Grid, Animations)
- **Vanilla JavaScript** (DOM manipulation, Event listeners, Intersection Observer)

## 📁 Project Structure

```text
neural-voice-ai/
├── index.html          # Main HTML structure
├── styles.css          # All styling, animations, and responsive rules
├── script.js           # Interactive logic, pricing toggle, and charts
├── .gitattributes      # Git handling rules (line endings, GitHub stats)
└── README.md           # Project documentation
```

## 🚀 Getting Started

Follow these simple steps to get the project running locally on your machine.

### Prerequisites

You don't need any complex build tools or package managers for this project. You only need:
* A modern web browser (Chrome, Firefox, Safari, etc.)
* A code editor (we recommend [Visual Studio Code](https://code.visualstudio.com/))
* [Git](https://git-scm.com/) (optional, if you want to clone the repository)

### Installation & Setup

**1. Clone the repository:**
Open your terminal or command prompt and run the following command:
```bash
git clone https://github.com/AmiARMiess/neural-voice-ai.git
cd neural-voice-ai
```

## 🎨 Customization

This template is designed to be easily customized without needing a build step or complex frameworks. Here is how you can make it your own:

### 1. Changing the Theme Colors
All primary colors are managed using CSS variables. To update the color scheme to match your brand, open `styles.css` and modify the `:root` section at the very top:

```css
:root {
    --primary: #6366F1;       /* Main brand color */
    --primary-dark: #4F46E5;  /* Darker shade for hover states */
    --secondary: #8B5CF6;     /* Secondary gradient color */
    --accent: #EC4899;        /* Accent color for highlights */
    /* ... other variables */
}
```

### 2. Updating the Pricing

The interactive Monthly/Yearly pricing toggle is driven by custom data attributes in the HTML, which are then manipulated by the JavaScript. To update the prices for your own product, follow these steps:

1. Open the `index.html` file in your code editor.
2. Scroll down to the **Pricing** section and locate the `.pricing-card` elements.
3. Update the `data-monthly` and `data-yearly` attributes to reflect your desired prices.
4. **Important:** Also update the visible price text inside the `<div class="price">` tag to match your new monthly price.

Here is an example of what the code looks like:

```html
<!-- Example: Changing the Pro plan to $29/month and $24/month yearly -->
<div class="pricing-card featured" data-monthly="29" data-yearly="24">
    <div class="badge">Most Popular</div>
    <h3>Pro</h3>
    
    <!-- Update the visible text here to match data-monthly -->
    <div class="price">$29<span class="billing-period">/month</span></div>
    
    <ul class="features-list">
        <!-- Features list... -->
    </ul>
    <button class="btn-primary">Get Started</button>
</div>
```

How it works:
When a user clicks the toggle switch, the JavaScript reads the data-monthly and data-yearly attributes from the HTML and automatically animates the price change. If "Yearly" is selected, it will also automatically append a "Billed $XXX/year" note below the price.
