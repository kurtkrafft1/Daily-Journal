import DOMentries from "./DOMentries.js";

const URL = "http://localhost:3000/entries";
const API = {
    // getJournalEntries() {
    //     return fetch("http://localhost:3000/entries")
    //         .then(response => response.json())
    //         .then(entriesData => {
    //             return entriesData;
    //             // console.log(entriesData);
    //             // entriesData.forEach(item => {
    //             //     // console.log(item)
    //             //     insertEntry(item);
    //             // });
    //         })
    // },
    //Method to add new journal entry
    postNewJournal(journalEntry) {
         return fetch(URL, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(journalEntry),
        })
        // .then(resp => resp.json()).then(newData => {
        //     return newData;
        // });
    },
    //method to delete Journal Entry from the API
    deleteEntry(id) {
        return fetch(`${URL}/${id}`, {
            method: "DELETE"
        }).then(r => r.json())
    },
    snagJournalEntries: () => {
        return fetch(URL).then(r => r.json());
    }
    // ,
    // filterForMood: (mood) => {
    //     fetch(URL)
    //         .then(r=>r.json())
    //         .then(data=> {
    //            const arr = data.filter(obj=> obj.mood === mood);
    //         //    console.log(arr);
    //            DOMentries.insertEntry(arr);
    //         })
    // }
};

export default API;