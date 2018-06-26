// client-side js
// run by the browser each time your view template is loaded

//set defaults
var topPosition;
var leftPosition;
var clickCount = 0;

$(".buttonTest").on("click", function(event){
  //Hiding the button.
  $(event.target).hide();
  
  //counting the number of clicks.
  clickCount = clickCount + 1;
  $("#clickcounttext").text("You've peeked: " + clickCount + " times.");
  
  //Checking where the button is, seeing if it's by the copy.
  var x = event.clientX; // the x position of the click.
  var y = event.clientY; // the y position of click
  
  if (clickCount > 5) {
    $(".test").css("background-color", "aliceblue");
  };
  console.log(event.clientX + ", " + event.clientY);
  //hardcoding in the button size for now, it's 114 x 36. 
})


function calcCardCopyPosition(){
  topPosition = Math.floor(Math.random() * 345); 
  leftPosition = Math.floor(Math.random() * 340) + 10; 
  console.log(topPosition);
  console.log(leftPosition);
  return topPosition;
  return leftPosition;
};

function setCardCopyPosition(){
 calcCardCopyPosition();
 $("#cardcopy").css({'top': topPosition, 'left': leftPosition});
};

setCardCopyPosition();