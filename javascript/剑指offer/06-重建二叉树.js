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
function print(){
    console.log(this.a + this.b);
}
print.bind({a: 10,b: 10}).bind({a: 1,b: 2})();

var str="2019-01-01";
// str.replace(/-/," ");
str.split('-').join(' ');
console.log(str);