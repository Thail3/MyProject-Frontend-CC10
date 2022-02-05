import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { clearToken, setToken, getToken } from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (getToken()) {
      axios
        .get("/users/me")
        .then((res) => setUser(res.data.user))
        .catch((err) => console.log(err));
    }
  }, []);

  const navigate = useNavigate();

  //?ทำการ login ด้วย emailOrPhoneNumber และ password โดยลิงค์ไปที่ backend axios.post("/users/login", แล้วก็นำมันไป  navigate('/home')
  const login = async (emailOrPhoneNumber, password) => {
    try {
      const res = await axios.post("/users/login", {
        emailOrPhoneNumber,
        password,
      });

      setToken(res.data.token);
      setUser(res.data.user);
      navigate("/");
    } catch (e) {}
  };
  //?ทำการ logout โดยการ clearToken ออกโดย clearToken มาจาก localStorage แล้วไปตั้งค่า user ให้เป็น null
  const logout = () => {
    clearToken();
    setUser(null);
  };

  const updateUser = (value) => {
    setUser((prev) => ({ ...prev, ...value }));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export { AuthContext };
