import { useDispatch } from "react-redux";
import { getUserData } from "../https";
import { useEffect, useState } from "react";
import { removeUser, setUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const useLoadData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getUserData();

        // ✅ If API sends "not logged in" info (depends on backend format)
        if (!data?.data?._id) {
          dispatch(removeUser());
          setIsLoading(false);
          return; // don't redirect for guests
        }

        // ✅ Logged-in user found
        const { _id, name, email, phone, role } = data.data;
        dispatch(setUser({ _id, name, email, phone, role }));
      } catch (error) {
        const status = error?.response?.status;

        if (status === 401) {
          // ✅ 401 means not logged in, so don’t throw red screen error
          dispatch(removeUser());
          // ❌ Don’t navigate if you just opened the app before login
          // navigate("/auth"); <-- remove this or make optional
        } else {
          console.error("Unexpected error fetching user:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [dispatch, navigate]);

  return isLoading;
};

export default useLoadData;
