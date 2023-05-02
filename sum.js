function capitalize(string) {
  const arrayed = string.split("");
  console.log(arrayed);
  const uppercased = arrayed[0].toUpperCase();
  arrayed[0] = uppercased;
  return arrayed.join("");
}
module.exports = capitalize;
