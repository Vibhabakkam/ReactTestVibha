import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [currentUser, setCurrentUser] = useState();
  const [ShowUser, setShowUser] = useState();
  const router = useNavigate();
  const [data, setData] = useState();
  var LCurrentUser = JSON.parse(localStorage.getItem("CurrentUser"));
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((res) => res.json())
      .then((Json) => setData(Json.drinks));

    var LCurrentUser = JSON.parse(localStorage.getItem("CurrentUser"));

    if (LCurrentUser) {
      setShowUser(LCurrentUser);
    }
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {data &&
        data.map((e, i) => (
          <div key={i}>
            <div onClick={() => router(`/home/${e.idDrink}`)}>
              <img src={e.strDrinkThumb} alt="" />
            </div>
            <p>{e.strDrink}</p>
            <p>200</p>
            <div>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}

      <div>
        <h1>Current User Name</h1>
        <h3>{ShowUser && ShowUser.UserName}</h3>
      </div>
    </div>
  );
};

export default Home;
