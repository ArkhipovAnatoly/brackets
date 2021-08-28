module.exports = function check(str, bracketsConfig) {
  const bObj = {};
  const stack = [];

  bracketsConfig.forEach((value) => (bObj[value[0]] = value[1]));

  for (let i = 0; i < str.length; i++) {
    if (bObj[stack[stack.length - 1]] === str[i]) {
      stack.pop();
    } else if (str[i] in bObj) {
      stack.push(str[i]);
    } else {
      return false;
    }
  }

  if (stack.length !== 0) return false;

  return true;
};
