import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f0ff',
          purple: '#bf00ff',
          pink: '#ff006e',
          green: '#00ff88',
          yellow: '#ffea00',
        },
        cyber: {
          dark: '#0a0a0f',
          darker: '#050508',
          light: '#1a1a2e',
          border: '#2d2d44',
        }
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
