import API from './data.js';
import DOMentries from './DOMentries.js';

const EventListenerManager = {
    addLogButtonListener() {
        const logButton = document.querySelector('.btn-log');
        logButton.addEventListener('click', () => {
            API.postNewJournal(DOMentries.storeEntry())
            .then(() =>
                API.snagJournalEntries().then(((arr) =>{
                    const newArr = arr.reverse()
                     DOMentries.insertEntry(newArr)}))
            )
        });
    },

    AddBodyTwoListener() {
        const entrySection = document.querySelector('.entrySection');
        entrySection.addEventListener("click", (event) => {
            let btnID = event.target.classList[0].split("-");
                const apiId = btnID[1];

            if (btnID[0] === "btn") {
                API.deleteEntry(apiId)
                    .then(API.snagJournalEntries)
                    .then(DOMentries.insertEntry)
            }else if (btnID[0]==="edit"){
                console.log("edit button")
            }
        })
    },
    addEventListenertoRadio () {
        const radioButtons = document.getElementById('radio-buttons');
        radioButtons.addEventListener("click", (event) => {
            if(event.target.type==="radio"){
            const mood = event.target.value;
            // API.filterForMood(mood);
            API.snagJournalEntries().then(arr => {
                DOMentries.insertEntry(arr.filter(obj=> obj.mood===mood))
                // arr.filter(obj=> obj.mood===mood).then(()=> DOMentries.insertEntry(arr));
            }) }
        } )
    }
   
}

export default EventListenerManager;