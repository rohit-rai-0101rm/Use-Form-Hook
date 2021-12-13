import React from "react";
import classNames from "classnames";
import "./styles/App.scss";
import { useForm } from "react-hook-form";
function App() {
  const onSubmit = (data) => {
    console.log(data);
  };
  const { register, errors, handleSubmit } = useForm({
    mode: "onTouched",
  });
  console.log(errors);
  return (
    <div className="App">
      <div className="container py-2">
        <div className="card border-0 shadow w-75 p-3 mx-auto ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.fullname,
                })}
                id="fullname"
                placeholder="Enter Your Full Name"
                ref={register({
                  required: "this field is required",
                  minLength: {
                    value: 4,
                    message: "must be 4 characters",
                  },
                })}
                name="fullname"
              />
              {errors.fullname && (
                <div className="invalid-feedback">
                  {errors.fullname.message}
                </div>
              )}
              {errors.fullname?.type === "minLength" && (
                <div className="invalid-feedback"></div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail Address</label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.email,
                })}
                id="email"
                placeholder="Enter Your E-mail Address"
                ref={register({
                  required: "this field is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "please enter a valid email address",
                  },
                })}
                name="email"
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.phone,
                })}
                id="phone"
                placeholder="Enter Your Phone Number"
                ref={register({
                  required: "this field is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "please enter valid 10 digit phone number",
                  },
                })}
                name="phone"
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone.message}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.password,
                })}
                id="password"
                placeholder="Enter Your Password"
                ref={register({
                  required: "this field is required",
                  pattern: {
                    value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message: "Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)",
                  },
                })}
                name="password"
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password.message}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="state">Choose Your State</label>
              <select
                ref={register({
                  required: true,
                })}
                className="form-control"
                id="state"
              >
                <option value="">--- Select Your State ---</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Assam">Assam</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Punjab">Punjab</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="gender" className="mr-4">
                Choose Your Gender
              </label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                  ref={register({
                    required: true,
                  })}
                />
                <label className="form-check-label" htmlFor="male">
                  male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                  ref={register({
                    required: true,
                  })}
                />
                <label className="form-check-label" htmlFor="female">
                  female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="other"
                  value="other"
                  name="gender"
                  ref={register({
                    required: true,
                  })}
                />
                <label className="form-check-label" htmlFor="other">
                  other
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  ref={register({
                    required: true,
                  })}
                  className="form-check-input"
                  type="checkbox"
                  id="tnc"
                  name="tnc"
                />
                <label className="form-check-label" htmlFor="tnc">
                  I agree all terms & conditions
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
