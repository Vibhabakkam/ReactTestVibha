import React from "react";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
   var router = useNavigate()

    const [userData , setUserData] = useState({UserName:"",UserEmail:"",UserPassword:"" });
     var localData = JSON.parse(localStorage.getItem("userData")) || [];
    function handleSubmit(event){
        event.preventDefault();
           var flag = false;
        for(var i = 0; i<localData.length; i++ ){
           if(localData[i].UserEmail === userData.UserEmail){
             flag = true;
           }
        }
        if(flag){
            alert("email already present")
        }
        else{
          localData.push(userData);
          localStorage.setItem("userData", JSON.stringify(localData));
          setUserData({UserName:"",UserEmail:"",UserPassword:"" });
          alert("registration sucessfully Done");
          router("/login");

        }

    }

    function updatinData(e){
        e.preventDefault();
        var name = e.target.name;
        var value = e.target.value;

        setUserData ({...userData, [name]:value});
    }



  return (
    <div> 
      <h1>Sign up for an account</h1>
      <div >
          <form onSubmit={(event =>  handleSubmit(event))}>
          <label >UserName</label><br/>
            <input onChange={updatinData}  type="text" name="UserName" placeholder="Enter your UserName" /> <br/>
            <label>UserEmail</label><br/>
            <input  onChange={updatinData}  type="email" name="UserEmail" placeholder="Enter your Email" /> <br/>
            <label >UserPassword</label><br/>
            <input  onChange={updatinData}  type="password" name="UserPassword"   placeholder="enter your password"/> <br/>
            <input type="submit" value="Register"/>
          </form>
        </div>
      </div>  
  );
};
export default Register;
