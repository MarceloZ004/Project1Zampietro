document.addEventListener('DOMContentLoaded', () => {
    // Load saved language from localStorage or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    updateLanguage(savedLanguage);
  
    // Function to update the language on the page
    function updateLanguage(language) {
      const translations = {
        en: {
          pageTitle: 'Moodboard',
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
          moodboardHeader: 'Moodboard',
        },
        es: {
          pageTitle: 'Tablero de Inspiración',
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
          moodboardHeader: 'Tablero de Inspiración',
        },
      };
  
      const langData = translations[language];
      if (langData) {
        applyTranslations(langData);
      }
    }
  
    // Function to apply translations
    function applyTranslations(translations) {
      // Update page title
      document.title = translations.pageTitle;
  
      // Navigation bar
      document.querySelector('a[href="main.html"]').textContent = translations.navHomepage;
      document.querySelector('a[href="persona1.html"]').textContent = translations.navPersona1;
      document.querySelector('a[href="persona2.html"]').textContent = translations.navPersona2;
      document.querySelector('a[href="scenario1.html"]').textContent = translations.navScenario1;
      document.querySelector('a[href="scenario2.html"]').textContent = translations.navScenario2;
      document.querySelector('a[href="storyboard.html"]').textContent = translations.navStoryboard;
      document.querySelector('a[href="moodboard.html"]').textContent = translations.navMoodboard;
      document.querySelector('a[href="flowchart.html"]').textContent = translations.navFlowchart;
      document.querySelector('a[href="preferences.html"]').textContent = translations.navPreferences;
      document.querySelector('a[href="help.html"]').textContent = translations.navHelp;
  
      // Logout button
      document.getElementById('logoutButton').textContent = translations.logoutButton;
  
      // Page header
      document.querySelector('h1').textContent = translations.moodboardHeader;
    }
  });
  