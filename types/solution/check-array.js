function isArray(arg) {
  if (arg.forEach) {
    return true;
  }

  return false;
}
var arr = [1,2,3];
console.log(isArray(arr));
console.log(isArray('car'));