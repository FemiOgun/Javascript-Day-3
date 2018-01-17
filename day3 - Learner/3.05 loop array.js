/*
Create an array variable with 10 elements and using a for loop display each element on the webpage
*/
function looparray(){

var array = ["England", "France", "Italy", "Mexico", "Poland", "Russia", "China", "Greece", "Egypt", "India"];

    for (var i = 0; i < array.length; i++) {
    (array[i]);
};
    document.getElementById("myarray").innerHTML = array;

}