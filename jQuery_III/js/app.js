//THIS IS THE PLAN
// prevent spoilerphobes from seeing spoilers
//solution: to hide spoilers and revaal them through user intereaction

//1.we want to hide the spoiler
$(".spoiler span") .hide();
//2.add a button
$(".spoiler") .append("<button>Reveal Spoiler!</button>");
//3.when button is pressed we want to
$("button") .click(function() {

  //3.1, show the spoiler next to the bottom clicked
$(this) .prev() .show();
$(".spoiler span") .show();
  //3.2, just get get rid of this button
$(this) .remove();
});
