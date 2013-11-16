describe("Encoder", function () {
  it("encodes an encrypted string from the text box", function () {
    encoder.setMessage = function() { encoder.message = "a test string"; };
    encoder.getPassword = function() { encoder.password = "password"; };
    encoder.setUrl = function() { encoder.url = CryptoJS.AES.encrypt("a test string","password"); };
    expect(encoder.setUrl()).toContain("U2FsdGVkX1/30U12b01L6LF+qHvVwD1DtZTiuMRXJtU=");
  });
});
