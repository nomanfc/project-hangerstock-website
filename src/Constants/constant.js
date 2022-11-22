export const BASE_URL = "https://main.hangerstock.com";
export const IMAGE_URL = "https://main.hangerstock.com/api/auction/media/file";

export const ValidateEmail = (inputText) => {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    return true;
  } else {
    return false;
  }
};
