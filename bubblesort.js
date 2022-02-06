const swap = (array, index) => {
  [array[index], array[index + 1]] = [array[index + 1], array[index]];
};

const inOrder = (array, index) => {
  // if (array[index] <= array[index + 1]) return true;
  // return false;
  return array[index] <= array[index + 1]; // esto da TRUE or FALSE
};

const bubbleSort = (array) => {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
      if (!inOrder(array, i) && array[i + 1]) {
        swap(array, i);
      }
    }
  }
  return array;
};
