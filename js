Convert a string to an array

function stringToArray(string){
 
   const res =string.split(" ");
  return res;
}

Find Maximum and Minimum Values of a List

const min = function(list){
    
    return Math.min(...list);
}

const max = function(list){
    
    return Math.max(...list);
}

Smallest value of an array

function min(arr, toReturn) {
   if (toReturn==='value') { return Math.min(...arr) } else
  if (toReturn==='index') { return arr.indexOf(Math.min(...arr)) }
}

DNA to RNA Conversion

function DNAtoRNA(dna) {
 return dna.replace(/T/g, "U");
}


class SmallestIntegerFinder {
  findSmallestInt(args) {
   return (Math.min(...args))
  }
}

function circleCircumference(circle) {
 return 2*Math.PI*circle.radius;
}

class Shark extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.legs = 0;
    this.status = status;
    this.species = 'shark';
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = 'cat';
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status,master='') {
    super();
    this.master = master;
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = 'dog';
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
