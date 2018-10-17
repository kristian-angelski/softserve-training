// integer
var int = 11;

// float
var float = 11.1;

// boolean
var bool = true;
var bool = false;

// string
var string = 'My name is Kristian';

// date
var date = new Date();

// undefined
var und;

// array of integers
var intArray = [1, 2, 3, 11, int, float];

// array of strings
var strArray = ['car', 'turret', 'coins', 'desk', string];

// array of mixed elements
var mixedArray = [int, float, string, 'turret', 'coins', 'desk'];

// object with properties (ID is 1, Name is “ABC”)
var myObj = {
  id: 1,
  name: 'ABC'
};

// delete the property Name from the above object
delete myObj.name;

// add property "prop 1" to the object
myObj.prop1 = 'new';

// if you have var q = 'tst' add a property to the object using this variable
var q = 'tst';
myObj.prop2 = q;