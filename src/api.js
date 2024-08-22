const fetch = require("node-fetch");

const baseUrl = "https://apis.data.go.kr/B551011/GoCamping/";

const serviceKey =
  "czjc%2FLiXADgQwbo%2BD7wPVIDHrQsrdTly%2FtPY1ISDPgq1b4XfyXD4WryP5J6TNaEsZF9d%2F0%2F10Cto7gia8HcDnA%3D%3D";

const options = `numOfRows=20&pageNo=1&MobileOS=WIN&MobileApp=none&_type=json`;

const numOptions = `numOfRows=6&pageNo=1&MobileOS=WIN&MobileApp=none&_type=json`;

const url = (urlName) => {
  return baseUrl + `${urlName}?serviceKey=${serviceKey}&${options}`;
};

const numUrl = (urlName_2) => {
  return baseUrl + `${urlName_2}?serviceKey=${serviceKey}&${numOptions}`;
};

export const basedList = () =>
  fetch(url("basedList")).then((res) => res.json());

export const recomList = () =>
  fetch(numUrl("basedList")).then((res) => res.json());
