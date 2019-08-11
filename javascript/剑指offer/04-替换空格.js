// 04-替换空格
function replaceSpace(str)
{
    // write code here
    if(!str){ //判空
        return "";
    }
    let spaceCount = 0;
    let letterArr = [];
    //计算空格数
    for (let i = 0; i < str.length; i++){
        if (str[i] === ' '){
            spaceCount++;
        }
        letterArr.push(str[i]);
    }
    // console.log(spaceCount);
    // console.log('x'+letterArr);
    let i = letterArr.length -1;
    letterArr.length = letterArr.length + 2*spaceCount;//新字符串总长度
    let j = letterArr.length -1;
    while (i < j){
        if (letterArr[i] === ' '){//遇到空格
            letterArr[j--] = '0';
            letterArr[j--] = '2';
            letterArr[j--] = '%';
            i--;//关键错误所在
        }else{
            letterArr[j] = letterArr[i];
            //遇到边界错误的问题;
            j--;
            i--;
        }
        console.log(letterArr);
    }
    //join能将每个元素用（）中的内容连接起来成一个字符串
    return letterArr.join('');
}

//法2，逐位判断
function replaceSpace1(str) {
    if (!str){
        return '';
    }
    let newStr = '';
    for (let i = 0; i < str.length; i++){
        if(str[i] === ''){
            newStr += '%20';
        } else{
            newStr += str[i];
        }
    }
    return newStr;
}

//正则替换
function replaceSpace(str) {
    //  /\s/g /***/表示正则表达式，‘\s’表示正则匹配字符串中的空字符，g表示全部匹配
    return str.replace(/\s/g, '%20');
}
//原生实现replaceAll方法
function replaceAll(str, before, after) {
    if (before.length > str.length){ //结束条件
        return str;
    }
    let searchLength = before.length;
    let result = '';
    for (let i = 0; i < str.length; i++){
        //看before长度是否长于剩下的长度
        if (i > str.length - before.length){
            break;
        } else{
            let compareStr = subString(str, i, i + searchLength);
            if (compareStr === before){
                let front = subString(str, 0, i);
                let end = subString(str, i + searchLength, str.length);
                str = front +after +end;
            }
        }
    }
    return str;
}
