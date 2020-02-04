import API from './data.js';
import DOMentries from './DOMentries.js';
import EventListenerManager from './EventListenerManager.js';

const editButtonManager = {
    startingEditButton: (id) => {
        const divElement = document.querySelector(`.entry-${id}`)
        API.getOneEntry(id).then(obj=> DOMentries.editFormUpdateDom(divElement, obj))
            .then(obj => EventListenerManager.addUpdateEventListener(id, obj))
    }
}
export default editButtonManager;