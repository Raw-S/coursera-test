(function (window) {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var lowerName = names[i].toLowerCase(); //converts the name to lowercase
  var firstLetter = lowerName.charAt(0); //selects first letter of name

  if (firstLetter == 'j') {
    byeSpeaker.speak(names[i]);
  }
  
  else {
   helloSpeaker.speak(names[i]);
  }
}

})(window);