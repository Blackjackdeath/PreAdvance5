function circle(){
    let a=0;
    return function cicle(b){
        a+=b;
        return a;
    }
}

let sum=circle();
console.log(sum(3));
console.log(sum(5));
console.log(sum(228)); 