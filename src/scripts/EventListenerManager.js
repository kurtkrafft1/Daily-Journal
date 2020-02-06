import API from './data.js';
import DOMentries from './DOMentries.js';
import editButtonManager from './editButtonManager.js';

const EventListenerManager = {
    addLogButtonListener() {
        const hiddenInput = document.getElementById('hiddenId');
        const logButton = document.querySelector('.btn-log')
       
        logButton.addEventListener('click', () => {
            if (hiddenInput.value!== ""){
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
                
                API.updateOneEntry(hiddenInput.value, newEntry).then(DOMentries.clearForm);
            } else {
            API.postNewJournal(DOMentries.storeEntry())
            .then(() =>
                API.snagJournalEntries().then(((arr) =>{
                    const newArr = arr.reverse()
                     DOMentries.insertEntry(newArr)}))
            )}
        });
    },
    addViewButtonListener() {
        const viewButton = document.querySelector('#view-btn');
        viewButton.addEventListener('click', () => {
           API.snagJournalEntries().then(arr=> {
            const newArr = arr.reverse()   
            DOMentries.insertEntry(newArr)})     
    })},

    AddBodyTwoListener() {
        const entrySection = document.querySelector('.entrySection');
        entrySection.addEventListener("click", (event) => {
            let btnID = event.target.classList[0].split("-");
                const apiId = btnID[1];

            if (btnID[0] === "btn") {
                API.deleteEntry(apiId)
                    .then(API.snagJournalEntries)
                    .then(arr=> {
                        const newArr = arr.reverse()
                        DOMentries.insertEntry(newArr)})
            }else if (btnID[0]==="edit"){
                editButtonManager.startingEditButton(btnID[2]);
            }
        })
    },
    addEventListenertoRadio () {
        const radioButtons = document.getElementById('radio-buttons');
        radioButtons.addEventListener("click", (event) => {
            if(event.target.type==="radio"){
            const mood = event.target.value;
            API.snagJournalEntries().then(arr => {
                DOMentries.insertEntry(arr.filter(obj=> obj.mood===mood))
            }) }
        } )
    }, 

   
}

export default EventListenerManager;