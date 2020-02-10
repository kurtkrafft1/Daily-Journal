import newHtml from './entrycomponent.js';
import formValidation from './testFormValidation.js';
import API from './data.js';

const DOMentries = {
    insertEntry: (arr) => {
        const entrySection = document.querySelector('.entrySection');
        entrySection.innerHTML = "";
        arr.forEach(entry => {
            if (entry.date === undefined) {
                API.deleteEntry(entry.id);
            } else {
                let itemEntry = newHtml.generateHTML(entry);
                entrySection.innerHTML += itemEntry;
            }
        })
    }
    ,
    storeEntry: () => {
        const date = document.querySelector('#journalDate');
        const topic = document.querySelector('.topic');
        const textarea = document.querySelector('#journalText');
        const mood = document.querySelector('#moodOptions');
        

        let newEntry = {
            "date": date.value,
            "topic": `${topic.value} `,
            "textarea": textarea.value,
            "mood": mood.value,
        }
        date.value = "";
        topic.value = "";
        textarea.value = "";
        mood.value = "";
        return formValidation.testFormValidity(newEntry);
    },
    editFormUpdateDom: (journal) => {
        const date = document.querySelector('#journalDate');
        const topic = document.querySelector('.topic');
        const textarea = document.querySelector('#journalText');
        const mood = document.querySelector('#moodOptions');
        const hiddenID = document.getElementById('hiddenId')

        date.value = journal.date;
        topic.value = journal.topic;
        textarea.value = journal.textarea;
        hiddenID.value=journal.id;
        mood.value = journal.mood;
        
        
        
        return journal;
    }, storeUpdatedEntry: (id) => {
        const date = document.querySelector(`#journalDate-${id}`);
        const topic = document.querySelector(`.topic-${id}`);
        const textarea = document.querySelector(`#journalText-${id}`);
        const mood = document.querySelector(`#moodOptions-${id}`);
       
        let newEntry = {
            "date": date.value,
            "topic": `${topic.value} `,
            "textarea": textarea.value,
            "mood": mood.value,
        }

        API.updateOneEntry(id, newEntry);

    },
    clearForm: () => {
        const date = document.querySelector('#journalDate');
        const topic = document.querySelector('.topic');
        const textarea = document.querySelector('#journalText');
        const mood = document.querySelector('#moodOptions');
        const hiddenID = document.getElementById('hiddenId')
        date.value = "";
        topic.value = "";
        textarea.value = "";
        mood.value = "";
        hiddenID.value = "";

      
    }
}

export default DOMentries;