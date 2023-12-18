import axios from "axios";

// const getUserType = () => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     return user?.userRole || "null";
// }

// const getUserId = () => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     return user?.id || "null";
// }

const instance = axios.create({
  // baseURL: "https://tejasanap.tech"
  baseURL: "http://localhost:7080"
  // headers: {
  // headers: {
  //   'usertype': getUserType(),
  //   'userid': getUserId()
  // }
});

export default instance;