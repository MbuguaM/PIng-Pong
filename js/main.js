
    
//user interface logic

// waiting for the document to load
$(document).ready(function() {

     //search for the event
     $("#button").click(function(e){
           //fetch input from the input field
      var input = parseInt($("#input").val());
         
      //outputing the answer
        function finalOutput(){
          for(var i = 0;i<=(output.length-1);i++) {
            $("ul").append("<li>"+ output[i] +"</li>");
          } 
        }
  
   


       // bussiness logic  
          //array to store the numbers
       var numbers=[];
     //limiting the user input
    function rangeFinder() {
      if(input<0 || input >200){
        alert("Kindly enter a number between 0-200")
      }
      else{
        for(var i =1;i<=input;i++){
          numbers.push(i);
         }
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