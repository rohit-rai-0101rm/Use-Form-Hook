import React from "react";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <h1>form-hook</h1>
      <div className="container py-5">
        <div className="card border-0 shadow  p-4 w-50 mx-auto">
          <form>
            <div class="form-group">
              <label for="fullname">Full Name</label>
              <input type="text" class="form-control" id="fullname" />
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="text" class="form-control" id="phone" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
