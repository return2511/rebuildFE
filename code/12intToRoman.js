// 题目中数字是1-3999范围的，因为固定每个数字应该对应的逻辑数字字符串直接存储在数组中，所以可以直接遍历数组，
//然后判断当前数字是否大于等于当前逻辑数字，如果大于等于，则添加对应的逻辑数字字符串到结果中，然后减去当前逻辑数字，继续遍历下一个逻辑数字。
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const remanValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanValue = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let romanNum = "";
  for (let i = 0; i < remanValue.length; i++) {
    while (num >= remanValue[i]) {
      romanNum += romanValue[i];
      num -= remanValue[i];
    }
  }
  return romanNum;
};
