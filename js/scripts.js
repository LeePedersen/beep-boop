
// Business Logic

function robotReply(input, nameInput) {
  var numberArray = input.split(" ");
  var range = [];
  var output = [];
  var vowels = ["a", "e", "i", "o", "u", "y"]

  if (!nameInput) {
    nameInput = "Dave";
  }

  for (j = 0; j < numberArray.length; j++) {

    if (!Number.isInteger(parseInt(numberArray[j]))) {

      var nameArray = nameInput.split("");
      var firstVowel = "";

      for (l = 0; l < nameArray.length; l++) {
        if (vowels.includes(nameArray[l])) {
          for (k = 0; k < numberArray[j].length; k++) {
            nameArray.splice(l, 0, nameArray[l]);
          }
          range.push(nameArray.join("") + " that's not an integer");
          l = l + nameArray.length;
         }
        }
      }



    for (i = 0; i <= numberArray[j]; i++) {

      if (i.toString().includes("3")) {
        range.splice(i, 1, "I'm sorry, " + nameInput + ". I'm afraid I can't do that");
      } else if (i.toString().includes("2")) {
        range.splice(i, 1, "Boop");
      } else if (i.toString().includes("1")) {
        range.splice(i, 1, "Beep");
      } else {
        range.push(i);
      }

    }
  }
  output.push(range.join(", "));
  return(output.join(", "));
}

// User Interface Logic

$(document).ready(function() {

  $('#inputNumber').submit(function(ev) {
    ev.preventDefault();
    var number = $("#number").val();
    var name = $("#name").val();
    var result = robotReply(number, name);
    $("#results").text(result);

  });
});
