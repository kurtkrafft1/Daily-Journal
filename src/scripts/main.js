import API from './data.js';
import DOMentries from './DOMentries.js';


const logButton = document.querySelector('.btn-log');
logButton.addEventListener('click', () => {
    API.postNewJournal(DOMentries.storeEntry());
});


