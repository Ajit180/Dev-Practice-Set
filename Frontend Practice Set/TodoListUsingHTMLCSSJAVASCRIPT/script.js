
function addTask(){

    //Store the value of input in the inputvalue variable
    const inputvalue = document.getElementById('taskval').value;
    //To Check the input value is not empty
    if(inputvalue.trim()!=''){
       const newlistItem = document.createElement('li');

       //set the inputvalue into the list
       newlistItem.innerHTML = inputvalue;

       //append the list into the ul child
       document.getElementById('mylist').appendChild(newlistItem);

       //clear the inputfield
       document.getElementById('taskval').value ="";
    }
    else{//if input field is null
          alert('please Enter the value');
    }
}