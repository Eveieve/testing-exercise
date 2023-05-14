function caesarCipher(string, number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  // h is at 7, ...
  // index of 'h', index of 'e' index of 'l', index of 'l' , index of 'o'
  // put all indices to an array

  const stringLetter = string.split("");

  const getIndex = () => {
    // get index position of each alphabet
    const indices = [];
    let i = 0;
    while (i < stringLetter.length) {
      indices.push(alphabet.indexOf(stringLetter[i++]));
    }
    return indices;
  };

  const newIndex = () => {
    return getIndex().map((el) => el + number);
  };

  const getNewLetter = () => {
    const newLetter = [];
    newIndex().forEach((el) => {
      newLetter.push(alphabet[el]);
    });

    return newLetter.join("");
  };
  return { getIndex, newIndex, getNewLetter };
}

export default caesarCipher;
