import API from './data.js';
import DOMentries from './DOMentries.js';
import editButtonManager from './editButtonManager.js';

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
                // console.log("edit button") 
                editButtonManager.startingEditButton(btnID[2]);
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
    }, 
    addUpdateEventListener(id, obj) {
        const updateButton = document.getElementById(`update-btn-${id}`);
        updateButton.addEventListener('click',() => {DOMentries.storeUpdatedEntry(id, obj)})
    }
   
}

export default EventListenerManager;