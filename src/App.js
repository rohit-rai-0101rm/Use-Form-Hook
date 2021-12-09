import React from "react";
import "./styles/App.scss";
import { useForm } from "react-hook-form";
function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div classNameName="App">
      <h1>form-hook</h1>
      <div classNameName="container py-5">
        <div classNameName="card border-0 shadow  p-4 w-50 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                ref={register}
                name="fullname"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                classNameName="form-control"
                id="email"
                ref={register}
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                classNameName="form-control"
                id="phone"
                ref={register}
                name="phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                classNameName="form-control"
                id="password"
                ref={register}
                name="password"
              />
            </div>

            {/*<div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value="male"
                  ref={register}
                  name="gender"
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
                  ref={register}
                  name="gender"
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
                  ref={register}
                  name="gender"
                />
                <label className="form-check-label" htmlFor="other">
                  other
                </label>
              </div>
            </div>
            <div className="form-group">
              <select className="custom-select" name="state" ref={register}>
                <option value="">Select your state</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Bihar">Bihar</option>
              </select>
            </div>
            <div className="form-group">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="terms"
                  value="agree"
                  ref={register}
                  name="terms_and_conditions"
                />
                <label class="form-check-label" for="terms">
                  I agree all terms and conditons
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="updates"
                  ref={register}
                  name="updates"

                />
                <label class="form-check-label" for="updates">
                  send me latest Bootstrap updates
                </label>
              </div>
  </div>*/}
            <button type="submit" classNameName="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
