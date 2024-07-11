let obj={
    name: 'madhav',
    age:1,
    emailid:'madhav.mhjn01@gmail.com'
}

let obj2={...obj};
let obj3=Object.assign({},obj2);
let obj4={};
for (const key in obj3) {
    let newkey=key;
    let newvalue=obj3[key];
    // console.log(`${newkey}: ${newvalue}`);
    obj4[key]=newvalue;
}
console.log(obj)
console.log(obj2)
console.log(obj3)
console.log(obj4)