/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        "2xl": "1650px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-primary)'],
        mono: ['var(--font-secondary)'],
      },
      fontSize: {
        "28px": "28px",
        "48px": "48px",
        "70px": "70px",
        "73px": "73px",
        "82px": "82px",
        "95px": "95px",
        "112px": "112px",
      },
      lineHeight: {
        "extra-loose": "2.5",
        "102px": "6.375rem",
        "82px": "5.125rem",
      },
      spacing: {
        "500": "500px",
      },
      backgroundImage: {
        "banner-bg-1":
          "url('https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/JulyHiringCampaign-DesktopBG.jpg')",
        "banner-bg-2":
          "url('https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/cycle_10_banner1-mob.jpg')",
        "banner-bg-3":
          "url('https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/cycle_10_banner2-mob.jpg')",
        "banner-bg-4":
          "url('https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/discovery-cylce-8-desktop.png')",
        "banner-bg-5":
          "url('https://tbsecoms.wpengine.com/wp-content/uploads/2019/03/stay-bg.png')",
        "banner-fe-2":
          "url('https://tbsecomd.wpengine.com/wp-content/uploads/2019/03/molson-candian.png')",
        "banner-fe-4":
          "url('https://tbsecoms.wpengine.com/wp-content/uploads/2019/03/brand-banner-more-value.png')",
        "banner-fe-6":
          "url('https://tbsecoms.wpengine.com/wp-content/uploads/2019/03/Hiring.png')",
      },
      colors: {
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.5s ease-out",
        "accordion-up": "accordion-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
