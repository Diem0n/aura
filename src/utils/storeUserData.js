const storeUserData = ({ key, data }) => {
  try {
    const item = localStorage.getItem(key);
    if (item !== null) {
      localStorage.removeItem(key);
      localStorage.setItem(key, JSON.stringify(data));
    }
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(
      `Error fetching the user data for the following key ${key} function terminated with error : ${error.message}`
    );
    throw error;
  }
};

export { storeUserData };
