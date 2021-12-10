export const reverseString = (str: string): string => {
  var splitString = str.split(""); // var splitString = "hello".split("");
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  return joinArray; // "olleh"
};
