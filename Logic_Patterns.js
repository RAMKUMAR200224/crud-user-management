const fs = require("fs");


fs.readFile("js/data.json","utf8",(err,data) =>{
  if (err)
   return console.error(err)

  const users =JSON.parse(data)
  const adult = users.filter(u => u.age ==25);
  console.log(adult)
  
})

fs.readFile("js/data.json","utf8",(err,data)=>{
  if(err){
    console.error(err);
    return
  }
  const jsondata =JSON.parse(data)
  console.log(jsondata)
})

const newdata= {name:"nirmal",age:"65"};
 fs.writeFile("js/data.json",JSON.stringify(newdata,null,2),err =>{
  if(err){
    console.error(err);
  }
  else{
    console.log("data is added sucessfully")
  }
 });


 fs.readFile("js/data.json","utf8",(err,data)=>{
  if(err) return console.error(err)
   
   
   const users = JSON.parse(data);
   users.push({name:"nirmal",age:"65"});

  fs.writeFile("js/data.json",JSON.stringify(users,null,2),err =>{
    if (err) console.error(err)
      else{
         console.log("added sucessfully")
      }
  })
 })


fs.readFile("js/data.json","utf8",(err,data) =>{
  if(err) return console.error(err);

  const users = JSON.parse(data);
  const adults = users.filter(u => u.age == 25);
  console.log(adults)
})


function countroles(users) {
  return users.reduce((acc,user) => {
    acc[user.subject] = (acc[user.subject] || 0) + 1;
    return acc;
  },{})
  }
  fs.readFile("js/data.json", "utf8", (err, data) => {
  if (err) return console.error(err);

  const students = JSON.parse(data);

  console.log(countroles(students));
});

function countroles(users){
  return users.reduce((acc,user)=>{
    acc[user.age] = (acc[user.age] || 0) +1;
    return acc ;
  },{});
}
fs.readFile("js/data.json","utf8",(err,data) =>{
  if(err) return console.error(err)

    const donesh = JSON.parse(data)
    console.log(countroles(donesh));
})

async function readFile(){
  try{
    const data = await fs.readFile("js/data.json","utf8");
    console.log(data)
  }catch(err) {
    console.error(err);
  }
}
readFile()

function finduserbyid(users,name){
  return users.find(user => user.name == name);
}
fs.readFile("js/data.json","utf8",(err,data) =>{
  if(err) return console.error(err)

    const donesh = JSON.parse(data)
    console.log(finduserbyid(donesh,"nirmal"));
})

function isvaliduser(user){
  const requiredfields =["name","age","email"]
  return requiredfields.every(field => field in user );
}

fs.readFile("js/data.json","utf8",(err,data) => {
  if(err) return console.error(err)

    const file = JSON.parse(data)

  file.forEach(user => {
    console.log(user.name, "is valid:", isvaliduser(user));
  });
    
})


fs.readdir("js",(err,files)=>
{
  if(err) return console.error(err);
  files.forEach(file => console.log(file));
});
const data = require("./data.json")
function removeduplicates(users){
  const seen = new Set();
  return users.filter(user => {
    if (seen.has(user.age)) return false ;
    seen.add(user.age);
    return true;
  })
}
console.log(removeduplicates(data))
 const data = require("./data.json")
function duplicate (users){
  const seen = new Set();
  return users.filter(user =>{
   if (seen.has(user.age)) return false;
   seen.add(user.age);
   return true;
  })
}

console.log(duplicate(data));

const stream = fs.createReadStream("data.txt")
const r1 = readline.createInterface({input:stream});

r1.on("line",line =>{
  console.log(line)
});
const data = require("./data.json")
function sortbyage(users){
  return users.sort((a,b) => a.age - b.age);
}
 console.log(sortbyage(data))

async function readfile() {
     const data = await fs.readFile("js/data.js","utf8") 
     console.log(data)
     
}
readfile()
const data = require("./data.json")
function avarageage(users) {
  const total = users.reduce((sum,user)=> sum+ user.age,0);
  return total / users.length;
}

console.log(avarageage(data))

const data = require("./data.json")
function getcity(user){
  return user?.address?.city || "unknown";
}

console.log(getcity(data[0]))


const disply = require("./data.json")
function conatinvalues(arr,value){
  return arr.includes(value)
}

console.log(conatinvalues(disply[1].name,"Emma Smith"))


function createcounter(){
  let count =0;
  return function (){
    return ++count;
  };
}
const counter = createcounter()
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


for (let i = 0; i < 3; i++){
  setTimeout(()=> console.log(i),100);
}
  

function debounce(fn,delay){
  let timer ;
  return function (...args){
    clearTimeout(timer);
    timer = setTimeout(()=> fn.apply(this,args),delay);
  };
}

console.log(debounce())


Promise.resolve(1)
.then(x => x +1)
.then( x => Promise.resolve(x +1))
.then(console.log);



console.log("a");
setTimeout(() => console.log("b"),8);
Promise.resolve().then(() => console.log("c"));
console.log("d")


const obj = {
  value : 10 ,
  getvalue() {
    return this.value
  }
};
const fn = obj.getvalue.bind(obj)
console.log(fn());


const data = require("./data.json")
Array.prototype.mymap = function (cb){
  const result = [];
  for (let i = 0 ; i < this.length;i++){
    result.push(cb(this[i],i,this));
  }
  return result ;
};

const names  = data.mymap(user => user.name)
console.log(names)


class Mypromise{
  constructor(executor){
    this.callbacks = []
    const resolve = value => {
      this.callbacks.forEach(cb => cb(value))
    };
    executor(resolve);
  }
  then(cb){
    this.callbacks.push(cb);
    return this;
  }
}
const reader = new Mypromise((resolve) => {
  fs.readFile('js/data.json', 'utf8', (err, text) => {
    if (err) return console.error(err)
    const data = JSON.parse(text);
    resolve(data); 
  });
});
reader.then((result) => {
  console.log("File content found:");
  console.log(result);
}); 

const data = require("./data.json")
function attach(inputdata){
  const bigdata = new Array(1e6).fill("*")
  console.log("Memory used:", Math.round(process.memoryUsage().heapUsed / 1024 / 1024), "MB");
  return () => console.log("attached")
}

const result = attach(data)
result() 

async function runqueue( tasks, limits){
  const executing = [];
  
  for (const task of tasks){
    const p = task().then(() => {
      executing.splice(executing.indexOf(p), 1);
    });
  executing.push(p);
  if (executing.length >= limits){
    await Promise.race(executing);
  }
  await Promise.all(executing)
} 
}

const task = (id, ms) => () => new Promise(resolve => {
  console.log(`Starting Task ${id}`);
  setTimeout(() => {
    console.log(`Finished Task ${id}`);
    resolve();
  }, ms);
});

const myTasks = [
  task(1, 1000), task(2, 500), task(3, 1000), task(4, 200)
];

runqueue(myTasks, 2).then(() => console.log("All tasks done!"));


function once(fn){
  let called = false;
return function (...args){
  if(!called){
      called = true;
      return fn.apply(this,args);
  }
};
}

const say = once((name)=>{
  console.log("hello",name)
});

say("ram")
say("ram")
say("ram")



Function.prototype.mybind = function (context,...args){
  
return (...rest) => this.apply(context,[...args,...rest]);
};
const person = { name: "Ramkumar" };

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const greetRam = greet.mybind(person, "Hello");

greetRam("!");


function hascircular(obj,seen = new Set()){
  if (typeof obj !== "object" || obj === null) return false;
  if (seen.has(obj)) return true;
  seen.add(obj)
  return Object.values(obj).some(val => hascircular(val,seen));
}
const normalObj = { a: 1, b: { c: 2 } };
console.log("Is normalObj circular?", hascircular(normalObj)); 


const circularObj = { name: "Ram" };
circularObj.itself = circularObj; 

console.log("Is circularObj circular?", hascircular(circularObj));



function deepclone(obj,map = new WeakMap()){
  if (typeof obj !== "object" || obj === null)return obj;
  if (map.has(obj)) return map.get(obj);

  const clone = Array.isArray(obj)? [] : {};
  map.set(obj,clone);

  for (const key in obj){
    clone[key] = deepclone(obj[key],map);
  }
  return clone;
}

const original = {
  name: "Ramkumar",
  skills: ["JavaScript", "Node.js"],
  address: { city: "Chennai" }
};


original.self = original;

const copy = deepclone(original);


copy.address.city = "Bangalore";

console.log("Original City:", original.address.city); 
console.log("Clone City:", copy.address.city);       
console.log("Circular Reference works:", copy.self === copy); 


