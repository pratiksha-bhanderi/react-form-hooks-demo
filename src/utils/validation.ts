export const checkObjectIsEmpty = (obj: any) => {
  for (var key in obj) {
    if (obj[key] !== "") return false;
  }
  return true;
};
