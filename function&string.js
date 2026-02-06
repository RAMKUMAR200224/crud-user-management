boy = "your teeth is so clean"
girl = "go and brush your teeth"

function teeth(yes,no) {

if (yes){
    console.log(boy)
}
else {
    console.log(girl)
}
}

teeth()

var season = "spring"

if (season == "spring"){

    console.log("enjoy the blooming flowers")
}

if (season == "summer"){
    console.log("have a fun in sun")
}

if (season=="autumn"){
    console.log("admire the colour leaves")
}

if (season=="winter"){
    console.log("bundle and stay warm")
}

const name = "ramkumar"

function heroes() {
    const name = "donesh is hero"
   if (true) {
    const name = "nirmal form nif"
    console.log(name)
   } 
    console.log(name)
}
console.log(name)
heroes()


function donesh() {
    if (true){
        var name = "donesh india"
    }
    console.log(name)
}
donesh()


function hosting() {
    a=10
    let b= 24
}
hosting()    

console.log(a)


const a = 42
const b = "donesh"
const c = null

console.log (b && a)


 function greet(name) {
console.log(`Hello, ${name || 'visitor'}!`)
}
greet('Logesh') 

function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}


function reverseString(text) {
  return text.split("").reverse().join("");
}


function countCharacter(text, char) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === char) {
      count++;
    }
  }

  return count;
}


function isPalindrome(text) {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === reverseString(cleaned);
}

console.log(capitalize("javascript"));
console.log(reverseString("github"));
console.log(countCharacter("hello world", "l"));
console.log(isPalindrome("Racecar"));


module.exports = {
  capitalize,
  reverseString,
  countCharacter,
  isPalindrome
};



function combineNames(firstName, lastName) {
  return firstName + " " + lastName;
}

function checkWordLength(word) {
  if (word.length > 5) {
    return "Long word";
  } else {
    return "Short word";
  }
}

function repeatWord(word, times) {
  let result = "";

  for (let i = 0; i < times; i++) {
    result += word;
  }

  return result;
}


console.log(combineNames("John", "Doe"));
console.log(checkWordLength("JavaScript"));
console.log(checkWordLength("Code"));
console.log(repeatWord("Hi ", 3));