import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2.5rem",
        xl: "4rem",
        "2xl": "6rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        ivory: "var(--ivory)",
        cream: "var(--cream)",
        birch: "var(--birch)",
        gold: "var(--gold)",
        orange: "var(--orange)",
        graphite: "var(--graphite)",
        "soft-black": "var(--soft-black)",
        muted: "var(--muted)",
        divider: "var(--divider)",
        hairline: "var(--hairline)",
      },
      fontFamily: {
        serif: "var(--font-serif)",
        sans: "var(--font-sans)",
      },
      fontSize: {
        hero: "var(--step-hero)",
        h1: "var(--step-h1)",
        h2: "var(--step-h2)",
        h3: "var(--step-h3)",
        lede: "var(--step-lede)",
        body: "var(--step-body)",
        label: "var(--step-label)",
      },
      letterSpacing: {
        label: "0.16em",
        tight: "-0.02em",
      },
      lineHeight: {
        display: "0.94",
        heading: "1.02",
        body: "1.55",
      },
      borderRadius: {
        pill: "999px",
        nav: "22px",
        card: "12px",
      },
      boxShadow: {
        nav: "0 8px 32px -12px rgba(24, 24, 22, 0.18)",
      },
      transitionTimingFunction: {
        entrance: "cubic-bezier(0.22, 1, 0.36, 1)",
        reveal: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
