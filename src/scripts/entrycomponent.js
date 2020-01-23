
const newHtml = {

 generateHTML: (journal) =>{
    let html = `<div class="newEntries"><div class='newEntry'>
    <h3>${journal.topic}</h3>
    <h5 class="entryItem">Date: ${journal.date}</h5>
    <h5 class="entryItem">Mood: ${journal.mood}</h5>
    <h5 class="entryItem">Entry: ${journal.textarea}</h5></div></div>`
    return html;
}
}