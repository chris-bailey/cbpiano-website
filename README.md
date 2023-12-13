# Chris Bailey - New Age Piano Website
## Overview
This repository contains the source code for my [New Age Piano Website](https://chrisbaileypiano.com), developed using Vue.js 3.0.

The website was originally created with HTML/CSS and a bit of JavaScript. The way that Vue.js allows for components to be reused makes the website code much cleaner since you are no longer copying and pasting headers and footers into every single HTML file. 😅

## Technologies Used
### Vue.js 3.0
Vue.js is a progressive JavaScript framework used for building user interfaces. The website leverages Vue.js 3.0 for its reactive components and efficient rendering of dynamic content.

### Babel
Babel is used for transpiling ES6+ JavaScript code into backward-compatible versions for older browsers.

### Vue Router
Vue Router does the heavy lifting when it comes to page navigation without page reloads.

### Sass (Syntactically Awesome Style Sheets)
[Sass](https://sass-lang.com) is a CSS pre-processor, and it helps you to write cleaner and more maintainable CSS.

## Project Setup and Running
### Development Mode
To run the project in development mode:
```bash
npm install
npm run serve
```
### Production Build
To package the project for production:
```bash
npm run build
```

This will generate a `dist` directory with static assets, which can be deployed on any web server.

### Deployment
This project is statically deployed using **NGINX**, which serves the `index.html` page and related assets. I choose NGINX since it can handle clean URL routing when using Vue.js with Vue Router. I was using GitHub Pages for the previous site that only had static HTML/CSS, however there can be limitations when using Vue Router, especially when navigating backwards in the browser.

## Google Analytics Integration

### Setting up Google Analytics with Environment Variables

The `index.html` file has Google Analytics setup. The only thing missing is the tracking ID. You can add it as follows:

1. **Create `.env.local` File**:
   - In the project root, create a `.env.local` file.
   - Add your Google Analytics ID:
     ```
     VUE_APP_GA_ID=YOUR_GOOGLE_ANALYTICS_ID
     ```

2. **Usage in `index.html`**:
   - Reference the ID in your `index.html`:
     ```html
     <script>
       var _gaq = _gaq || [];
       _gaq.push(['_setAccount', process.env.VUE_APP_GA_ID]);
       // Remaining tracking script...
     </script>
     ```

## Vue documentation
If you are curious and want more information on Vue.js, check out the [Vue.js Official Website](https://vuejs.org).