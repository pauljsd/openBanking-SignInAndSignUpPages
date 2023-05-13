import React, { useState } from "react";

import backgroundimage from "../../images/loginOne.jpg";

import CustomButton from "../reusables/CustomButton";

const Login = () => {
  const [logInData, setLogInData] = useState({
    regNum: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogInData({ ...logInData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(logInData);
    setLogInData({ name: "", email: "" });
  };

  return (
    <div className="flex items-center w-100">
      <div
        className="sideDiv bg-cover h-screen"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      ></div>
      <div className="mainDiv flex flex-col items-center h-screen">
        <div className="h-20 text-4xl mt-4 mb-8">Sign In to your account</div>
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center flex-col gap-y-8">
              {/* first input  */}
              <div className="flex gap-x-4">
                <input
                  className="secondary-bg-color pl-4 text-left rounded-lg mb-2 w-96 h-12"
                  value={logInData.regNum}
                  type="text"
                  placeholder="Registration Number"
                  id="regNum"
                  name="regNum"
                  onChange={handleChange}
                />
              </div>
              {/* second input  */}
              <div className="flex gap-x-4">
                <input
                  className="secondary-bg-color pl-4 text-left rounded-lg w-96 h-12"
                  value={logInData.password}
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>

              <div className="flex gap-x-4 mb-4">
                <div className="flex items-center gap-x-2">
                  {/* <FaSquare className="" /> */}
                  <input type="checkbox" id="CheckBox" className="" />
                  <a>Remember Me</a>
                </div>
                <div>
                  <a>Forgot your password?</a>
                </div>
              </div>
            </div>

            <div>
              <CustomButton type="submit">LOG IN</CustomButton>
            </div>
          </form>
        </div>

        <div className="h-10 flex gap-x-4 mb-4">
          <p>Don't have an account?</p>
          <p>
            <a>Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
