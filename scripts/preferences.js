document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    if (!username) {
      window.location.href = '../index.html'; // Redirect to login if no username
      return;
    }
  
    const preferencesForm = document.getElementById('preferencesForm');
    const themeSelect = document.getElementById('theme');
    const languageSelect = document.getElementById('language');
    const headerTitle = document.querySelector('header h1');
  
    // Load and apply saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    themeSelect.value = savedTheme;
  
    // Load and apply saved language
    const savedLanguage = localStorage.getItem('language') || 'en';
    updateLanguage(savedLanguage);
    languageSelect.value = savedLanguage;
  
    // Logout functionality
    document.getElementById('logoutButton').addEventListener('click', () => {
      localStorage.removeItem('username');
      localStorage.removeItem('theme');
      localStorage.removeItem('language');
      window.location.href = '../index.html';
    });
  
    preferencesForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const theme = themeSelect.value;
      const language = languageSelect.value;
  
      // Save preferences to localStorage
      localStorage.setItem('theme', theme);
      localStorage.setItem('language', language);
  
      // Apply preferences
      applyTheme(theme);
      updateLanguage(language);
  
    });
  
    function applyTheme(theme) {
      if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
    }
  
    function updateLanguage(language) {
      const translations = {
        en: {
          preferencesHeader: `User Preferences for ${username}`,
          themeLabel: 'Theme:',
          languageLabel: 'Language:',
          saveButton: 'Save Preferences',
          logoutButton: 'Logout',
          navPreferences: 'Preferences',
          navHelp: 'Help',
        },
        es: {
          preferencesHeader: `Preferencias del Usuario para ${username}`,
          themeLabel: 'Tema:',
          languageLabel: 'Idioma:',
          saveButton: 'Guardar Preferencias',
          logoutButton: 'Cerrar Sesión',
          navPreferences: 'Preferencias',
          navHelp: 'Ayuda',
        },
      };
  
      const langData = translations[language];
      if (langData) {
        headerTitle.textContent = langData.preferencesHeader;
        document.querySelector('label[for="theme"]').textContent = langData.themeLabel;
        document.querySelector('label[for="language"]').textContent = langData.languageLabel;
        document.querySelector('.btn-primary').textContent = langData.saveButton;
        document.getElementById('logoutButton').textContent = langData.logoutButton;
        document.querySelector('a[href="preferences.html"]').textContent = langData.navPreferences;
        document.querySelector('a[href="help.html"]').textContent = langData.navHelp;
      }
    }
  });  