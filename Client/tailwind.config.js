/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        courgette: "Courgette",
      },
      backgroundImage: {
        homeBg: "url('./src/assets/images/Background.jpg')",
      },
      colors: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.35))",
        main: "#ffe4b4",
        "custom-bg": "rgba(176,127,90,80%)",
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
      boxShadow: {
        "custom-shadow": "0 0 30px 30px rgba(204, 149, 108, 0.41)", // Custom shadow
      },
      keyframes: {
        spinCustom: {
          "0%": { transform: "translateX(0%) rotate(0deg)" },
          "100%": { transform: "translateX(0%) rotate(360deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        spinCustom: "spinCustom 15s linear infinite",
        "fade-in": "fadeIn 0.5s ease-in-out", // Custom animation
      },
      dropShadow: {
        custom: [
          "1px 1px 0 #1b5e20", // bottom-right shadow (darker green)
          "-1px -1px 0 #1b5e20", // top-left shadow
          "1px -1px 0 #1b5e20", // top-right shadow
          "-1px 1px 0 #1b5e20", // bottom-left shadow
        ],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Correctly include the animate plugin // Correctly include the scrollbar hide plugin
  ],
};
