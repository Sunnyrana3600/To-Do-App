import { addTask } from "./addTask";
import { userInput } from "./userInput";
const addButton=document.querySelector('.task-add-button');
export let tasks= JSON.parse(localStorage.getItem('tasks'))||[];

export function addButtonFunction(){
    addButton.addEventListener('click',(event)=>{
        //Prevents the form from submitting 
        event.preventDefault();
        //Gets the tasks entered by the user
        let input=userInput();
        //if the task is empty return a message
        if(!input.taskName){
            alert('Please enter a task.');
            return;
        }
        else{
            //else add the task and add it to local storage
            addTask(input);
            tasks.push(input);
            localStorage.setItem('tasks',JSON.stringify(tasks));
        }
        // Clear the task form 
        document.getElementById("tasks-input").value = "";
    })
}