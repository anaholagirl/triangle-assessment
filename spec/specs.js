describe("triangle", function() {
	it("is not a triangle if the sum of two of its sides is less than or equal to the third side", function() {
		triangle(2, 1, 5).should.equal(true);
	});
});