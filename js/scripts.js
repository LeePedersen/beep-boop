
function robotReply(input) {
  var range = [];
  for (i = 0; i <= input; i++) {
    range.push(i);
  }
  console.log(range);
  return(range);
}





// User Logic
$(document).ready(function() {

  $('#inputNumber').submit(function(ev) {
    ev.preventDefault();
    var number = $("#number").val();
    var result = robotReply(number);
    $("#results").text(result);

  });
});
