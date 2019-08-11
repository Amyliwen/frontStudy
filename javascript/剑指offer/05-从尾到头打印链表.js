/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
//递归
function printListFromTailToHead(head)
{
    // write code here
    if (!head){
        return [];
    }
    let result = [];
    again(head, result);
    return result;
}
function again(node, arr) {
    if (node.next){
        again(node.next, arr);
        arr.push(node.val);
    } else{
        arr.push(node.val);
    }
}
//unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。注意，
// unshift() 方法不创建新的创建，而是直接修改原有的数组
function printListFromTailToHead1(head) {
    if (!head){
        return [];
    }
    let result = [];
    while(head){
        result.unshift(head.val);
        head = head.next;
    }
    return result;
}

//法三
function printListFromTailToHead1(head) {
    if (!head){
        return [];
    }
    let result =[];
    let reverse = (arr) => {
        let i = 0;
        let j = arr.length - 1;
        while(i < j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    while(head){
        result.push(head.val);
        head = head.next;
    }
    reverse(result);
    return result;
}
