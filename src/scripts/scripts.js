import API from './data.js';
import DOMentries from './DOMentries.js';
import EventListenerManager from './EventListenerManager.js';

console.log('Pro-Tip; my api is on the localhost:3000/entries and only works on the Logs Page :/');
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/


API.getJournalEntries().then(DOMentries.insertEntry);
EventListenerManager.AddBodyTwoListener();