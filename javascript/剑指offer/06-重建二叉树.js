/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if (pre.length === 0 || vin.length === 0){
        return null;
    }
    let root = pre[0];
    let index = vin.indexOf(root);//获取
}