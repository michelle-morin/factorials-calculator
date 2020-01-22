// back-end logic: 

var total = 1;
var factorial = function(number) {
  if (number === 0) {
    total = total;
  } else {
    for (var index = 1; index <= number; index += 1) {
    total *= index;
    }
  }
}

// front-end logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    
    var number = parseInt($("input#number").val());
    
    factorial(number);

    $("#result").empty();
    $("#result").append(total);    
    $("#result").show();
  });
});