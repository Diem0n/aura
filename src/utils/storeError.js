// TODO : fix the error storage bug that causes an empty obj to be stored
//        and integrate it into console feature

const getPrevErrors = () => {
  try {
    const errors = localStorage.getItem("errors");
    if (errors) {
      return JSON.parse(errors);
    } else {
      return null;
    }
  } catch (error) {
    console.error({
      identifier: "failed to reterive previous errors",
      error: error?.message || "unknown error",
    });
    return null;
  }
};
const storeError = (error) => {
  const errors = [];
  const prevErrors = getPrevErrors();
  console.log("error recv", error);
  try {
    if (prevErrors !== null) {
      errors.push(...prevErrors);
      errors.push(error);

      localStorage.setItem("errors", JSON.stringify(errors));
    }
    if (prevErrors === null) {
      errors.push(error);
      localStorage.setItem("errors", JSON.stringify(errors));
    }
  } catch (error) {
    console.error({
      identifier: "failed to update error console data",
      error: error?.message || "unknown error",
    });
  }
};

export { storeError, getPrevErrors };
