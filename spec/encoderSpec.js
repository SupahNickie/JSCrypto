describe("Encoder", function () {
  it("encodes an encrypted string from the text box", function () {
    var text = document.createElement('textarea');
    text.setAttribute('id', 'message')
    document.body.appendChild(text)

    encoder.setMessage = function() { encoder.message = "a test string"; };
    encoder.getPassword = function() { encoder.password = "password"; };
    encoder.protect();
    expect(text.value).toContain("U2FsdG")
  });
});
