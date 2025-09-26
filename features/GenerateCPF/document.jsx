import { DocumentType } from "../../constants/enums";

const initialArray = (total, number) => {
  return Array.from(Array(total), () => numberRandom(number));
};
const numberRandom = number => Math.round(Math.random() * number);
const mod = (dividend, divider) => {
  return Math.round(dividend - Math.floor(dividend / divider) * divider);
};

export const onGenerateCPF = masked => {
  const total = 9;
  const number = 9;
  const [n1, n2, n3, n4, n5, n6, n7, n8, n9] = initialArray(total, number);

  let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
  d1 = 11 - mod(d1, 11);
  if (d1 >= 10) d1 = 0;

  let d2 =
    d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
  d2 = 11 - mod(d2, 11);
  if (d2 >= 10) d2 = 0;

  if (masked) {
    return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;
  }

  return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`;
};

export const onSetMask = (value, type) => {
  switch (type) {
    case DocumentType.CPF:
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");

    default:
      return value;
  }
};
