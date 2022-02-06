describe("swap", () => {
  it("toma un arreglo y un indice y cambia el valor del indice por el siguiente", () => {
    let array = [1, 2, 3, 4];
    swap(array, 2);
    expect(array).toEqual([1, 2, 4, 3]);
  });
});

describe("InOrder", () => {
  it("toma un arreglo y un indice y devuelve TRUE si los numeros estan ordenados", () => {
    expect(inOrder([1, 2, 3, 4], 2)).toEqual(true);
  });
  it("toma un arreglo y un indice y devuelve TRUE si los numeros estan desordenados", () => {
    expect(inOrder([1, 2, 4, 3], 2)).toEqual(false);
  });
  it("toma un arreglo y un indice y devuelve TRUE si los numeros son iguales", () => {
    expect(inOrder([1, 2, 4, 4], 2)).toEqual(true);
  });
});

describe("bubbleSort", () => {
  it("maneja arreglos vacios", () => {
    expect(bubbleSort([])).toEqual([]);
  });
  it("sort an array", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
