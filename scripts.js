// let newEntry = {
//     "date" : Date.now(),
//     "topic": 'Javascript',
//     "textarea": 'Today we covered a wide array (pun intended) of basic javascript functionality. We learned arrays, objects and functions. Nothing to crazy, but the basic buiding blocks for sucess',
//     "mood": 'frazzled'
// }

// let newEntryTwo = {
//     "date" : Date.now(),
//     "topic": 'CSS',
//     "textarea": 'Today I learned styling! it was fanstastic and a lot of fun. flexbox changes the game and makes positioning easy!',
//     "mood": 'anxious'
// }

// let newEntryThree = {
//     "date" : Date.now(),
//     "topic": 'HTML',
//     "textarea": 'First day of class we learned setting up a basic HTML page, its awesome using the exclamation point to tab complete a skeleton.',
//     "mood": 'Its dancin time'
// }

// const journalCollection = [];

// journalCollection.push(newEntry);
// journalCollection.push(newEntryTwo);
// journalCollection.push(newEntryThree);

// const generateHTML = (journal) =>{
//     let html = `<div class="newEntries"><div class='newEntry'>
//     <h3>${journal.topic}</h3>
//     <h5 class="entryItem">Date: ${journal.date}</h5>
//     <h5 class="entryItem">Mood: ${journal.mood}</h5>
//     <h5 class="entryItem">Entry: ${journal.textarea}</h5></div></div>`
//     return html;
// }

// const logEntry = () =>{
//     for (let i=0; i<journalCollection.length;i++){
//         const entrySection = document.querySelector('.entrySection');
//         entrySection.innerHTML+= generateHTML(journalCollection[i]);
//     }
// }

// logEntry();

console.log('Prop-Tip; my api is on the localhost:8088 and only works on the Logs Page :/');
const generateHTML = (journal) =>{
    let html = `<div class="newEntries"><div class='newEntry'>
    <h3>${journal.topic}</h3>
    <h5 class="entryItem">Date: ${journal.date}</h5>
    <h5 class="entryItem">Mood: ${journal.mood}</h5>
    <h5 class="entryItem">Entry: ${journal.textarea}</h5></div></div>`
    return html;
}





const entriesURL = "http://localhost:8088/entries";

fetch(entriesURL)
    .then(resp=>resp.json())
    .then(entriesData =>{
        // console.log(entriesData);
        entriesData.forEach(item=> {
            let itemEntry = generateHTML(item);
            const entrySection = document.querySelector('.entrySection');
            entrySection.innerHTML += itemEntry;
        });
    })