let data = [10, 3, 1, 4, 5, 12, 7];

const bubbleSort = (arr) => {
  if (arr.length === 0) return [];
  let swapped = false;

  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
};

console.log(bubbleSort(data));
