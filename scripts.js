document.getElementById('searchInput').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let terms = document.querySelectorAll('#termList li');

    terms.forEach(term => {
        let text = term.textContent.toLowerCase();
        if (text.includes(filter)) {
            term.style.display = '';
        } else {
            term.style.display = 'none';
        }
    });
});
