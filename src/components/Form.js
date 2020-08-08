import React from "react";
import { useState } from "react";

const Form = () => {
  const modifyForm = (e) => {
    const { name, value } = e.target;
    updateForm({ ...form, [name]: value });
    console.log(form);
  };
  const [form, updateForm] = useState({ email: "", password: "" });

  const emailStyles = () => {
    let styles = "form-control";

    if (form.email.includes("@")) {
      styles += " border-success";
    } else {
      styles += " border-danger";
    }
    return styles;
  };

  return (
    <div>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={modifyForm}
              type="email"
              name="email"
              className={emailStyles()}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={modifyForm}
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
