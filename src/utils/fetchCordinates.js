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

// error.PERMISSION_DENIED
// "User denied the request for Geolocation."

// error.POSITION_UNAVAILABLE
// "Location information is unavailable."

//  error.TIMEOUT
// "The request to get user location timed out."

//  error.UNKNOWN_ERROR
// "An unknown error occurred."


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
