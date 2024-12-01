document.addEventListener('DOMContentLoaded', () => {
    // Load saved language from localStorage or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    updateLanguage(savedLanguage);
  
    // Function to update the language on the page
    function updateLanguage(language) {
      const translations = {
        en: {
          pageTitle: 'Scenario 1',
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
          scenarioHeader: 'Scenario 1: Trip to Italy',
          steps: [
            'Alex wants to travel to Italy.',
            'He buys plane tickets on his iPhone.',
            'He takes an Uber to the airport.',
            'After going through airport security, he arrives at his gate.',
            'The flight takes about 10 hours.',
            'Rome looks stunning with the Colosseum in view.',
            'Alex enjoys pasta and wine on a night out.',
            'Alex takes a tour of the Colosseum.',
            'He even takes a day trip to Pisa.',
            'Decides to share the storyboard link with friends.',
          ],
        },
        es: {
          pageTitle: 'Escenario 1',
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
          scenarioHeader: 'Escenario 1: Viaje a Italia',
          steps: [
            'Alex quiere viajar a Italia.',
            'Compra boletos de avión en su iPhone.',
            'Toma un Uber al aeropuerto.',
            'Después de pasar por seguridad en el aeropuerto, llega a su puerta de embarque.',
            'El vuelo dura aproximadamente 10 horas.',
            'Roma se ve impresionante con el Coliseo a la vista.',
            'Alex disfruta de pasta y vino en una salida nocturna.',
            'Alex hace un recorrido por el Coliseo.',
            'Incluso hace una excursión de un día a Pisa.',
            'Decide compartir el enlace del guion gráfico con sus amigos.',
          ],
        },
      };
  
      const langData = translations[language];
      if (langData) {
        applyTranslations(langData);
      }
    }
  
    // Function to apply translations
    function applyTranslations(translations) {
      // Page title
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
  
      // Header and Scenario Title
      document.querySelector('h1').textContent = translations.pageTitle;
      document.querySelector('h2').textContent = translations.scenarioHeader;
  
      // Steps in Flowchart
      const steps = document.querySelectorAll('.flowchart .step');
      steps.forEach((step, index) => {
        step.textContent = translations.steps[index];
      });
    }
  });
  