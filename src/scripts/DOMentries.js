import newHtml from './entrycomponent.js';

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
        const date = document.querySelector('#journalDate');
        const topic = document.querySelector('.topic');
        const textarea = document.querySelector('#journalText');
        const mood = document.querySelector('#moodOptions');

        let newEntry = {
            "date" : date.value,
            "topic": topic.value,
            "textarea": textarea.value,
            "mood": mood.value,
        }
        date.value = "";
        topic.value = "";
        textarea.value = "";
        mood.value = "";

        return newEntry;
    }
}

export default DOMentries;