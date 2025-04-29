# Travel Agency Website

A modern travel agency website built with HTML and Tailwind CSS.

## Features

- Responsive design
- Modern UI with Tailwind CSS
- Component-based structure
- Optimized for performance

## Project Structure

```
travel-agency/

├── public/
|   ├── index.html          # Main HTML file
|   ├── components/         # HTML components
│   │   ├── header.html
│   |   ├── hero.html
│   |   ├── service.html
│   |   ├── destination.html
│   |   └── footer.html
|   ├── css/ 
|   |   ├── output.css      # Compailed Tailwind CSS
|   |   └── style.css       # Custom CSS
│   └── assets/
│       └── images/         # Image assets
├── src/
│    └──input.css           # Tailwind CSS input file
├── package.json            # Project dependencies
├── vercel.json             # Vercel configuration
└── tailwind.config.js      # Tailwind configuration
```

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone git@github.com:dodhit/travel-agency.git
cd travel-agency
```

2. Install dependencies:
```bash
npm install
```

## Development

To start development:

1. Build the project:
```bash
npm run build
```

This command will:
- Compile Tailwind CSS from `src/input.css` to `output.css`
- Copy HTML files and components to the correct locations

2. To serve the website locally:
```bash
npx serve .
```

The website will be available at `http://localhost:3000`

## Available Scripts

- `npm run build` - Builds the project (CSS and copies files)
- `npm run build:css` - Builds only the Tailwind CSS
- `npm run copy:html` - Copies HTML files
- `npm run copy:components` - Copies component files
- `npm run copy:assets` - Copies asset files
- `npm run copy:css` - Copies CSS files

## Deployment

The project is configured for deployment on Vercel. The `vercel.json` configuration will automatically serve files from the root directory.

## License

ISC