const newEntry = { 
insertEntry: (arr) => {
    arr.forEach(entry => {
        let itemEntry = newHtml.generateHTML(entry);
        const entrySection = document.querySelector('.entrySection');
        entrySection.innerHTML += itemEntry;
    })
}
};