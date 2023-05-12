// takes a string and returns it reversed

function reverseString(string) {
  const split = string.split("");
  return split.reverse().join("");
}

export default reverseString;
