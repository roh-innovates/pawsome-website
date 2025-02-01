module.exports = {
    theme: {
      extend: {
        animation: {
          pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          pulse: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '.5' },
          },
        },
      },
    },
  }
  



  module.exports = {
    theme: {
      extend: {
        animation: {
          bounce: 'bounce 2s cubic-bezier(0.25, 0.8, 0.25, 1) infinite',
        },
        keyframes: {
          bounce: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
      },
    },
  }
  



  module.exports = {
    theme: {
      extend: {
        animation: {
          spin: 'spin 2s linear infinite',
        },
        keyframes: {
          spin: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
      },
    },
  }
  



  module.exports = {
    theme: {
      extend: {
        animation: {
          ping: 'ping 1s ease-in-out infinite',
        },
        keyframes: {
          ping: {
            '0%': { transform: 'scale(1)', opacity: '1' },
            '75%': { transform: 'scale(1.5)', opacity: '0.5' },
            '100%': { transform: 'scale(1)', opacity: '0' },
          },
        },
      },
    },
  }
  