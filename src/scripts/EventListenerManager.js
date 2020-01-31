const EventListenerManager = {
   AddBodyTwoListener () {
    const entrySection = document.querySelector('.entrySection');
    entrySection.addEventListener("click", (event)=> {
        console.log(event);
        if (event.srcElement.localName ==="button"){
            let btnID = event.target.classList[0].split("-");
            const  apiId=btnID[1];
            // const userPrompt = prompt("Are you sure you want to delete this post? (y/n)")
            // userPrompt ==='y' ? API.deleteEntry(apiId) : alert('okay!')
            API.deleteEntry(apiId)
                .then(API.snagJournalEntries)
                .then(DOMentries.insertEntry)
        }
    })
   }
}   