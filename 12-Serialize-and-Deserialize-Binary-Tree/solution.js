var serialize = function(root) {
    let array = [];
    let recursionSerialize = function(root) {
        if(root === null) {
            array.push(null)
            return 
        }
        array.push(root.val) 
        recursionSerialize(root.left)
        recursionSerialize(root.right)
    }
    recursionSerialize(root);
    return array;
};


var deserialize = function(data) {
    let recursionDeserialize = function(node) {
        let value = node.shift()
        if(value === null) { 
            return null
        } 
        let treeNode = new TreeNode(value)
        treeNode.left = recursionDeserialize(node)
        treeNode.right = recursionDeserialize(node)
        return treeNode;
    }
    return recursionDeserialize(data)
};
