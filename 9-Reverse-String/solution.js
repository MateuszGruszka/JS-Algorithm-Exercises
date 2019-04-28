var reverseString = function(s) {
   //solution 1 
   var reversedStr = "";
    var high = s.length - 1;
    var i;
    for(i = high; i >= 0; i--) {
        reversedStr += s.charAt(i);
    }
    return reversedStr;
};