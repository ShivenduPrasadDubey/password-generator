var password1 = document.getElementById("pass1")
var password2 = document.getElementById("pass2")
function genera()
{
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var pass = ""
  var pass2 = ""
  var passLength = 10
  for(var i=0; i<passLength; i++)
  {
    var randin = Math.floor(Math.random()*52)
    pass += chars.substring(randin, randin +1)
  }
  for(var i=0; i<passLength; i++)
  {
    var randin = Math.floor(Math.random()*52)
    pass2 += chars.substring(randin, randin +1)
  }
  password1.textContent=pass
  password2.textContent=pass2
}
function copy() {
  const area = document.getElementById("pass1")
  area.select();
  document.execCommand('copy')
}
