document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
  
    // Save the username in localStorage
    localStorage.setItem('username', username);
  
    // Redirect to preferences page
    window.location.href = 'pages/main.html';
  });  