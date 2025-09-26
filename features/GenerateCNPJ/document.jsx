import { DocumentType } from "../../constants/enums";

const initialArray = (total, number) => {
  return Array.from(Array(total), () => numberRandom(number));
};
const numberRandom = number => Math.round(Math.random() * number);
const mod = (dividend, divider) => {
  return Math.round(dividend - Math.floor(dividend / divider) * divider);
};

export const onGenerateCNPJ = masked => {
  const total = 8;
  const number = 9;
  const [n1, n2, n3, n4, n5, n6, n7, n8] = initialArray(total, number);

  const n9 = 0;
  const n10 = 0;
  const n11 = 0;
  const n12 = 1;

  let d1 =
    n12 * 2 +
    n11 * 3 +
    n10 * 4 +
    n9 * 5 +
    n8 * 6 +
    n7 * 7 +
    n6 * 8 +
    n5 * 9 +
    n4 * 2 +
    n3 * 3 +
    n2 * 4 +
    n1 * 5;
  d1 = 11 - mod(d1, 11);
  if (d1 >= 10) d1 = 0;

  let d2 =
    d1 * 2 +
    n12 * 3 +
    n11 * 4 +
    n10 * 5 +
    n9 * 6 +
    n8 * 7 +
    n7 * 8 +
    n6 * 9 +
    n5 * 2 +
    n4 * 3 +
    n3 * 4 +
    n2 * 5 +
    n1 * 6;
  d2 = 11 - mod(d2, 11);
  if (d2 >= 10) d2 = 0;

  if (masked) {
    return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${d1}${d2}`;
  }

  return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${d1}${d2}`;
};

export const onSetMask = (value, type) => {
  switch (type) {
    case DocumentType.CNPJ:
      return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");

    default:
      return value;
  }
};
