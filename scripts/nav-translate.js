document.addEventListener('DOMContentLoaded', () => {
    // Load saved language from localStorage or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    updateLanguage(savedLanguage);
  
    // Function to update the language on the page
    function updateLanguage(language) {
      const translations = {
        en: {
          navHomepage: 'Homepage',
          navPersona1: 'Persona 1',
          navPersona2: 'Persona 2',
          navScenario1: 'Scenario 1',
          navScenario2: 'Scenario 2',
          navStoryboard: 'Storyboard',
          navMoodboard: 'Moodboard',
          navFlowchart: 'Flowchart',
          navPreferences: 'Preferences',
          navHelp: 'Help',
          logoutButton: 'Logout',
        },
        es: {
          navHomepage: 'Inicio',
          navPersona1: 'Persona 1',
          navPersona2: 'Persona 2',
          navScenario1: 'Escenario 1',
          navScenario2: 'Escenario 2',
          navStoryboard: 'Guion Gráfico',
          navMoodboard: 'Tablero de Inspiración',
          navFlowchart: 'Diagrama de Flujo',
          navPreferences: 'Preferencias',
          navHelp: 'Ayuda',
          logoutButton: 'Cerrar Sesión',
        },
      };
  
      const langData = translations[language];
      if (langData) {
        applyTranslations(langData);
      }
    }
  
    // Function to apply translations to elements
    function applyTranslations(translations) {
      const elements = {
        navHomepage: document.querySelector('a[href="main.html"]'),
        navPersona1: document.querySelector('a[href="persona1.html"]'),
        navPersona2: document.querySelector('a[href="persona2.html"]'),
        navScenario1: document.querySelector('a[href="scenario1.html"]'),
        navScenario2: document.querySelector('a[href="scenario2.html"]'),
        navStoryboard: document.querySelector('a[href="storyboard.html"]'),
        navMoodboard: document.querySelector('a[href="moodboard.html"]'),
        navFlowchart: document.querySelector('a[href="flowchart.html"]'),
        navPreferences: document.querySelector('a[href="preferences.html"]'),
        navHelp: document.querySelector('a[href="help.html"]'),
        logoutButton: document.getElementById('logoutButton'),
      };
  
      for (const [key, element] of Object.entries(elements)) {
        if (element && translations[key]) {
          element.textContent = translations[key];
        }
      }
    }
  });
  