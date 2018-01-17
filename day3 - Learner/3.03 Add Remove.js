/*ADD AND REMOVE FIRST AND LAST ELEMENTS ON AND OFF AN ARRAY USING SHIFT UNSHIFT PUSH AND POP METHODS*/

var arr = [];

//<!--  add element to end of array -->
function lab22push(a){
    

    arr.push(a);
    
    document.getElementById("lab22result").innerHTML = arr;
    
}

//<!--  remove last element of the array -->
function lastpop() {
    
    arr.pop();
    
    document.getElementById("lab22result1").innerHTML = arr;
}

//<!--  remove the first element of the array -->
function firstshift() {
    

    arr.shift();
    
    document.getElementById("lab22result1").innerHTML = arr;
}

//<!--  add to the first element of the array -->
function firstunshift(a) {
    
    arr.unshift(a);
    
    document.getElementById("lab22result1").innerHTML = arr;
}