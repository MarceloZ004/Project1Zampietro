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
          navPreferences: 'Preferences',
          navHelp: 'Help',
          logoutButton: 'Logout',
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
          navPreferences: 'Preferencias',
          navHelp: 'Ayuda',
          logoutButton: 'Cerrar Sesión',
        },
      };
  
      const langData = translations[language];
      if (langData) {
        document.querySelector('header h1').textContent = langData.helpHeader;
        document.querySelector('h2').textContent = langData.faqHeader; // Update h2 text
        document.querySelector('a[href="preferences.html"]').textContent = langData.navPreferences;
        document.querySelector('a[href="help.html"]').textContent = langData.navHelp;
        document.getElementById('logoutButton').textContent = langData.logoutButton; // Update Logout button text
  
        const faqs = document.querySelectorAll('.faq');
        faqs[0].innerHTML = `<strong>${langData.faq1}</strong><p>${langData.faq1Detail}</p>`;
        faqs[1].innerHTML = `<strong>${langData.faq2}</strong><p>${langData.faq2Detail}</p>`;
        faqs[2].innerHTML = `<strong>${langData.faq3}</strong><p>${langData.faq3Detail}</p>`;
      }
    }
  });  