// client-side js
// run by the browser each time your view template is loaded

//set defaults
var topPosition;
var leftPosition;
var clickCount = 0;

$(".buttonTest").on("click", function(event){
  $(event.target).hide();
  $(".test").css("background-color", "aliceblue");
  clickCount = clickCount + 1;
  console.log(clickCount);
  $("#clickcounttext").text("You've peeked: " + clickCount + " times.");
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