import React, { useState } from "react";

import backgroundimage from "../../images/loginOne.jpg";

import CustomButton from "../reusables/CustomButton";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    compName: "",
    regNum: "",
    email: "",
    password: "",
    confPass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpData);
  };

  return (
    <div className="flex items-center w-100">
      <div
        className="sideDiv bg-cover h-screen"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      ></div>
      <div className="mainDiv flex flex-col items-center h-screen">
        <div className="h-20 text-4xl mt-4 mb-8">Sign Up your account</div>
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center flex-col gap-y-8">
              {/* first input  */}
              <div className="flex gap-x-4">
                <input
                  className="secondary-bg-color pl-4 text-left rounded-lg mb-2 w-96 h-12"
                  value={signUpData.compName}
                  type="text"
                  placeholder="Company Name"
                  id="compName"
                  name="compName"
                  onChange={handleChange}
                />
              </div>
              {/* second input  */}
              <div className="flex gap-x-4">
                <input
                  className="secondary-bg-color pl-4 text-left rounded-lg w-96 h-12"
                  value={signUpData.regNum}
                  type="number"
                  placeholder="Registration Number"
                  id="regNum"
                  name="regNum"
                  onChange={handleChange}
                />
              </div>
              {/* third input  */}
              <div className="flex gap-x-4">
                <input
                  className="secondary-bg-color pl-4 text-left rounded-lg w-96 h-12"
                  value={signUpData.email}
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              {/* fourth input  */}
              <div className="flex gap-x-4">
                <input
                  className="secondary-bg-color pl-4 text-left rounded-lg w-96 h-12"
                  value={signUpData.password}
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              {/* fifth input  */}
              <div className="flex gap-x-4">
                <input
                  className="secondary-bg-color pl-4 text-left rounded-lg w-96 h-12"
                  value={signUpData.confPass}
                  type="password"
                  placeholder="Confirm Password"
                  id="confPass"
                  name="confPass"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <CustomButton>SIGN UP</CustomButton>
            </div>
          </form>
        </div>

        <div className="h-10 flex gap-x-4 mb-4">
          <p>Already have an Account?</p>
          <p>
            <a>Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
