export function humanNumber(num) {
  const numStr = new Intl.NumberFormat().format(Math.floor(num));
  const numArr = numStr.split(',');
  const numArrLen = numArr.length;

  let humanStr = '';

  if (numArrLen === 3) {
    humanStr = `${numArr[0]}.${numArr[1].substr(0, 1)}T`;
  } else if (numArrLen === 2) {
    humanStr = `${numArr[0]}B`;
  } else {
    humanStr = `${numArr[0]}M`;
  }
  return humanStr;
}
