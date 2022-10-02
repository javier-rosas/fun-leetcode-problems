
class TreeNode {
    constructor(val, left=null, right=null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);

    }
}


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    
    function isMirror(t1, t2){
        if (t1 === null && t2 === null) return true 
        if (t1 === null || t2 === null) return false

        return (t1.val === t2.val) && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right)
    }

    return isMirror(root, root)
    
};


let root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.right = new TreeNode(3)
root.right = new TreeNode(2)
root.right.right = new TreeNode(3)



let root2 = new TreeNode(1)
root2.left = new TreeNode(2)
root2.left.left = new TreeNode(3)
root2.left.right = new TreeNode(4)
root2.right = new TreeNode(2)
root2.right.left = new TreeNode(4)
root2.right.right = new TreeNode(3)

console.log( isSymmetric(root) )