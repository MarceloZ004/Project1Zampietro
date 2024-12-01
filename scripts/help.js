document.addEventListener('DOMContentLoaded', () => {
  // Load saved theme and apply it
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  // Load saved language and apply it
  const savedLanguage = localStorage.getItem('language') || 'en';
  updateLanguage(savedLanguage);

  // Logout functionality
  document.getElementById('logoutButton').addEventListener('click', () => {
    localStorage.removeItem('username');
    localStorage.removeItem('theme');
    localStorage.removeItem('language');
    window.location.href = '../index.html';
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
        helpHeader: 'Help & FAQs',
        faqHeader: 'Frequently Asked Questions',
        faq1: 'How do I change my theme?',
        faq1Detail: 'Navigate to Preferences and select your preferred theme under the "Theme" dropdown.',
        faq2: 'How do I update my language settings?',
        faq2Detail: 'Go to Preferences and select your desired language under the "Language" dropdown.',
        faq3: 'How do I use Figma to create a prototype?',
        faq3Detail: 'Keep clicking things until something works.',
        faq4: 'Where can I view scenarios?',
        faq4Detail: 'You can find scenarios under Scenario 1 and Scenario 2 in the navigation menu.',
        faq5: 'What is the purpose of the storyboard?',
        faq5Detail: 'The storyboard visualizes the user flow in a sequence of steps.',
        faq6: 'How do I access the Moodboard?',
        faq6Detail: 'Click "Moodboard" in the navigation menu to view design inspirations.',
        faq7: 'What is the Flowchart used for?',
        faq7Detail: 'The flowchart provides a diagrammatic representation of the user journey.',
        faq8: 'How do I reset my preferences?',
        faq8Detail: 'Go to Preferences and update your theme or language as needed.',
        navPreferences: 'Preferences',
        navHelp: 'Help',
        logoutButton: 'Logout',
        navHomepage: 'Homepage',
        navPersona1: 'Persona 1',
        navPersona2: 'Persona 2',
        navScenario1: 'Scenario 1',
        navScenario2: 'Scenario 2',
        navStoryboard: 'Storyboard',
        navMoodboard: 'Moodboard',
        navFlowchart: 'Flowchart',
      },
      es: {
        helpHeader: 'Ayuda y Preguntas Frecuentes',
        faqHeader: 'Preguntas Frecuentes',
        faq1: '¿Cómo cambio mi tema?',
        faq1Detail: 'Vaya a Preferencias y seleccione su tema preferido en el menú desplegable "Tema".',
        faq2: '¿Cómo actualizo la configuración de mi idioma?',
        faq2Detail: 'Vaya a Preferencias y seleccione su idioma preferido en el menú desplegable "Idioma".',
        faq3: '¿Cómo uso Figma para crear un prototipo?',
        faq3Detail: 'Sigue haciendo clic en las cosas hasta que algo funcione.',
        faq4: '¿Dónde puedo ver los escenarios?',
        faq4Detail: 'Puede encontrar los escenarios en Escenario 1 y Escenario 2 en el menú de navegación.',
        faq5: '¿Cuál es el propósito del storyboard?',
        faq5Detail: 'El storyboard visualiza el flujo del usuario en una secuencia de pasos.',
        faq6: '¿Cómo accedo al Moodboard?',
        faq6Detail: 'Haga clic en "Tablero de Inspiración" en el menú de navegación para ver inspiraciones de diseño.',
        faq7: '¿Para qué se utiliza el Diagrama de Flujo?',
        faq7Detail: 'El diagrama de flujo proporciona una representación diagramática del recorrido del usuario.',
        faq8: '¿Cómo restablezco mis preferencias?',
        faq8Detail: 'Vaya a Preferencias y actualice su tema o idioma según sea necesario.',
        navPreferences: 'Preferencias',
        navHelp: 'Ayuda',
        logoutButton: 'Cerrar Sesión',
        navHomepage: 'Inicio',
        navPersona1: 'Persona 1',
        navPersona2: 'Persona 2',
        navScenario1: 'Escenario 1',
        navScenario2: 'Escenario 2',
        navStoryboard: 'Guion Gráfico',
        navMoodboard: 'Tablero de Inspiración',
        navFlowchart: 'Diagrama de Flujo',
      },
    };

    const langData = translations[language];
    if (langData) {
      document.querySelector('header h1').textContent = langData.helpHeader;
      document.querySelector('h2').textContent = langData.faqHeader;

      document.querySelector('a[href="preferences.html"]').textContent = langData.navPreferences;
      document.querySelector('a[href="help.html"]').textContent = langData.navHelp;
      document.getElementById('logoutButton').textContent = langData.logoutButton;

      const faqs = document.querySelectorAll('.faq');
      faqs[0].innerHTML = `<strong>${langData.faq1}</strong><p>${langData.faq1Detail}</p>`;
      faqs[1].innerHTML = `<strong>${langData.faq2}</strong><p>${langData.faq2Detail}</p>`;
      faqs[2].innerHTML = `<strong>${langData.faq3}</strong><p>${langData.faq3Detail}</p>`;
      faqs[3].innerHTML = `<strong>${langData.faq4}</strong><p>${langData.faq4Detail}</p>`;
      faqs[4].innerHTML = `<strong>${langData.faq5}</strong><p>${langData.faq5Detail}</p>`;
      faqs[5].innerHTML = `<strong>${langData.faq6}</strong><p>${langData.faq6Detail}</p>`;
      faqs[6].innerHTML = `<strong>${langData.faq7}</strong><p>${langData.faq7Detail}</p>`;
      faqs[7].innerHTML = `<strong>${langData.faq8}</strong><p>${langData.faq8Detail}</p>`;
    }
  }
});
