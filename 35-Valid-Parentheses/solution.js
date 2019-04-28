var map = {
    "(": ")",
    "[": "]",
    "{": "}"
} 

var isValid = function(s) {
    var stack = [];
    
    for (var i = 0; i < s.length; i++) {
        var el = s[i];
        
        console.log(map[el])
        console.log(stack)
        if (map[el]) {
            stack.push(map[el]);
        } else {
            if (el !== stack.pop()) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};