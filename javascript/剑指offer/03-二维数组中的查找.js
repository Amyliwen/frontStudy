/**
 * @return {boolean}
 */
function Find(target, array)
{
    // /** 方法1 暴力枚举*/
    for (let arr of array){
        for (let j of array){
            if (j === target){
                return true;
            } 
        } 
    } 
    return false;
    //二分查找：把每一个数组当成有序数组，进行二分查找
    for (let arr of array){
        let start = 0;
        let end = arr.length - 1;
        while (start <= end){
            let mid = ((end - start) >> 1) + start;
            if (target < arr[mid]){
                end = mid -1;
            } else if (target > arr[mid]){
                start = mid +1;
            } else{
                return true;
            }
        }
    }
    return false;

//    首先选取数组中右上角位置的数字，若等于该数字，则查找结束。
//    若该数字大于要查找的数字，则剔除其所在的列，若该数字小于要查找的数字，则剔除其所在的行。
    let row = 0;//列
    let col = array[0].length - 1;//行
    while (row < array.length && col >= 0){
        if (target > array[row][col]) {
            row++;
        }
        else if (target < array[row][col]){
            col--;
        }
        else {
            return true;
        }
    }
    return false;
//    使用JS独有的Array数组的API some方法
//    some判断数组中是否至少有一个元素满足条件
// 只要有一个满足就返回true
// 只有都不满足时才返回false
    return array.some(arr=>arr.some(e=>e===target))
}