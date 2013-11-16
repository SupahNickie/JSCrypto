describe("Decoder", function () {
  it("decodes an encrypted string from the URL", function () {
    decoder.getCypherText = function() { decoder.cypherText = CryptoJS.AES.encrypt("a test string","password"); };
    decoder.askPassword = function() { decoder.password = "password"; };
    expect(decoder.getCodedMessage()).toEqual("a test string");
  });
});
