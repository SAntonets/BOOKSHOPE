export function setToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    if (data === null) {
      return null;
    }
    return JSON.parse(data);
  } catch (e) {
    console.error(
      `An error occurred when trying to read data from Local Starage ${e}`
    );
    return null;
  }
}
