export const getSortedJson = (array) => {
  array?.sort((a, b) => {
    return a?.sort - b?.sort;
  });
};
