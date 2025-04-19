# Atorix IT Solutions - Modern Website

A redesigned modern website for Atorix IT Solutions using Next.js, JavaScript, and Tailwind CSS.

## Features

- Modern UI/UX design
- Responsive layout for all screen sizes
- Light and dark mode support
- Interactive components
- Optimized performance

## Tech Stack

- **Framework**: Next.js
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide Icons
- **Animations**: CSS animations and transitions

## Getting Started

### Prerequisites

- Node.js 18+ or Bun 1.0+

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/atorix-new.git
   cd atorix-new
   ```

2. Install dependencies
   ```bash
   # Using npm
   npm install

   # Using Bun
   bun install
   ```

3. Start the development server
   ```bash
   # Using npm
   npm run dev

   # Using Bun
   bun run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Main application pages
- `src/components`: Reusable UI components
- `src/components/ui`: shadcn/ui components
- `src/lib`: Utility functions
- `public`: Static assets like images and fonts

## Deployment

### Building for Production

```bash
# Using npm
npm run build

# Using Bun
bun run build
```

### Deploying to Netlify

This project is configured to deploy on Netlify. The `netlify.toml` file contains all necessary configuration.

1. Push your code to a GitHub repository
2. Connect the repository to Netlify
3. Netlify will automatically deploy the site

## Adding New Components

To add a new shadcn/ui component, run:

```bash
npx shadcn@latest add -y -o [component-name]
```

## License

[MIT](LICENSE)
