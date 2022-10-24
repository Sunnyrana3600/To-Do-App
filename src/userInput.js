
export function userInput(){
    let task={
        //Gets the value and time when the user enters task
        time:Date.now(),
        taskName:document.getElementById('tasks-input').value
    }
    return task;
}