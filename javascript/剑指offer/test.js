var line = readline();
while (line = readline()){
    let lines = lines.split(' ');
    let n = parseInt(lines[0]);
    let m = parseInt(lines[1]);
    print(compute(n, m));
}

function compute(n, m) {
    for (let i = 0;i < n; i++){
        for (let j = 0; j < m; j++){

        }
    }
}
var a, b;

while((a=readInt())!=null && (b=readInt())!=null){
    let c = compute(a, b);
    print(c);
}

function compute(n, m) {
    let r = 0,c = 0;
    for (let i = 0;i < n; i++){
        for (let j = 0; j < m; j++){
            let lines = lines.split(' ');
            let temp = parseInt(lines[j]);
            c += temp;
        }
    }
    return c;
}