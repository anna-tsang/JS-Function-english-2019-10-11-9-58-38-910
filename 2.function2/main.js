function palindrome(message){
    // wirte your code here
    var newString = "";
      for (var i = message.length - 1; i >= 0; i--) {
        for (var j = 0; j < message.length; j++){
          if(message[i] == message [j]){
          } else {
            console.log(false);
            return false;
          }
          console.log(true);
          return true;
        }
      }
  }
  palindrome('hello'); // should return false
  palindrome('abcba'); // should return true
