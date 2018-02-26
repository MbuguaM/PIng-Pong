
    
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

   e.preventDefault();
 });
});
