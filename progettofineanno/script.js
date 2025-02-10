const barra = document.getElementById('barraR')
const lista = document.getElementById('lista')
const ricercheSalvate = JSON.parse(localStorage.getItem('ricerche')) || []

// Caricamento iniziale delle ricerche salvate
function caricamentoricerche() {
  for (let i = 0; i < ricercheSalvate.length; i++) {
    aggiungi(ricercheSalvate[i])
  }
}

// Funzione per gestire la ricerca
function gestioneR() {
  const valoreClasse = barra.value 
  if (valoreClasse !== "") {
    ricercheSalvate.push(valoreClasse);
    localStorage.setItem('ricerche', JSON.stringify(ricercheSalvate))
    aggiungi(valoreClasse)
    barra.value = ""
  }
}

// Funzione per aggiungere un bottone alla lista visibile
function aggiungi(valoreClasse) {
  const cerca = document.createElement('button') 
  cerca.textContent = valoreClasse
  cerca.className = 'bottone' // Aggiunge una classe 
  cerca.onclick=() => alert("Hai cliccato: " + valoreClasse) 
  lista.appendChild(cerca) 
}

caricamentoricerche()

