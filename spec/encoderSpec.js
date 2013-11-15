describe("Encoder", function () {
  it("encodes an encrypted string from the text box", function () {
    encoder.setMessage = function() { encoder.message = "a test string"; };
    encoder.getPassword = function() { encoder.password = "password"; };
    encoder.setUrl = function() { encoder.url = CryptoJS.AES.encrypt("a test string","password"); };
    encoder.protect();
    expect(document.getElementById('message').value().toContain(CryptoJS.AES.encrypt("a test string","password"););
  });
});
