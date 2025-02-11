let data = [10, 3, 1, 4, 5, 12, 7];

const insertionSort = (arr) => {
  if (arr.length === 0) return [];
  let newArr = [...arr];

  for (let i = 1; i < newArr.length; i++) {
    let key = newArr[i];
    let j = i - 1;

    while (j >= 0 && newArr[j] > key) {
      newArr[j + 1] = newArr[j];
      j--;
    }

    newArr[j + 1] = key;
  }

  return newArr;
};
