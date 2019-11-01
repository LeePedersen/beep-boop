
// Business Logic


function robotReply(input) {
  var numberArray = input.split(" ");
  var range = [];
  var output = [];

  for (j = 0; j < numberArray.length; j++) {
    for (i = 0; i <= numberArray[j]; i++) {
      if (i.toString().includes("3")) {
        range.splice(i, 1, "I'm sorry, Dave. I'm afraid I can't do that.");
      } else if (i.toString().includes("2")) {
        range.splice(i, 1, "Boop");
      } else if (i.toString().includes("1")) {
        range.splice(i, 1, "Beep");
      } else {
        range.push(i);
      }
    }
    output.push(range.join(", "));
  }

  return(output.join(", "));
}

// User Interface Logic

$(document).ready(function() {

  $('#inputNumber').submit(function(ev) {
    ev.preventDefault();
    var number = $("#number").val();
    var result = robotReply(number);
    $("#results").text(result);

  });
});
