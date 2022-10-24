import { tasks } from "./addButton";
import{addTask} from "./addTask"
export function retrieveInfo(){
    //For each task that is in local storage print a task display out when to page is loaded
    let taskData=JSON.parse(localStorage.getItem('tasks'));
    if(taskData != null && taskData.length>= 0){
        for(let i=0;i<taskData.length;i++){
            addTask(taskData[i]);
        }
    }
    
    
    
}