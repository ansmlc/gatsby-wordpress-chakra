/* eslint-disable import/prefer-default-export */

export function filterMenuItems(arr, string) {
  const newArr = arr.filter(item => !item.url.includes(string));
  return newArr;
}
