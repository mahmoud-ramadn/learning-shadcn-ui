/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors: {
black:'#000000',
      primary: {
        50: "#F8F7FB",
        100: "#D4D0F4",
        200: "#C6C2F1",
        300: "#B9B3EE",
        400: "#ACA5EB",
        500: "#A097E7",
        600: "#978EE5",
        700: "#897FE1",
        800: "#7C71DF",
      },
      // Gray color with custom shades
      gray: {
        custom: "#2E2F33",
        "custom-50": "#FFFFFF",
        "custom-100": "#D0D1D5",
        "custom-200": "#BABBC1",
        "custom-300": "#A5A7AF",
        "custom-400": "#91939C",
        "custom-500": "#5F6980",
        "custom-600": "#686A74",
        "custom-700": "#55575F",
        "custom-800": "#2E2F33",
        "custom-900": "#101010",
      },

      danger: "#F65061",
      warning: "#FD8B2B",
      "card-bg":"#F3F4F7",
      "heading-main": "#2E2F33",
      "heading-brand": "#7C71DF",
      body: "#2E2F33",
      "body-sub": "#5F6980",
      "nav-links": "#55575F",
      "heading-secondary": "#FFFFFF",
    },
  
  
  },
  plugins: [require("tailwindcss-animate")],
};
