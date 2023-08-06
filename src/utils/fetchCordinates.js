const getCoordinates = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        resolve({
          latitude: lat,
          longitude: long,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
};

const fetchCoordinates = async () => {
  try {
    const coordinates = await getCoordinates();
    return coordinates;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchCoordinates };
