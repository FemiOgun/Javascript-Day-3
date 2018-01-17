/*COLLECT 3 USER INPUTS AND ALLOCATE THEM TO THREE MEMBERS OF A NEW ARRAY. DISPLAY THE ARRAY ON THE WEBPAGE*/



/*
var event = document.getElementById('')
event1.addEventListener('click', , false);
*/

function myarray(i, j, y){
    
    //declare and create the array
    
    var myArray = [];
    
    //assign the parameters a position in the array
    
    myArray[0] = i;
    myArray[1] = j;
    myArray[2] = y;
    
    // display the array onto a webpage
    
    document.getElementById("arrayresult").innerHTML = myArray;
    
    //display item in Array index
    
    document.getElementById("arrayresult2").innerHTML = myArray[1];
    
}