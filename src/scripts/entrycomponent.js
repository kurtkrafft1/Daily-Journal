
const newHtml = {
 generateHTML: (journal) =>{
    let html = `<div class="newEntries entry-${journal.id}"><div class='newEntry'>
    <h3>${journal.topic}</h3>
    <h5 class="entryItem">Date: ${journal.date}</h5>
    <h5 class="entryItem">Mood: ${journal.mood}</h5>
    <h5 class="entryItem">Entry: ${journal.textarea}</h5></div>
    <div class="mod-btns"><button type="button" class="btn-${journal.id}">Delete</button><button type="button" class="edit-btn">Edit</button></div></div>`
    return html;
}
}

export default newHtml;