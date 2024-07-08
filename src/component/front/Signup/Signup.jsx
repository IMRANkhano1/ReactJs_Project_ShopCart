import React from "react";
import "./Signup.css";
import useDynamicCSS from "./CssCustom";
const Signup = () => {
  useDynamicCSS(
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  );
  return (
    <div className="con">
      <div className="signup">
        <form className="was-validated">
          <div className="mb-3 mt-3">
            <label className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              id="uname"
              placeholder="Enter username"
              name="uname"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="eml"
              placeholder="Enter email"
              name="email"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="myCheck"
              name="remember"
              required
            />
            <label className="form-check-label">I agree on blabla.</label>
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">
              Check this checkbox to continue.
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
