
import EventListenerManager from "./EventListenerManager.js";
import mainDomEntry from './MainDomEntry.js';
import render2Dom from './render2Dom.js';



render2Dom.renderMain(mainDomEntry.createFirstDom());

EventListenerManager.AddBodyTwoListener();
EventListenerManager.addLogButtonListener();
EventListenerManager.addEventListenertoRadio();




