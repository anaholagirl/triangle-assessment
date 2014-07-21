var triangle = function(sideA, sideB, sideC) {

  var side1 = sideA;
  var side2 = sideB;
  var side3 = sideC;

  var resultNoTriangle = false;
  var resultEquilateral = false;
  var resultIsosceles = false;
  var resultScalene = false;

  if((side1 + side2) <= side3 || (side2 + side3) <= side1 || (side1 + side3) <= side2) {
    resultNoTriangle = true;
  
  }
  return resultNoTriangle;
};
