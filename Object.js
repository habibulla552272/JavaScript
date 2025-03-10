// Object 
let menu ={
    width:200,
    height:200,
    title: 'my menu'
}

console.log(menu);

// multiplyNumeric(menu)

console.log(menu);

menu={
    width:400,
    height:443,
    title:'my menu 2'

}

console.log(menu);

// check for emptiness
 const isEmpty =(content)=>{
  return Object.keys(content).length === 0;
}
let schedul = {}
// alert(isEmpty(schedul))
schedul['11:26']= 'get up'
// alert(isEmpty(schedul))

// Integer properties 

let user ={
    name:'johan',
    surname:'smith'
}

user.age= 20;

console.log(user);
for (let prop in user){
    console.log(user[prop]);
    
}
let codes ={
    '+1':'germany',
    '+32':'switzerland',
    '+33':'great britain'
}
for(let code in codes){
    console.log(+code);
    console.log(codes[code]);
}

// square brackets

let users={};

users['likes birs']= true;
console.log(users);
users.like= 'hey bro';
console.log(users);

//object references and copying
let user2 ={
    name:'john',
    age:30
};

let clone= {}

for(let key in user2){
    clone[key] = user[key];
}
clone.name = 'habu';
console.log(user2.name);
console.log(clone.name);

let permissions1 = {canView:true};
let permissions2 ={ canEdit:true}
Object.assign(user2,permissions1,permissions2)

console.log(user2.name);
console.log(user2.canEdit);
console.log(permissions2.name);

Object.assign(permissions1,permissions2,user2)

console.log(permissions2.name);
console.log(permissions1.name);

let user3 ={
    name:'john',
    sizes:{
        height:220,
        width:50
    }
}
let clone2 =Object.assign({},user3);

console.log(clone2);

user3.sizes.width =60;
console.log(clone2.sizes.width);

let clone3 = structuredClone(user3)

user3.sizes.width = 90;
console.log(clone3.sizes.width);
console.log(user3.sizes.width);




//object methods 'this'

const user4={
    sayHi(){
        console.log('Hello');
        
    }
}


user4.sayHi();


const user5={
    name:'johan'
}
const admin= {
    name: 'Admin'
};

function sayHi(){
    console.log(this.name);
    
}

user5.f=sayHi;
admin.f=sayHi;

user.f();
admin.f();
admin.f(); //dot or square brackets access the method doesn't matter


