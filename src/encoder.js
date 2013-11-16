var encoder = {
  setMessage: function() {
    this.message = document.getElementById("message").value
    // If you called "var message" instead, it would be a local variable
    // If you called "message" instead, it would be a global variable
  },
  getPassword: function() {
    this.password = prompt("What do you want the password to be?")
  },
  setUrl: function() {
    this.url = this.encrypt();
  },
  replaceMessageWithUrl: function () {
    document.getElementById("message").value = "Overwrite encoder.html and replace the url with this: decoder.html?"+this.url
  },
  encrypt: function() {
    cypher = CryptoJS.AES.encrypt(this.message, this.password)
    console.log("Verified: " +
      CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8))
    return cypher
  },
  protect: function() {
    this.setMessage()
    this.getPassword()
    this.setUrl()
    this.replaceMessageWithUrl()
  }
}

document.getElementById('encrypt').onclick = function() { encoder.protect(); };
