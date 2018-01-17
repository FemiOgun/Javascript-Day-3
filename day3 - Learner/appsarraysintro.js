/*var array = [1,2,3];

console.log(array);*/

//CAN HOLD MULTIPLE VARIABLES IN ARRAY

var array = [
    
    1, //number [0]
    false, //boolean [1]
    
    // Object [2]
    {
        name: ' Femi',
        class1: ' javascript'
    },
    
    // Method [3] (FUNCTION IS BASICALLY AN OBJECT OUTSIDE ARRAY)
    function(class1) {
        
        var talk = "Hello";
        console.log(talk + class1);
    },
    
    "HELLO", //string [4]
];

console.log(array);

array[3](array[2].class1);