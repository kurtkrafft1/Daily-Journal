let newEntry = {
    "date" : Date.now(),
    "topic": 'Javascript',
    "textarea": 'Today we covered a wide array (pun intended) of basic javascript functionality. We learned arrays, objects and functions. Nothing to crazy, but the basic buiding blocks for sucess',
    "mood": 'frazzled'
}

let newEntryTwo = {
    "date" : Date.now(),
    "topic": 'CSS',
    "textarea": 'Today I learned styling! it was fanstastic and a lot of fun. flexbox changes the game and makes positioning easy!',
    "mood": 'anxious'
}

let newEntryThree = {
    "date" : Date.now(),
    "topic": 'HTML',
    "textarea": 'First day of class we learned setting up a basic HTML page, its awesome using the exclamation point to tab complete a skeleton.',
    "mood": 'Its dancin time'
}

const journalCollection = [];

journalCollection.push(newEntry);
journalCollection.push(newEntryTwo);
journalCollection.push(newEntryThree);