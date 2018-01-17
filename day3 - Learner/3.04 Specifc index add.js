/*Add to an array at a specific index point in the array*/


// create array
var myCountryArray = ["England", "France", "Italy", "Mexico", "Poland", "Russia", "China", "Greece", "Egypt", "India"];

document.getElementById("myarray").innerHTML = myCountryArray;

//add area at specific point
function addArray(a){
    
    //go to 5th index point and manually add value 
    myCountryArray.splice(5, 0, a);
    
    document.getElementById("myarray2").innerHTML = myCountryArray;
}