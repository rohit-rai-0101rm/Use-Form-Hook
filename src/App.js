import React from "react";
import "./styles/App.scss";
import {useForm} from 'react-hook-form'
function App() {
  const{register,handleSubmit}=useForm()
  return (
    <div className="App">
      <div className="container py-2">
        <div className="card border-0 shadow w-75 p-3 mx-auto ">
        <form action="">
        <div class="form-group">
          <label for="fullname">Full Name</label>
          <input
            type="text"
            class="form-control"
            id="fullname"
            placeholder="Enter Your Full Name"
          />
        </div>
        <div class="form-group">
          <label for="email">E-mail Address</label>
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Enter Your E-mail Address"
          />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input
            type="text"
            class="form-control"
            id="phone"
            placeholder="Enter Your Phone Number"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="text"
            class="form-control"
            id="password"
            placeholder="Enter Your Password"
          />
        </div>
        <div class="form-group">
          <label for="state">Choose Your State</label>
          <select class="form-control" id="state">
            <option value="">--- Select Your State ---</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Assam">Assam</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Punjab">Punjab</option>
          </select>
        </div>
        <div class="form-group">
          <label for="gender" class="mr-4">Choose Your Gender</label>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="male"
              value="male"
              name="gender"
            />
            <label class="form-check-label" for="male">male</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="female"
              value="female"
              name="gender"
            />
            <label class="form-check-label" for="female">female</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="other"
              value="other"
              name="gender"
            />
            <label class="form-check-label" for="other">other</label>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="tnc" />
            <label class="form-check-label" for="tnc"
              >I agree all terms & conditions</label
            >
          </div>
        </div>
        <button class="btn btn-primary">Create New Account</button>
      </form>
        </div>
      </div>
    </div>
  );
}

export default App;
