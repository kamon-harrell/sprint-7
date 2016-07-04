// Your code here
function min (a,b) {
  if (a < b)
    return a;
  else
    return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

function isEven(n) {
  if (n==0)
      return true;
  else if (n==1)
    return false;
  else if (n<0)
    return isEven(-n);
  else 
    return isEven(n-2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//i only got through these two problems in my timebox of 3 hours, the first was pretty easy, but the recursion problem was quite a bit harder to understand