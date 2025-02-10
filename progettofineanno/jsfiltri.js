// scripts.js
function search() {
    const category = document.getElementById('category').value;
    const keyword = document.getElementById('keyword').value.toLowerCase();
    const resultsDiv = document.getElementById('results');

    // chiamata al db + query
    const items = [
        { id: 1, category: 'categoria1', name: 'Oggetto 1' },
        { id: 2, category: 'categoria2', name: 'Oggetto 2' },
        { id: 3, category: 'categoria3', name: 'Oggetto 3' },
        { id: 4, category: 'categoria1', name: 'Oggetto 4' },
        { id: 5, category: 'categoria2', name: 'Oggetto 5' },
    ];

    const filteredItems = items.filter(item => 
        (category === 'all' || item.category === category) &&
        item.name.toLowerCase().includes(keyword)
    );

    resultsDiv.innerHTML = '';
    if (filteredItems.length === 0) {
        resultsDiv.innerHTML = 'Nessun risultato trovato.';
    } else {
        const ul = document.createElement('ul');
        filteredItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} (${item.category})`;
            ul.appendChild(li);
        });
        resultsDiv.appendChild(ul);
    }
}

