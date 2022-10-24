import { editButtonFunction } from "./editButton";
import { removeButtonFunction } from "./removeButtonFunction";
import { convertDate } from "./convertDate";

export function addTask(input){
    //The area where the tasks will be displayed
    const taskArea=document.querySelector('.tasks-output');

    //Displaying the task header
    const taskHeader=document.querySelector('.task-title');
    if(taskHeader.style.visibility='hidden'){
        taskHeader.style.visibility='visible';
    }
    
    //Creating the body of the task
    let taskBody=document.createElement('div');
    taskBody.classList.add('tasks');

    //Adding the date to the post
    let date=document.createElement('div');
    date.classList.add('date');
    date.textContent=convertDate(input.time);

    //Creating the task inputed by the user
    let task=document.createElement('input');
    task.classList.add('tasks-value');
    task.value=input.taskName;
    task.readOnly=true;
    

    //Creating an edit button used to change a task
    let editButton=document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.textContent='Edit';
    editButton.addEventListener('click',(e)=>{
        e.preventDefault();
        editButtonFunction(task,editButton,input.time);
    })

    //Creating a remove button used to remove a task
    let removeButton=document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.textContent='Remove';
    removeButton.addEventListener('click',(e)=>{
        e.preventDefault();
        removeButtonFunction(taskBody,input.time);
    })

    //Appending everything to the body
    taskBody.appendChild(date);
    taskBody.appendChild(task);
    taskBody.appendChild(editButton);
    taskBody.appendChild(removeButton);
    taskArea.appendChild(taskBody);
}