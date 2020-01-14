function compare(value1, value2){
    //升序
    if (value1 < value2){
        return -1;
    } else if (value1 > value2){
        return 1;
    } else {
        return 0;
    }
}
function compare1(value1, value2) {
    //降序
    if (value1 <value2){
        return 1;
    } else if (value1 > value2){
        return -1;
    } else{
        return 0;
    }
}

function compare2(value1, value2){
    //数值类型或其valueOf()方法会返回数值类型的对象类型
    return value2 - value1;
}
var values = [0, 1, 5, 10, 15];
values.sort(compare);
//让sort方法保持正确的升序