let obj1 = {name:"Person 1", age:5};
let obj2 = {age:5, name:"Person 1"};

let a=Object.keys(obj1);
let b=Object.keys(obj2);

let x=a.sort();
let y=b.sort();

let c=true;

for (let i=0;i<x.length;i++){
    c=obj1[x[i]] ===obj2[y[i]]
    if(!c){
        console.log("Objects are not same")
        break;
    }
}
if(c){
    console.log("Objects are same");
}
