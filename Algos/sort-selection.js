let arr = [10, 3, 1, 4, 5, 12, 7];

const selectionSort = (arr) => {
  if (arr.length === 0) return [];

  let min = arr[0];
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }

  let newArr = [...arr];
  newArr.splice(index, 1);

  return [min].concat(selectionSort(newArr));
};

console.log(selectionSort(arr));
