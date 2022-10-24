import { tasks } from "./addButton";
export function editButtonFunction(task,editButton,date){
    if(event.target.textContent=='Edit'){
        //makes the task entered editable
        task.readOnly=false;
        //puts the cusor on the task that was entered
        task.focus();
        //change the edit button text to save
        editButton.textContent='Save'  
    }
    else if(event.target.textContent=='Save'){
        //makes the task non-editable
        task.readOnly=true;
        //finds the index where the time matches
        let index=tasks.findIndex( value => value.time == date);
        //changes the value at the given index
        tasks[index].taskName=task.value;
        //updates local storage
        localStorage.setItem('tasks',JSON.stringify(tasks));
        //changes the text back to edit
        editButton.textContent='Edit' 
    }


}