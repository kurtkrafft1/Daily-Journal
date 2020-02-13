const mainDomEntry = {
    createFirstDom: () => {
        return `<div class="formBG">
        <fieldset class="dataSet">
        <input type="hidden" id='hiddenId' value="">
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
                
            </select>
        </fieldset>
        <fieldset class="dataSet">
            <label for="teachOptions">Please Select A Teacher</label>
            <select name="teachOptions" id="teachOptions" required>
                <option value="pleaseSelect" disabled selected value>--Please select an option--</option>
                <option value="1">Andy</option>
                <option value="2">Kristen</option>
                <option value="3">Byran</option>
                
            </select>
        </fieldset>

    </div>
    <div class="bodyTwo">
        <div class="transition">
            <div class="buttons">
            <button type="button" id="log-btn" class="btn-log">Log!! </button>
            </div>
        <div class="searches">
        <fieldset id="radioButtons">
            <legend>Filter by Mood</legend>
        </fieldset>
      <fieldset class="search">
        <legend>Search Entries</legend>
        <input type="text" placeholder="search entries here" id="search">
       
        <p class="light-txt"><strong>Search Terms Like...</strong></p>
        <p class="light-txt">'Javascript'</p>
        <p class="light-txt">or</p>
        
        <p class="light-txt">'Html'</p>
        <p class="light-txt">or</p>
        <p class="light-txt">'The'</p>
        
       
      </fieldset>
      </div>
      <div id="view-Btn">
      <button type="button" id="view-btn">View Logs</button>
    </div>
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