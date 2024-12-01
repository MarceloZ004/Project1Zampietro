document.addEventListener('DOMContentLoaded', () => {
    // Load saved language from localStorage or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    updateLanguage(savedLanguage);
  
    // Function to update the language on the page
    function updateLanguage(language) {
      const translations = {
        en: {
          pageTitle: 'Persona 1',
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
          personaType: 'Persona Type',
          name: 'Name',
          age: 'Age',
          location: 'Location',
          technicalComfort: 'Technical Comfort',
          profession: 'Profession',
          casualShopper: 'Casual Shopper',
          alexJohnson: 'Alex Johnson',
          ageValue: '34',
          locationValue: 'New York, USA',
          techComfortValue: 'Moderate',
          professionValue: 'Graphic Designer',
          backstoryTitle: 'Backstory',
          frustrationsTitle: 'Frustrations',
          motivationsTitle: 'Motivations',
          idealExperienceTitle: 'Ideal Experience',
          backstory: [
            'Grew up in a small town but moved to New York for work.',
            'Always had a passion for creativity and design.',
            'Worked in retail before becoming a graphic designer.',
            'Loves to travel and take inspiration from different cultures.',
          ],
          frustrations: [
            'Long wait times when purchasing items online.',
            'Complicated website navigation.',
            'Unclear product descriptions and reviews.',
            'High shipping costs for international orders.',
          ],
          motivations: [
            'Finding unique products that match personal style.',
            'Getting good deals and discounts on high-quality items.',
            'Receiving fast and reliable customer service.',
            'Staying updated on the latest trends in fashion and design.',
          ],
          idealExperience: [
            'Seamless online shopping with fast delivery options.',
            'Clear and accurate product descriptions and reviews.',
            'Personalized product recommendations based on preferences.',
            'Efficient and easy checkout process.',
          ],
        },
        es: {
          pageTitle: 'Persona 1',
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
          personaType: 'Tipo de Persona',
          name: 'Nombre',
          age: 'Edad',
          location: 'Ubicación',
          technicalComfort: 'Confort Técnico',
          profession: 'Profesión',
          casualShopper: 'Comprador Casual',
          alexJohnson: 'Alex Johnson',
          ageValue: '34',
          locationValue: 'Nueva York, EE.UU.',
          techComfortValue: 'Moderado',
          professionValue: 'Diseñador Gráfico',
          backstoryTitle: 'Historia de Fondo',
          frustrationsTitle: 'Frustraciones',
          motivationsTitle: 'Motivaciones',
          idealExperienceTitle: 'Experiencia Ideal',
          backstory: [
            'Creció en un pequeño pueblo, pero se mudó a Nueva York por trabajo.',
            'Siempre tuvo una pasión por la creatividad y el diseño.',
            'Trabajó en el comercio minorista antes de convertirse en diseñador gráfico.',
            'Le encanta viajar y encontrar inspiración en diferentes culturas.',
          ],
          frustrations: [
            'Largos tiempos de espera al comprar en línea.',
            'Navegación complicada en el sitio web.',
            'Descripciones y reseñas de productos poco claras.',
            'Altos costos de envío para pedidos internacionales.',
          ],
          motivations: [
            'Encontrar productos únicos que coincidan con su estilo personal.',
            'Obtener buenas ofertas y descuentos en productos de alta calidad.',
            'Recibir un servicio al cliente rápido y confiable.',
            'Estar al día con las últimas tendencias en moda y diseño.',
          ],
          idealExperience: [
            'Compras en línea sin problemas con opciones de entrega rápida.',
            'Descripciones y reseñas de productos claras y precisas.',
            'Recomendaciones personalizadas de productos según sus preferencias.',
            'Proceso de pago eficiente y sencillo.',
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
  
      // Table content
      const table = document.getElementById('persona-table');
      const rows = table.rows;
      rows[0].cells[0].textContent = translations.personaType;
      rows[0].cells[1].textContent = translations.casualShopper;
      rows[1].cells[0].textContent = translations.name;
      rows[1].cells[1].textContent = translations.alexJohnson;
      rows[2].cells[0].textContent = translations.age;
      rows[2].cells[1].textContent = translations.ageValue;
      rows[3].cells[0].textContent = translations.location;
      rows[3].cells[1].textContent = translations.locationValue;
      rows[4].cells[0].textContent = translations.technicalComfort;
      rows[4].cells[1].textContent = translations.techComfortValue;
      rows[5].cells[0].textContent = translations.profession;
      rows[5].cells[1].textContent = translations.professionValue;
  
      // Section titles and lists
      document.querySelector('main h1').textContent = translations.pageTitle;
      document.querySelector('section:nth-of-type(1) h2').textContent = translations.backstoryTitle;
      document.querySelector('section:nth-of-type(2) h2').textContent = translations.frustrationsTitle;
      document.querySelector('section:nth-of-type(3) h2').textContent = translations.motivationsTitle;
      document.querySelector('section:nth-of-type(4) h2').textContent = translations.idealExperienceTitle;
  
      const backstoryList = document.querySelectorAll('section:nth-of-type(1) ul li');
      backstoryList.forEach((li, index) => {
        li.textContent = translations.backstory[index];
      });
  
      const frustrationsList = document.querySelectorAll('section:nth-of-type(2) ul li');
      frustrationsList.forEach((li, index) => {
        li.textContent = translations.frustrations[index];
      });
  
      const motivationsList = document.querySelectorAll('section:nth-of-type(3) ul li');
      motivationsList.forEach((li, index) => {
        li.textContent = translations.motivations[index];
      });
  
      const idealExperienceList = document.querySelectorAll('section:nth-of-type(4) ul li');
      idealExperienceList.forEach((li, index) => {
        li.textContent = translations.idealExperience[index];
      });
    }
  });
  