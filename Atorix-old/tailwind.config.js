// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"; // Import default theme

export default {
  darkMode: 'class', // Enable dark mode using class strategy
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // --- Add your customizations here ---
      colors: {
        // Foundation
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        primaryForeground: 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        secondaryForeground: 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        mutedForeground: 'var(--muted-foreground)',
        accent: 'var(--accent)',
        accentForeground: 'var(--accent-foreground)',

        // == Your Logo Brand Colors ==
        "brand-purple": "#9C0F53",
        "brand-pink": "#E93A7A",
        "brand-blue": "#0372C8",
        "brand-cyan": "#2BC1DC",

        // == Neutral Palette ==
        "neutral-white": "#FFFFFF",
        "neutral-bg": "#F8F9FA",
        "neutral-subtle-bg": "#EFF1F4",
        "neutral-border": "#E5E7EB",
        "neutral-text-light": "#6B7280", // Softer text
        "neutral-text": "#374151", // Default text
        "neutral-text-dark": "#111827", // Headings / Strong text

        // == Semantic Mapping (Using your brand colors) ==
        primary: "#0372C8", // Using brand-blue as primary action color
        "primary-hover": "#025aa2", // A slightly darker shade for hover
        // secondary: '#9C0F53',    // Define if needed
        // accent: '#2BC1DC',       // Define if needed
      },
      fontFamily: {
        // Set 'Inter' as the default sans-serif font
        // Fallback to Tailwind's default sans stack
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        // Define consistent rounding based on observation
        base: "8px", // ~ rounded-md
        lg: "12px", // ~ rounded-lg
        xl: "16px", // ~ rounded-xl (Maybe for cards)
        button: "8px", // Specific for buttons
      },
      boxShadow: {
        // Define subtle shadows
        subtle: "0 2px 8px rgba(0, 0, 0, 0.06)", // Softer than shadow-md
        medium: "0 4px 12px rgba(0, 0, 0, 0.08)",
        nav: "0 4px 12px rgba(55, 65, 81, 0.08)", // Subtle shadow for scrolled nav using neutral-text color
      },
      // Add a utility for the body padding to avoid content overlap
      // (Though better applied globally, can be defined here)
      spacing: {
        "nav-height": "68px", // Example: Approximate height of your navbar
      },
    },
  },
  plugins: [],
};
