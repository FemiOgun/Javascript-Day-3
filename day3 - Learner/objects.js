/*
// one way to declare an object

var person = new Object();

// the [] brackets is an operator takes the person object and sets the property using a string 

person["firstname"] = "Rob";
person["lastname"] = "Green";

console.log(person);

// create a var to hold the persons name

var firstNameProperty = "firstname";

// when calling a string use the [] brackets
console.log(person[firstNameProperty]);

// the better way to do it

console.log(person.firstname);
console.log(person.lastname);
*/


/*
var Rob = { // this is the new object
    
    firstname: 'Rob', // name of the value pair
    lastname: 'Green',
    
    address: { // wherever the syntax {} is seen the passer views it as a new object
        
        street: '150 minories',
        city: 'london',
        floor: '4' 
        
    }   
}

function talk(a){ // creating a function that calls the first name
    
    console.log('Hi '+ a.firstname) 
}

// we are calling the object and giving it our object 'Rob'

talk(Rob);



talk({firstname: 'Jane', lastname: 'Doe'}); // parsing in our own object

Rob.address2 = {
    
    street: '350 minories penthouse'
}

*/

// CREATING OBJECT LITERAL WITH 3 PROPERTIES

var Car = { 
    
    Brand: 'Mercedez-Benz ', 
    Model: 'GLE ',
    Year: '2018',
    
    addData: function (){
        
        /*var transmission1 = 'manual';
        var transmission2 = 'automatic';*/
        Car.transmission1 = {'manual'},
        Car.transmission2 = {'auto'}
        
    }
};

document.getElementById('choosecar').innerHTML = 'Thanks for purchasing: <br>' + Car.Brand + Car.Model + Car.Year;



document.getElementById('transmissiontype').innerHTML = Car.addData();
































