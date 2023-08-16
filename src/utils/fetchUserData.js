const fetchUserData =  (key) => {
  try {
    const item = localStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item);
    }
    return null;
  } catch (error) {
    console.error(
      `Error fetching the user data for the following key ${key} function terminated with error : ${error.message}`
    );
    return null;
  }
};

export { fetchUserData };
