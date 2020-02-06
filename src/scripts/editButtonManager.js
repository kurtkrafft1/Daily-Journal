import API from './data.js';
import DOMentries from './DOMentries.js';
import EventListenerManager from './EventListenerManager.js';

const editButtonManager = {
    startingEditButton: (id) => {
        API.getOneEntry(id).then(obj=> DOMentries.editFormUpdateDom(obj))
            .then(obj => EventListenerManager.addLogButtonListener())
    }
}
export default editButtonManager;