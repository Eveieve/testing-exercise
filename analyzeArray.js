function analyzeArray() {
  const average = (array) => {
    const sum = array.reduce((acc, curr) => acc + curr);
    const numOfEl = array.length;
    const average = sum / numOfEl;
    return average;
  };
  const min = (array) => {
    return Math.min(...array);
  };
  const max = (array) => {
    return Math.max(...array);
  };
  const length = (array) => {
    return array.length;
  };
  return { average, min, max, length };
}

export default analyzeArray;
