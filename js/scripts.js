// back-end logic: none.


// front-end logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#result").show();

    var number = parseInt($("input#number").val());
    
    var total = 1;
    for (var index = 1; index <= number; index += 1) {
      total = total * index;
    }

    $("#result").text(total);    
  });
});