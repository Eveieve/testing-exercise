function caesarCipher(string, number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  // index of 'h', index of 'e' index of 'l', index of 'l' , index of 'o'
  // put all indices to an array

  const stringLetter = string.split("");

  const getIndex = () => {
    // get index position of each alphabet
    let i = 0;
    const indices = [];
    while (i < stringLetter.length) {
      indices.push(alphabet.indexOf(stringLetter[i++]));
    }
    return indices;
  };

  const newIndex = () => {
    return getIndex().map((el) => el + number);
  };
  return { getIndex, newIndex };
}

export default caesarCipher;
