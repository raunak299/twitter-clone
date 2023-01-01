import { UserSliceAction } from "./UserSlice";

export const getUsersData = (sendRequest) => {
  return async (dispatch) => {
    const response = await sendRequest({ url: "/api/users" });
    dispatch(UserSliceAction.setUserData({ usersList: response.users }));
  };
};

export const followHandler = (sendRequest, url, userId) => {
  //   console.log(sendRequest);
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const response = await sendRequest({
      url,
      method: "POST",
      headers: {
        authorization: token,
      },
    });
    dispatch(UserSliceAction.setUserData({ usersList: response.allUsers }));
  };
};
