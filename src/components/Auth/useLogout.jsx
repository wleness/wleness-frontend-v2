import axios from "axios";
import { LOGOUT_USER_URI } from "../../data/api";
import useToken from "../../utils/useToken";

function useLogout() {
  const { removeToken } = useToken();
  const wleness_user = JSON.parse(localStorage.getItem("wleness_user"));

  const logMeOut = async () => {
    const response = await axios.post(LOGOUT_USER_URI);
    if (response.data.status === "success") {
      // Clear user data from local storage
      removeToken();
      if (wleness_user.type == "expert") {
        localStorage.removeItem("wleness_experts_id");
      } else {
        localStorage.removeItem("phone");
        localStorage.removeItem("email");
      }
      localStorage.removeItem("userInfo");
      localStorage.removeItem("wleness_user");
      localStorage.removeItem("wleness_user_type");
      localStorage.removeItem("username");
      localStorage.removeItem("login_type");
      window.location = "/";
      // navigate("/login");
    }
  };

  return {
    logout: logMeOut,
  };
}

export default useLogout;
