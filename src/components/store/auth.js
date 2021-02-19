// import * as actionTypes from "./actionType"
// import axios from "axios";


// export const authStart = () => {
//     return {
//         type: actionTypes.AUTH_START
//     };
// }

// export const authSuccess = (authData) => {
//   return {
//       type: actionTypes.AUTH_SUCCESS,
//       authData: authData
//   };
// };

// export const authFailed = (error) => {
//   return {
//     type: actionTypes.AUTH_FAILED,
//     error:error
//   };
// };
// export const logOut = () => {
//   return {
//     type: actionTypes.LOGOUT,
//   };
// };
// export const logOutAsy = (expiredTime) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(logOut());
//     }, expiredTime * 1000);
//   };
// };

// export const auth = (email, password) => {
//       return dispatch => {
//           dispatch(authStart())
//           const authData = {
//             email: email,
//             password: password,
//             returnSecureToken:true,
//           };
//         axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCsiWDw9XoAVPjpkBNYu2kmCktbYc8gsVk", authData)
//          .then((response) => {
//            console.log(response);
//            dispatch(authSuccess(response.data));
//          })
//          .catch((err) => {
//            console.log(err);
//            dispatch(authFailed(err));
//          });
//       }
//   }


