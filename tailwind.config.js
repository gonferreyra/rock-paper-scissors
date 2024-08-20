/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      barlow: ['Barlow Semi Condensed', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'background-radial-gradient':
          'radial-gradient(hsl(214, 47%, 23%) 0%, hsl(237,49%, 15%) 100%)',
        'scissors-gradient':
          'linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        'paper-gradient':
          'linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
        'rock-gradient':
          'linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
        'lizard-gradient':
          'linear-gradient(to bottom, hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
        'cyan-gradient':
          'linear-gradient(to bottom, hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
      },
      colors: {
        'text-dark': 'hsl(229, 25%, 31%)',
        'text-score': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
      },
    },
  },
  plugins: [],
};
