import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [data, setData] = useState([]);
  const [sideMenu, setSideMenu] = useState(true);
  const [openMenu, setOpenMenu] = useState(true);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAlldata(value);
  }, [value]);

  useEffect(() => {
    console.log("changed")
    if (openMenu)
      setSideMenu(true);
    else
      setSideMenu(false);
  }, [openMenu]);


  const fetchAlldata = (query) => {
    fetchData(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setData(contents);
    });
  };
  return (
    <AuthContext.Provider value={{data, value, setValue,sideMenu, openMenu, setOpenMenu }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
