
const newHtml = {
 generateHTML: (journal) =>{
    let html = `<div class="newEntries entry-${journal.id}"><div class='newEntry'>
    <h3>${journal.topic}</h3>
    <h5 class="entryItem">Date: ${journal.date}</h5>
    <h5 class="entryItem">Mood: ${journal.mood.mood}</h5>
    <h5 class="entryItem">Entry: ${journal.textarea}</h5></div>
    <div class="mod-btns"><button type="button" class="btn-${journal.id}">Delete</button><button type="button" class="edit-btn-${journal.id}">Edit</button></div></div>`
    return html;
},
generateFormHtml: (journal) => {
    if (journal.mood === 'happy'){
        return `
        <fieldset class="dataSet">
            <label for="journalDate">Date of Entry: </label>
            <input type="date" name="journalDate" id="journalDate-${journal.id}" value="${journal.date}" required>
        </fieldset>
        <fieldset class="dataSet">
            <label for="text">Concepts Covered:</label>
            <input type="text" class="topic-${journal.id}" name="covered" minlength="2" maxlength="25" value="${journal.topic}" required>
        </fieldset>
        <fieldset class="dataSet">
            <textarea name="journalEntry" id="journalText-${journal.id}" cols="30" rows="3"
                 minlength="10" maxlength="150">${journal.textarea} </textarea>
        </fieldset>
        <fieldset class="dataSet">
            <label for="moodOptions">Mood for the day </label>
            <select name="moodOptions" id="moodOptions-${journal.id}" required>
                <option value="pleaseSelect" disabled selected value>--Please select an option--</option>
                <option value="1" selected="selected">Happy</option>
                <option value="2">Sad</option>
                <option value="3">excited</option>
                <option value="4">Frazzled</option>
                <option value="5">Anxious</option>
                <option value="6">It's Dancin' Time!!</option>
            </select>
            <button type="button" id="update-btn-${journal.id}">submit</button>
        </fieldset>
        `
    }
    else if(journal.mood === 'anxious'){
        return `
        <fieldset class="dataSet">
            <label for="journalDate">Date of Entry: </label>
            <input type="date" name="journalDate" id="journalDate-${journal.id}" value="${journal.date}" required>
        </fieldset>
        <fieldset class="dataSet">
            <label for="text">Concepts Covered:</label>
            <input type="text" class="topic-${journal.id}" name="covered" minlength="2" maxlength="25" value="${journal.topic}" required>
        </fieldset>
        <fieldset class="dataSet">
            <textarea name="journalEntry" id="journalText-${journal.id}" cols="30" rows="3"
                 minlength="10" maxlength="150">${journal.textarea} </textarea>
        </fieldset>
        <fieldset class="dataSet">
            <label for="moodOptions">Mood for the day </label>
            <select name="moodOptions" id="moodOptions-${journal.id}" required>
                <option value="pleaseSelect" disabled selected value>--Please select an option--</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="excited">excited</option>
                <option value="frazzled">Frazzled</option>
                <option value="anxious"  selected="selected">Anxious</option>
                <option value="Its dancin' time!!">It's Dancin' Time!!</option>
            </select>
            <button type="button" id="update-btn-${journal.id}">submit</button>
        </fieldset>
        `
    }
    else if(journal.mood === `Its dancin' time!!`){
        return `
        <fieldset class="dataSet">
            <label for="journalDate">Date of Entry: </label>
            <input type="date" name="journalDate" id="journalDate-${journal.id}" value="${journal.date}" required>
        </fieldset>
        <fieldset class="dataSet">
            <label for="text">Concepts Covered:</label>
            <input type="text" class="topic-${journal.id}" name="covered" minlength="2" maxlength="25" value="${journal.topic}" required>
        </fieldset>
        <fieldset class="dataSet">
            <textarea name="journalEntry" id="journalText-${journal.id}" cols="30" rows="3"
                 minlength="10" maxlength="150">${journal.textarea} </textarea>
        </fieldset>
        <fieldset class="dataSet">
            <label for="moodOptions">Mood for the day </label>
            <select name="moodOptions" id="moodOptions-${journal.id}" required>
                <option value="pleaseSelect" disabled selected value>--Please select an option--</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="excited">excited</option>
                <option value="frazzled">Frazzled</option>
                <option value="anxious">Anxious</option>
                <option value="Its dancin' time!!"  selected="selected">It's Dancin' Time!!</option>
            </select>
            <button type="button" id="update-btn-${journal.id}">submit</button>
        </fieldset>
        `
    }
    else if(journal.mood === 'sad'){
        return `
        <fieldset class="dataSet">
            <label for="journalDate">Date of Entry: </label>
            <input type="date" name="journalDate" id="journalDate-${journal.id}" value="${journal.date}" required>
        </fieldset>
        <fieldset class="dataSet">
            <label for="text">Concepts Covered:</label>
            <input type="text" class="topic-${journal.id}" name="covered" minlength="2" maxlength="25" value="${journal.topic}" required>
        </fieldset>
        <fieldset class="dataSet">
            <textarea name="journalEntry" id="journalText-${journal.id}" cols="30" rows="3"
                 minlength="10" maxlength="150">${journal.textarea} </textarea>
        </fieldset>
        <fieldset class="dataSet">
            <label for="moodOptions">Mood for the day </label>
            <select name="moodOptions" id="moodOptions-${journal.id}" required>
                <option value="pleaseSelect" disabled selected value>--Please select an option--</option>
                <option value="happy">Happy</option>
                <option value="sad"  selected="selected">Sad</option>
                <option value="excited">excited</option>
                <option value="frazzled">Frazzled</option>
                <option value="anxious">Anxious</option>
                <option value="Its dancin' time!!">It's Dancin' Time!!</option>
            </select>
            <button type="button" id="update-btn-${journal.id}">submit</button>
        </fieldset>
        `
    }
    else if(journal.mood === `frazzled`){
        return `
        <fieldset class="dataSet">
            <label for="journalDate">Date of Entry: </label>
            <input type="date" name="journalDate" id="journalDate-${journal.id}" value="${journal.date}" required>
        </fieldset>
        <fieldset class="dataSet">
            <label for="text">Concepts Covered:</label>
            <input type="text" class="topic-${journal.id}" name="covered" minlength="2" maxlength="25" value="${journal.topic}" required>
        </fieldset>
        <fieldset class="dataSet">
            <textarea name="journalEntry" id="journalText-${journal.id}" cols="30" rows="3"
                 minlength="10" maxlength="150">${journal.textarea} </textarea>
        </fieldset>
        <fieldset class="dataSet">
            <label for="moodOptions">Mood for the day </label>
            <select name="moodOptions" id="moodOptions-${journal.id}" required>
                <option value="pleaseSelect" disabled selected value>--Please select an option--</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="excited">excited</option>
                <option value="frazzled"  selected="selected">Frazzled</option>
                <option value="anxious">Anxious</option>
                <option value="Its dancin' time!!">It's Dancin' Time!!</option>
            </select>
            <button type="button" id="update-btn-${journal.id}">submit</button>
        </fieldset>
        `
    }
    else if(journal.mood === `excited`){
        return `
        <fieldset class="dataSet">
            <label for="journalDate">Date of Entry: </label>
            <input type="date" name="journalDate" id="journalDate-${journal.id}" value="${journal.date}" required>
        </fieldset>
        <fieldset class="dataSet">
            <label for="text">Concepts Covered:</label>
            <input type="text" class="topic-${journal.id}" name="covered" minlength="2" maxlength="25" value="${journal.topic}" required>
        </fieldset>
        <fieldset class="dataSet">
            <textarea name="journalEntry" id="journalText-${journal.id}" cols="30" rows="3"
                 minlength="10" maxlength="150">${journal.textarea} </textarea>
        </fieldset>
        <fieldset class="dataSet">
            <label for="moodOptions">Mood for the day </label>
            <select name="moodOptions" id="moodOptions-${journal.id}" required>
                <option value="pleaseSelect" disabled selected value>--Please select an option--</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="excited" selected="selected">excited</option>
                <option value="frazzled">Frazzled</option>
                <option value="anxious">Anxious</option>
                <option value="Its dancin' time!!">It's Dancin' Time!!</option>
            </select>
            <button type="button" id="update-btn-${journal.id}">submit</button>
        </fieldset>
        `
    }
},
generateMoodFilterHtml(mood) {
    return `
    <input type='radio' name='radio' id='filter-${mood}' value=${mood}>
    <label for='radio'>${mood}</label>
    `
}
}



export default newHtml;