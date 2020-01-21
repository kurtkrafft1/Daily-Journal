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

const mailingList = []
const joiningKrew = () => {
    let userEmail = document.querySelector('.userEmail').value;
    mailingList.unshift(userEmail);
    console.log(userEmail);
    alert (`Thanks for subscribing ${mailingList[0]}`);

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
    entrySection.insertAdjacentHTML('afterbegin', html);
}
}
// const logButton = document.querySelector('.btn-log')
// logButton.addEventListener('click', function () {
//     alert('Hello!')
// });

const logButton = document.querySelector('.btn-log');
logButton.addEventListener('click',  logEntry);

const formButton = document.querySelector('.btn-form');
formButton.addEventListener("click", storeEntry);

const emailButton = document.querySelector('.emailBtn');
emailButton.addEventListener('click', joiningKrew);
