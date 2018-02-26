
    
//user interface logic

// waiting for the document to load
$(document).ready(function() {

     //search for the event
     $("#button").click(function(e){
           //fetch input from the input field
           var input = parseInt($("#input").val());




       // bussiness logic
     //array to store the numbers
     var numbers=[];
     //getting the numbers in the range of 1- user's input
    function rangeFinder() {
         for(var i =1;i<=input;i++){
          numbers.push(i);
         }
    };
    rangeFinder();    
    //changed numbers store array
    var output=[];
    // the tester for loo
    function divisibility3(){
      for(var i=1;i<=numbers.length;i++){
        //testing the divisibility of 3 and 5  
        if(i%3===0 && i%5===0) {
             output.push("pingpong")
           }
           //testing for divisiblity by 3 only
           else if(i%3===0) {
            output.push("ping");
          }
          // divisibility of 5
          else if(i%5===0){
            output.push("pong")
          }
          // maintaing all the other numbers
          else {
            output.push(i);
          }
      };
    }
    divisibility3();
    console.log(output);
    finalOutput();
    e.preventDefault();
});
});