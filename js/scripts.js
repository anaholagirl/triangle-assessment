var triangle = function(sideA, sideB, sideC) {

  var side1 = sideA;
  var side2 = sideB;
  var side3 = sideC;
  var angleType = ["noTriangle", "equilateral", "isosceles", "scalene"];
  

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
    var finalTriangle = triangle(side1, side2, side3);

    var resultNoTriangle = "You didn't enter a triangle.  Try again.";
    var resultEquilateral = "You have an Equilateral triangle!";
    var resultIsosceles = "You have an Isosceles triangle!";
    var resultScalene = "You have a Scalene triangle!";
    
    if (finalTriangle === "noTriangle") {
      $(".triangleType").text(resultNoTriangle);
    } else if (finalTriangle === "equilateral") {
        $(".triangleType").text(resultEquilateral);
    } else if (finalTriangle === "isosceles") {
        $(".triangleType").text(resultIsosceles);
    } else  {
      $(".triangleType").text(resultScalene);
    }
    
    $("#triangleResult").show();

    $(".btn-warning").click(function() {
      $("#triangleResult").hide();
      document.location.reload();
    });
  });
});
