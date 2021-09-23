
function myFunction() {
  var myMusic={
      001:{
          artist:"Bily Joel",
          title:"Piano man",
          release_year:1973,
          formats:{
              1:"CD",
              2:"8T",
              3:"LP"
          },
          gold:true,

      },
      002:{
        artist:"Dino Merlin",
        title:"Kokuzna vreneba",
        release_year:1989,
        formats:{
            1:"CD",
            2:"8T",
            3:"LP"
        },
        gold:true,
      }
  }
  return myMusic;
}
myFunction()[2];

module.exports=myFunction;