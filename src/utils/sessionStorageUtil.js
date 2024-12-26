const setItem = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => {
  const value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const removeItem = (key) => {
  sessionStorage.removeItem(key);
};

const clear = () => {
  sessionStorage.clear();
};

export default {
  setItem,
  getItem,
  removeItem,
  clear,
};
