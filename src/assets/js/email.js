var length = 10;

var text = document.getElementById('text')
var string = text.innerHTML
var trimmedString = string.length > length ?
  string.substring(0, length - 3) + "..." :
  string

text.innerHTML = trimmedString