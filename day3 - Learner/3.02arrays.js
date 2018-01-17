/*COLLECT A USER INPUT AND ALLOCATE IT TO A NEW ARRAY USING THE PUSH METHOD. DISPLAY THE ARRAY AND THE LENGTH OF THE ARRAY (NUMBER OF ELEMENTS) USING ARRAY.LENGTH ON THE WEBPAGE*/

function addtoarray(a){
    
    var arr = [];
    arr.push(a);
    
    document.getElementById("result").innerHTML = arr;
    document.getElementById("lengthcounter").innerHTML = arr.length;
    
}