import { UserSliceAction } from "./UserSlice";

export const getUsersData = (sendRequest) => {
  return async (dispatch) => {
    const response = await sendRequest({ url: "/api/users" });
    dispatch(UserSliceAction.setUserData({ usersList: response.users }));
  };
};
