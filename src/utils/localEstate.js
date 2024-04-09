const getLocalEstates = (mode) => {
  const estates = localStorage.getItem(mode);
  if (estates) {
    return JSON.parse(estates);
  }
  return [];
};
const hasLocalEstate = (mode, id) => {
  const estates = getLocalEstates(mode);
  return estates.includes(+id);
};
const addLocalEstate = (mode, id) => {
  const estates = getLocalEstates(mode);
  estates.push(+id);
  localStorage.setItem(mode, JSON.stringify([...new Set(estates)]));
};
const removeLocalEstate = (mode, id) => {
  const estates = getLocalEstates(mode);
  const newEstates = estates.filter((estate) => estate !== +id);
  localStorage.setItem(mode, JSON.stringify(newEstates));
};

export { getLocalEstates, addLocalEstate, hasLocalEstate, removeLocalEstate };
