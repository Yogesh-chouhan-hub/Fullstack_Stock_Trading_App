import React from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3010/",
          {},
          {
            withCredentials: true,
          },
        );

        if (data.status) {
          setUsername(data.user);
        } else {
          window.location.href = "http://localhost:5173/login";
        }
      } catch (err) {
        console.log(err);
        window.location.href = "http://localhost:5173/login";
      }
    };

    verifyCookie();
  }, []);
  const Logout = () => {
    removeCookie("token", { path: "/" });
    window.location.href = "http://localhost:5173/signup";
  };
  return (
    <div>
      <TopBar user={username} />
      <Dashboard logout={Logout} />
    </div>
  );
};

export default Home;
