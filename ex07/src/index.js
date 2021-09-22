// Create school object here 
var lion={
    name:"Simba",
    legs:4,
    tail:1,
    
}
// End of school object
function myFunction(propName) {
    //Only change code below this line
    delete lion[propName];
   return lion;
//Only change code above this line
}
myFunction("roar");
module.exports=myFunction;