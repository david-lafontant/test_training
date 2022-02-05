
function stringLength(str) {
  let str1 = str;

  if ((typeof str1 === 'undefined') || (str1 === null)) {
    return "String undefined";


  }
  if (str1.length === 0) {
    return 'String is empty';
  }
  if (str1.length > 10) {
    return 'String length is to long';
  }

  return str1.length;
}

module.exports = stringLength;

