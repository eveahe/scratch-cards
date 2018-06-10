// client-side js
// run by the browser each time your view template is loaded

$(".buttonTest").on("click", function(event){
  console.log(event.target);
  $(event.target).hide();
})
