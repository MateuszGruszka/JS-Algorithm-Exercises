var addBinary = function(a, b) {
    let i = a.length-1
    let j = b.length-1
    
    let result = "";
    let overload = 0;
    
    while( i >= 0 || j >= 0) {
        let digitOne = a[i] || '0';
        let digitTwo = b[j] || '0';
        
        let value = (parseInt(digitOne) + parseInt(digitTwo) + overload) % 2
        overload = Math.floor((parseInt(digitOne) + parseInt(digitTwo) + overload) / 2)
        
        result = value + result;
        i--;
        j--;
    }
    
    if(overload !== 0) {
        result = overload + result;
    }
    return result; 
};
