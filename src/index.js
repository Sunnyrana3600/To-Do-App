import { addButtonFunction } from "./addButton";
import{convertDate} from "./convertDate";
import{retrieveInfo} from "./retrieveInfo";
import{userName} from "./userName"
window.onload = (event) => {
    // gets the name from the user
    userName();
    //gets info from local storage
    retrieveInfo();
    //gets the location where the current date will be displayed
    let currentDate=document.querySelector('.current-date');
    //show the current date
    currentDate.innerHTML=convertDate(Date.now());
    // give the add button function
    addButtonFunction();
};

