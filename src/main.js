const krafftWord = 'KurtRules1'


// const checkPassword = () => {
//     var pWord = document.getElementById("pWord").value
//     // console.log(pWord)
//     if (pWord == krafftWord){
//         alert ("hey you got it buddy!");
        
//     } else {
//         alert("Sorry, try again mane")
//         window.location.reload();
//     }
// }
const joiningKrew = () => {
    alert ("Thanks for trying, unfortunately, this function isn't working yet :(")
}

const entryArray = [];
const storeEntry = () => {
    let newEntry = {
        "date" : document.querySelector('#journalDate').value,
        "topic": document.querySelector('.topic').value,
        "textarea": document.querySelector('#journalText').value,
        "mood": document.querySelector('#moodOptions').value,
    }
    entryArray.unshift(newEntry);
}
const logEntry =() =>{
   
    for (let i=0; i<1;i++){
    const html = `<div class="newEntries"><div class='newEntry'>
    <h3>${entryArray[i].topic}</h3>
    <h5 class="entryItem">Date: ${entryArray[i].date}</h5>
    <h5 class="entryItem">Mood: ${entryArray[i].mood}</h5>
    <h5 class="entryItem">Entry: ${entryArray[i].textarea}</h5></div></div>`
    const entrySection = document.querySelector('.entrySection');
    // entrySection.innerHTML = html; 
    entrySection.insertAdjacentHTML('afterbegin', html);


}
}