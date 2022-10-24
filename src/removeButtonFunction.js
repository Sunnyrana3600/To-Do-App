import { tasks } from "./addButton";
export function removeButtonFunction(taskBody,date){
   //gets the task area
   let taskArea=document.querySelector('.tasks-output');
   //gets the task header
   const taskHeader=document.querySelector('.task-title');
   //finds the index where the time matches
   let index=tasks.findIndex( value => value.time == date);
   //Removes the task get given index
   tasks.splice(index,1);
   //changes the local storage
   localStorage.setItem('tasks',JSON.stringify(tasks));
   //Removes the task on screen
   taskBody.remove(); 
   //if the task header is only thing left change it to hidden
   if(taskArea.childNodes.length===3){
      taskHeader.style.visibility='hidden'
   }

   

}