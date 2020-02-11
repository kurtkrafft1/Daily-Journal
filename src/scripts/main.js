
import EventListenerManager from "./EventListenerManager.js";
import mainDomEntry from './MainDomEntry.js';
import render2Dom from './render2Dom.js';
import DOMentries from "./DOMentries.js";



render2Dom.renderMain(mainDomEntry.createFirstDom());
DOMentries.addMoodSelect();
DOMentries.addMoodFilter();


EventListenerManager.AddBodyTwoListener();
EventListenerManager.addLogButtonListener();
EventListenerManager.addViewButtonListener();
EventListenerManager.addEventListenertoRadio();
EventListenerManager.addSearchListener();




