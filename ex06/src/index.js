// Create school object here 
var lion={
    name:"Simba",
    legs:4,
    tail:1,
    
}
// End of school object
function myFunction(propName,propValue) {
    //Only change code below this line
    lion[propName]=propValue;
   return lion;
//Only change code above this line
}
myFunction("roar","roar-roar");

module.exports=myFunction;