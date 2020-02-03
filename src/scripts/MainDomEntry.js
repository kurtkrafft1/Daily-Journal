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
        <fieldset class="dataSet">
            <label for="password">Password: </label>
            <input type="password" name="password" id="pWord"
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                title="Please inclued at least 1 uppercase character, 1 lowercase character and 1 number. The password is 'KurtRules1'"
                minlength="6" required>
        </fieldset>

    </div>
    <div class="bodyTwo">
        <div class="transition">
            <div class="buttons">
            <button type="button" class="btn-log">Log!! </button>
            <button type="button" class="btn-view">View my Entries</button>
        </div>
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