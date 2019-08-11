//02-不修改数组找出重复的数字
function duplicate(numbers, duplication) {
    let start = 1;
    let end = numbers.length;
    while(end >= start){
        //用>>是遇到负奇数的时候求上下界统一
        let middle = ((end - start ) >> 1) + start;
        let count = countRange(numbers, start, middle);
    //    结束条件,若首尾数字相等
        if (end === start){
            if (count > 1)
                return start;
            else
                break;
        }
        if (count > (middle - start +1) ){
            end = middle;
        }
        else start = middle +1;
    }
    return -1;
}

function countRange(numbers, start, end) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] >= start && numbers[i] <= end){
            ++count;
        }
    }
    return count;
}