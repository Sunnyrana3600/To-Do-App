export function userName(){
    let inputedUserName=document.querySelector('.user-name');
    // if there is no name already saved ask the user
    if (localStorage.getItem("name") === null) {
        let name=prompt('Please enter your name');
        if(!name){
            // if the user does not enter anything alert and prompt
            alert('Please enter your name.');
            name=prompt('Please enter your name');
        }
        //set the name into local storage
        localStorage.setItem('name',name);
      }
    // display the name entered
    inputedUserName.textContent=`Hi, ${localStorage.getItem('name')}`

}