document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        // Clear local storage or any session data
        localStorage.removeItem('username');
        localStorage.removeItem('theme');
        localStorage.removeItem('language');
  
        // Redirect to the login page (index.html)
        window.location.href = '../index.html';
      });
    }
  });
  