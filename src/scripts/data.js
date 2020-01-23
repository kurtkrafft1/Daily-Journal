const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
            .then(entriesData =>{
                return entriesData;
                // console.log(entriesData);
                // entriesData.forEach(item => {
                //     // console.log(item)
                //     insertEntry(item);
                // });
    })
}};