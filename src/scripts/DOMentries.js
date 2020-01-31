const DOMentries = {
    insertEntry: (arr) => {
        const entrySection = document.querySelector('.entrySection');
        entrySection.innerHTML = "";
        arr.forEach(entry => {
            let itemEntry = newHtml.generateHTML(entry);
            entrySection.innerHTML += itemEntry;
            })
        }
    ,
    storeEntry: () => {
        let newEntry = {
            "date" : document.querySelector('#journalDate').value,
            "topic": document.querySelector('.topic').value,
            "textarea": document.querySelector('#journalText').value,
            "mood": document.querySelector('#moodOptions').value,
        }
        return newEntry;
    }
}

