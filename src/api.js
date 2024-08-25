const fetch = require("node-fetch");

const baseUrl = "https://apis.data.go.kr/B551011/GoCamping/";

const serviceKey =
  "czjc%2FLiXADgQwbo%2BD7wPVIDHrQsrdTly%2FtPY1ISDPgq1b4XfyXD4WryP5J6TNaEsZF9d%2F0%2F10Cto7gia8HcDnA%3D%3D";

const options = `numOfRows=30&pageNo=1&MobileOS=WIN&MobileApp=chewping&_type=json`;

const numOptions = `numOfRows=6&pageNo=1&MobileOS=WIN&MobileApp=chewping&_type=json`;

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

export const scrollList = (pageNum) => {
  // console.log(pageNum);
  const scrollUrl =
    baseUrl +
    `basedList?serviceKey=${serviceKey}&numOfRows=30&pageNo=${pageNum}&MobileOS=WIN&MobileApp=chewping&_type=json`;
  return fetch(scrollUrl).then((res) => res.json());
};

// export const detailList = (id) =>
//   fetch(url("basedList") + `&contentId=${id}`).then((res) => res.json());

export const searchList = (keyword, pageNum) => {
  const searchUrl =
    baseUrl +
    `basedList?serviceKey=${serviceKey}&numOfRows=30&pageNo=${pageNum}&MobileOS=WIN&MobileApp=chewping&_type=json`;
  return fetch(searchUrl).then((res) => res.json());
};
