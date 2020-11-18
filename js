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

