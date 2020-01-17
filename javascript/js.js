let target = ~~readline();
let n=~~readline();
let kk=n;
let m=[],v=[];
while(kk--){
    let line = readline().split(',');
    let mm = ~~line[0];
    let vv = parseFloat(line[1]);
    m.push(mm);
    v.push(vv);
}
// console.log(m);
// console.log(v);
let f = new Array(target+1).fill(0);
for(let i=0;i<n;i++){
    for(let j=target;j>=m[i];j--){
        f[j] = Math.max(f[j],f[j-m[i]]+m[i]*v[i]);
    }
}
print(f[target].toFixed(4))
