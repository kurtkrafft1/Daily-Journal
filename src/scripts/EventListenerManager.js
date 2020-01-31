import API from './data.js';
import DOMentries from './DOMentries.js';

const EventListenerManager = {
    AddBodyTwoListener() {
        const entrySection = document.querySelector('.entrySection');
        entrySection.addEventListener("click", (event) => {
            if (event.srcElement.localName === "button") {
                let btnID = event.target.classList[0].split("-");
                const apiId = btnID[1];
                API.deleteEntry(apiId)
                    .then(API.snagJournalEntries)
                    .then(DOMentries.insertEntry)
            }
        })
    }
}

export default EventListenerManager;