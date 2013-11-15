var decoder = {
  askPassword: function() {
    this.password = prompt("Gimme the password, foo!")
  },
  getCypherText: function() {
    this.cypherText = document.URL.split('?')[1]
  },
  getCodedMessage: function() {
    this.askPassword()
    this.getCypherText()
    decoded = CryptoJS.AES.decrypt(this.cypherText, this.password).toString(CryptoJS.enc.Utf8)
    return(decoded)
  }
}

document.getElementById('decrypt').onclick = function() { alert(decoder.getCodedMessage()); };
