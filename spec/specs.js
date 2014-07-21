describe("triangle", function() {
	it("is not a triangle if the sum of two of its sides is less than or equal to the third side", function() {
		triangle(2, 1, 5).should.equal(true);
	});

	it("is an equilateral triangle if all three sides are equal to each other", function () {
		triangle(3, 3, 3).should.equal(true);
	});
});
