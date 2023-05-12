function capitalize(string) {
  const arrayed = string.split("");
  // console.log(arrayed); // will appear in terminal
  const uppercased = arrayed[0].toUpperCase();
  arrayed[0] = uppercased;
  return arrayed.join("");
}

export default capitalize;
