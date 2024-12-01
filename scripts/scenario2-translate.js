document.addEventListener('DOMContentLoaded', () => {
    // Load saved language from localStorage or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    updateLanguage(savedLanguage);
  
    // Function to update the language on the page
    function updateLanguage(language) {
      const translations = {
        en: {
          pageTitle: 'Scenario 2',
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
          scenarioHeader: 'Scenario 2: Event Booking for a University Trip',
          steps: [
            'Emma, a teacher, wants to organize a University trip to the museum.',
            "She visits the museum's website on her laptop.",
            'Browses the “Plan Your Visit” section for group event bookings.',
            'Views available time slots for University trips.',
            'Chooses a preferred date and time for the visit.',
            'Receives additional information on educational workshops available during the visit.',
            'She selects a computer science workshop for her students.',
            'Emma enters her contact details and submits the booking request.',
            'Receives a confirmation email with booking details.',
            'Prints out the itinerary and informs her students about the upcoming trip.',
          ],
        },
        es: {
          pageTitle: 'Escenario 2',
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
          scenarioHeader: 'Escenario 2: Reserva de Eventos para un Viaje Universitario',
          steps: [
            'Emma, una profesora, quiere organizar un viaje universitario al museo.',
            'Visita el sitio web del museo en su portátil.',
            'Navega por la sección “Planifica tu Visita” para reservas de eventos grupales.',
            'Ve los horarios disponibles para viajes universitarios.',
            'Elige una fecha y hora preferida para la visita.',
            'Recibe información adicional sobre talleres educativos disponibles durante la visita.',
            'Selecciona un taller de informática para sus estudiantes.',
            'Emma ingresa sus datos de contacto y envía la solicitud de reserva.',
            'Recibe un correo electrónico de confirmación con los detalles de la reserva.',
            'Imprime el itinerario e informa a sus estudiantes sobre el próximo viaje.',
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
  