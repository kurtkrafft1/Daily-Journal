import newHtml from "./entrycomponent.js";
import formValidation from "./testFormValidation.js";
import API from "./data.js";

const DOMentries = {
  insertEntry: arr => {
    const entrySection = document.querySelector(".entrySection");
    entrySection.innerHTML = "";
    arr.forEach(entry => {
      if (entry.date === undefined) {
        API.deleteEntry(entry.id);
      } else {
        let itemEntry = newHtml.generateHTML(entry);
        
        entrySection.innerHTML += itemEntry;
      }
    });
  },
  storeEntry: () => {
    const date = document.querySelector("#journalDate");
    const topic = document.querySelector(".topic");
    const textarea = document.querySelector("#journalText");
    const mood = document.querySelector("#moodOptions");
    const teach = document.querySelector('#teachOptions');

    let newEntry = {
      date: date.value,
      topic: `${topic.value} `,
      textarea: textarea.value,
      moodId: Number(mood.value),
      moodId: Number(mood.value),
      teacherId: Number(teach.value)
    };
    date.value = "";
    topic.value = "";
    textarea.value = "";
    mood.value = "";
    teach.value="";
    return formValidation.testFormValidity(newEntry);
  },
  editFormUpdateDom: journal => {

    const date = document.querySelector("#journalDate");
    const topic = document.querySelector(".topic");
    const textarea = document.querySelector("#journalText");
    const mood = document.querySelector("#moodOptions");
    const hiddenID = document.getElementById("hiddenId");
    const teach = document.querySelector('#teachOptions');

    teach.value=journal.teacherId;
    date.value = journal.date;
    topic.value = journal.topic;
    textarea.value = journal.textarea;
    hiddenID.value = journal.id;
    mood.value = journal.moodId;

    return journal;
  },
  storeUpdatedEntry: id => {
    const date = document.querySelector(`#journalDate-${id}`);
    const topic = document.querySelector(`.topic-${id}`);
    const textarea = document.querySelector(`#journalText-${id}`);
    const mood = document.querySelector(`#moodOptions-${id}`);
    const teach = document.querySelector('#teachOptions');

    let newEntry = {
      date: date.value,
      topic: `${topic.value} `,
      textarea: textarea.value,
      moodId: Number(mood.value),
      teacherId: Number(teach.value)
    };

    API.updateOneEntry(id, newEntry);
  },
  addMoodSelect: () => {
    API.getMoods().then(arr => {
      const moodSelect = document.getElementById("moodOptions");
      arr.forEach(mood => {
        const html = `<option value="${mood.id}">${mood.mood}</option>`;
        moodSelect.innerHTML += html;
      });
    });
  },
  clearForm: () => {
    const date = document.querySelector("#journalDate");
    const topic = document.querySelector(".topic");
    const textarea = document.querySelector("#journalText");
    const mood = document.querySelector("#moodOptions");
    const hiddenID = document.getElementById("hiddenId");
    const teach = document.querySelector('#teachOptions');
    date.value = "";
    topic.value = "";
    textarea.value = "";
    mood.value = "";
    hiddenID.value = "";
    teach.value="";
  },
  addMoodFilter() {
    // take array of entry objects and iterate through each
    API.snagJournalEntries().then(entryArray => {
      entryArray.forEach(entry => {
        const mood = entry.mood.mood;
        const moodSelect = document.getElementById(`filter-${mood}`);
        const filterButtonContainer = document.getElementById("radioButtons");
        if (moodSelect === null) {
          filterButtonContainer.innerHTML += newHtml.generateMoodFilterHtml(
            mood
          );
        }
      });
    });
  }
};

export default DOMentries;
