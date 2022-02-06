function split(wholeArray) {
  let half = Math.floor(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, half);
  let secondHalf = wholeArray.slice(half);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  const totalLength = arr1.length + arr2.length;
  const mergedArr = [];

  while (mergedArr.length < totalLength) {
    if (arr1[0] < arr2[0] || !arr2[0]) {
      mergedArr.push(arr1.shift());
    } else {
      mergedArr.push(arr2.shift());
    }
  }
  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let [arr1, arr2] = split(arr);
  return merge(mergeSort(arr1), mergeSort(arr2));// Recursion
}
