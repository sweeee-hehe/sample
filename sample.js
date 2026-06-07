let a=20;
let b=30;
console.log(a+b);
console.log(a==b);
let c='20';
console.log(a==c); //will only check the value not the type
let user=17;
let age=18;
if(user>=age){
    console.log("eligible");
}
else{
    console.log("not eligible")
}
//pattern problem
for(let i=0;i<5;i++){
    let star="";
    for(let j=0;j<i;j++)
        star+="*";
        console.log(star);
}
//odd number problem
let odd=[3, 27, 5, 9, 33, 4, 6 ,26 ];
for(let i=0;i<odd.length;i++){
    if(odd[i]%2!=0){
        console.log(odd[i]);
    }
}
//function
function calculator (a,b, op){
    if(op=='+'){
        return a+b
    }
    else if(op=='-'){
        return a-b
    }
    else if(op=='*'){
        return a*b
    }
    else if(a/b){
        return a/b
    }
    else{
        console.log("error")
    }
}
console.log(calculator(6,7,'*'));
//manipulation
const head=document.getElementById("heading")
head.innerHTML="go away"
console.log(head)