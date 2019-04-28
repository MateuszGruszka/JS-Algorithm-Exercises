var isValidSerialization = function(preorder) {
    let nodes = preorder.split(",")
    let diff = 1
    
    for (i in nodes) {
        if(--diff < 0) return false;
        if(nodes[i] !== '#') diff += 2;
    }
    
    return diff == 0;
}