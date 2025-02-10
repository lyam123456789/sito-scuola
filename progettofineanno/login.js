document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Raccogli i valori di input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Per ora, semplicemente stampa i valori nella console (in un'app reale, autenticazione avverrà qui)
    console.log('Username:', username);
    console.log('Password:', password);
    
    if (username && password) {
        // Redirige l'utente a un'altra pagina dopo il login
        window.location.href = 'NormalUser.html'; 
    } else {
        alert('Credenziali non valide');
    }
});
