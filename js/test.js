describe("getLetter", function() {
  
  it("returns consonant", function() {
    assert.include( ["B", "C", "D", "D", "D", "E", "F", "K", "L", "M", "N", "P","Q", "R", "S", "T", "V", "W", "X", "Y", "Z"], getLetter("Consonant"));
  });

  it("returns vowel", function() {
    assert.include( ["A", "E", "I", "O", "U"], 
                      getLetter("vowel"));
  });

});

describe("getRandomNumber", function() {
  
  it("generates a random number between 0 and 4", function() {
    assert.include([0,1,2,3,4], getRandomNumber(5));
  });

  it("generates a random number between 0 and 20", function() {
    assert.include([0,1,2,3,4], getRandomNumber(5));
  });

});