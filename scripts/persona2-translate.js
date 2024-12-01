document.addEventListener('DOMContentLoaded', () => {
    // Load saved language from localStorage or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    updateLanguage(savedLanguage);
  
    // Function to update the language on the page
    function updateLanguage(language) {
      const translations = {
        en: {
          pageTitle: 'Persona 2',
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
          frequentTraveler: 'Frequent Traveler',
          emmaWilson: 'Emma Wilson',
          ageValue: '28',
          locationValue: 'Berlin, Germany',
          techComfortValue: 'High',
          professionValue: 'Computer Science Professor',
          backstoryTitle: 'Backstory',
          frustrationsTitle: 'Frustrations',
          motivationsTitle: 'Motivations',
          idealExperienceTitle: 'Ideal Experience',
          backstory: [
            'Born and raised in Berlin.',
            'Developed a love for technology at a young age.',
            'Travels frequently for personal enjoyment.',
            'Loves exploring new cultures and learning new languages.',
          ],
          frustrations: [
            'Bad internet.',
            'Unclear websites.',
            'Unreliable customer service.',
            'Long and complicated check-in processes at the DMV.',
          ],
          motivations: [
            'Exploring new destinations and cultures.',
            'Finding tech apps to make travel easier.',
            'My dog.',
            'Connecting with local communities.',
          ],
          idealExperience: [
            'Trip to Italy.',
            'Clear skin.',
            'Access to fast internet no matter the destination.',
            'Fast customer service in the DMV.',
          ],
        },
        es: {
          pageTitle: 'Persona 2',
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
          frequentTraveler: 'Viajera Frecuente',
          emmaWilson: 'Emma Wilson',
          ageValue: '28',
          locationValue: 'Berlín, Alemania',
          techComfortValue: 'Alto',
          professionValue: 'Profesora de Informática',
          backstoryTitle: 'Historia de Fondo',
          frustrationsTitle: 'Frustraciones',
          motivationsTitle: 'Motivaciones',
          idealExperienceTitle: 'Experiencia Ideal',
          backstory: [
            'Nacida y criada en Berlín.',
            'Desarrolló un amor por la tecnología desde joven.',
            'Viaja con frecuencia por placer personal.',
            'Le encanta explorar nuevas culturas y aprender nuevos idiomas.',
          ],
          frustrations: [
            'Mal internet.',
            'Sitios web poco claros.',
            'Atención al cliente poco confiable.',
            'Procesos largos y complicados en el DMV.',
          ],
          motivations: [
            'Explorar nuevos destinos y culturas.',
            'Encontrar aplicaciones tecnológicas que faciliten viajar.',
            'Mi perro.',
            'Conectar con comunidades locales.',
          ],
          idealExperience: [
            'Viaje a Italia.',
            'Piel clara.',
            'Acceso a internet rápido sin importar el destino.',
            'Atención al cliente rápida en el DMV.',
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
      rows[0].cells[1].textContent = translations.frequentTraveler;
      rows[1].cells[0].textContent = translations.name;
      rows[1].cells[1].textContent = translations.emmaWilson;
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