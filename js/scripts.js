var triangle = function(sideA, sideB, sideC) {

  var side1 = sideA;
  var side2 = sideB;
  var side3 = sideC;
  var angleType = ["noTriangle", "equilateral", "isosceles", "scalene"]
  // var inputtedTriangle = [side1, side2, side3]
  // var resultNoTriangle = false;
  // var resultEquilateral = false;
  // var resultIsosceles = false;
  // var resultScalene = false;

  if((side1 + side2) <= side3 || (side2 + side3) <= side1 || (side1 + side3) <= side2) {
      angleType = "noTriangle";
      return angleType;
  } else if (side1 === side2 && side2 === side3) {
      angleType = "equilateral";
      return angleType;
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      angleType = "isosceles";
      return angleType;
  } else if (side1 !== side2 && side2 !== side3 && side3 !== side1) {
      angleType = "scalene";
      return angleType;
  }

};

$(document).ready(function() {
  $("form#triangleSideInput").submit(function(event) {
    event.preventDefault();

    var side1 = parseInt($("input#sideA").val());
    var side2 = parseInt($("input#sideB").val());
    var side3 = parseInt($("input#sideC").val()); 
console.log("sides are okay");
    var results = triangle(sideA, sideB, sideC);
console.log("function ran");
    var noTriangle = "You didn't enter a triangle.  Try again.";
    var equilateral = "You have an Equilateral triangle!";
    var isosceles = "You have an Isosceles triangle!";
    var scalene = "You have a Scalene triangle!";
 console.log("new variables okay");   

    if (resultNoTriangle === true) {
      $(".triangleType").text(noTriangle);
      console.log("I found my answer");
    }
    $("#triangleResult").show();
console.log("results okay");
    $("input#sideA").val("");
    $("input#sideB").val("");
    $("input#sideC").val("");
  });
});
