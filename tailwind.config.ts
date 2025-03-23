module.exports = {
  theme: {
    extend: {
      animation: {
        slowBounce: 'slowBounce 4s infinite', // Adjust the timing here
      },
      keyframes: {
        slowBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
};
