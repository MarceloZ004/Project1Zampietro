document.addEventListener('DOMContentLoaded', () => {
    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light mode if no value is set
    applyTheme(savedTheme);
  
    // Function to apply the theme
    function applyTheme(theme) {
      document.body.classList.remove('light-mode', 'dark-mode');
      if (theme === 'dark') {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.add('light-mode');
      }
    }
  });
  