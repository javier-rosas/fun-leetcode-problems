var serialize1 = function(root) {
    if (!root) return null
    let queue = [root]
    let str = ""
    while (queue.length > 0){
        let size = queue.length 
        for (let i = 0; i < size; i++){

            let node = queue.shift()

            str += node.val
            
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)

        }
    }
    
    return str
};

var serialize = function(root) {
    
    
    
    function helper(root, str){
        if (root === null) 
        {
            str+= "null,"
        }
        else
        {
            str += root.val.toString() + ","
            str = helper(root.left, str)
            str = helper(root.right, str)
        }
        return str
    }
    
    return helper(root, "")
    
};

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(5)

console.log(serialize(root))