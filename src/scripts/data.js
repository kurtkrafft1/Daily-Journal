import DOMentries from "./DOMentries.js";

const URL = "http://localhost:3000";
const API = {
    //Method to add new journal entry
    postNewJournal(journalEntry) {
         return fetch(`${URL}/entries`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(journalEntry),
        })
    },
    //method to delete Journal Entry from the API
    deleteEntry(id) {
        return fetch(`${URL}/entries/${id}`, {
            method: "DELETE"
        }).then(r => r.json())
    },
    snagJournalEntries: () => {
        return fetch(`${URL}/entries?_expand=mood&_expand=teacher`).then(r => r.json());
    },
    getOneEntry: (id) => {
        return fetch(`${URL}/entries/${id}`)
            .then(r=>r.json())
            
    },
    updateOneEntry: (id, obj) => {
        return fetch(`${URL}/entries/${id}`, {
            method: "PUT",
            headers:{
                "content-type": "application/json",
            },
            body:JSON.stringify(obj)
        }).then(API.snagJournalEntries).then(arr => 
            {const newArr = arr.reverse()
            DOMentries.insertEntry(newArr)})
            
    },
    getMoods:() => {
      return fetch(`${URL}/moods`)
      .then(r=>r.json())

    }
   
};

export default API;
