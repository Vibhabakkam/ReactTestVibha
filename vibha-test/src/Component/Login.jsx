import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const router = useNavigate();

  const [currentUser, serCurrentUser] = useState({
    UserEmail: "",
    UserPassword: "",
  });
  var CLocalData = JSON.parse(localStorage.getItem("userData"));
  function handlesubmit(e) {
    e.preventDefault();
    var flag = false;
    var LCurrentUser;
    for (var i = 0; i < CLocalData.length; i++) {
      if (
        CLocalData[i].UserEmail === currentUser.UserEmail &&
        CLocalData[i].UserPassword === currentUser.UserPassword
      ) {
        flag = true;
        LCurrentUser = CLocalData[i];
      }
    }
    if (flag) {
      localStorage.setItem("CurrentUser", JSON.stringify(LCurrentUser));
      alert("login sucessfull");
      router("/");
    } else {
      alert("plese enter correct input");
    }
  }
  function updatingData(e) {
    e.preventDefault();
    var name = e.target.name;
    var value = e.target.value;
    serCurrentUser({ ...currentUser, [name]: value });
  }
  return (
    <div id="L-FormDiv">
      <form onSubmit={(e) => handlesubmit(e)}>
        <label id="L-lable">UserName</label>
        <br />
        <input
          onChange={updatingData}
          id="T-UserEmail"
          type="email"
          name="UserEmail"
          placeholder="Enter your UserName"
        />{" "}
        <br />
        <label id="L-lable">Password</label>
        <br />
        <input
          onChange={updatingData}
          id="T-UserPassword"
          type="password"
          name="UserPassword"
          placeholder="enter your password"
        />{" "}
        <br />
        <input id="T-Submit" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
