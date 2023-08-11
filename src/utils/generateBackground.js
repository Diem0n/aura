import moment from "moment";
const generateBackground = (images) => {
  const { day, night } = images;
  const currentHour = moment().hour();
  const isDayTime = currentHour > 6 && currentHour < 18 ? true : false;
  const url = `linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url(${
    isDayTime ? day : night
  }), lightgray 50% / cover no-repeat`;
  return url;
};

export { generateBackground };
