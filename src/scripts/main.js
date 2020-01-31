


const logButton = document.querySelector('.btn-log');
logButton.addEventListener('click', () =>{
    API.postNewJournal(DOMentries.storeEntry());
});

const formButton = document.querySelector('.btn-form');
formButton.addEventListener("click", DOMentries.storeEntry);

