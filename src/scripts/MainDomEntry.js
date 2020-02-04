const mainDomEntry = {
    createFirstDom: () => {
        return `<div class="formBG">
        <fieldset class="dataSet">
            <label for="journalDate">Date of Entry: </label>
            <input type="date" name="journalDate" id="journalDate" required>
        </fieldset>
        <fieldset class="dataSet">
            <label for="text">Concepts Covered:</label>
            <input type="text" class="topic" name="covered" minlength="2" maxlength="25" required>
        </fieldset>
        <fieldset class="dataSet">
            <textarea name="journalEntry" id="journalText" cols="30" rows="3"
                placeholder="Please enter your entry here" minlength="10" maxlength="150"></textarea>
        </fieldset>
        <fieldset class="dataSet">
            <label for="moodOptions">Mood for the day </label>
            <select name="moodOptions" id="moodOptions" required>
                <option value="pleaseSelect" disabled selected value>--Please select an option--</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="excited">excited</option>
                <option value="frazzled">Frazzled</option>
                <option value="anxious">Anxious</option>
                <option value="Its dancin' time!!">It's Dancn' Time!!</option>
            </select>
        </fieldset>

    </div>
    <div class="bodyTwo">
        <div class="transition">
            <div class="buttons">
            <button type="button" id="log-btn" class="btn-log">Log!! </button>
        </div>
        </div>
        <div id="radio-buttons">
        <fieldset class="dataSet ">
        <legend>Filter Entries by Mood</legend>
        <input type="radio" name="anxious" value="anxious">
        <label for"anxious">Anxious</label>
        <input type="radio" name="sad" value="sad">
        <label for"sad">Sad</label>
        <input type="radio" name="excited" value="excited">
        <label for"excited">Excited</label>
        <input type="radio" name="happy" value="happy">
        <label for"happy">Happy</label>
        <input type="radio" name="frazzled" value="frazzled">
        <label for"frazzled">Frazzled</label>
        <input type="radio" name="dancin" value="Its dancin' time!!">
        <label for"dancin">It's Dancin' Time!</label>
      </fieldset>
      </div>
      <div id="view-Btn">
        <button type="button" id="view-btn">View Logs</button>
      </div>
        <div class="entrySection">

        </div>
        <div class="qoutebox">
            <div class="iQoute">
                <p class="qoute">
                    A purpose of human life, no matter who is controlling it, is to love whoever is around to be
                    loved.
                </p>
                <br>
                <p><strong>-Kurt Vonnegut <em>Sirens of Titan</em></strong></p>
            </div>
        </div>
        `
    }
}

export default mainDomEntry;