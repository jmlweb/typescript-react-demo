const appendToArr = (
  value: unknown,
  arr: ReadonlyArray<unknown>,
): ReadonlyArray<unknown> => [...arr, value];

const arr = ['a', 1];
const arr2 = appendToArr(false, arr);

export default arr2;
