import React from "react";
import "./styles/App.scss";
import { useForm, useFieldArray } from "react-hook-form";
const UserInformation = (props) => {
  const {register}=props
  const{append,fields,remove}=useFieldArray({

    name:"users",
  });
  return (
    <div className="card mb-4">
      <div className="card-header">User Information</div>
      <div className="card-body">
        <div class="form-row form-group">
          <div class="col">
            <input
              type="text"
              class="form-control"
              ref={register()}
              placeholder="Enter Your First name"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              ref={register()}

              placeholder="Enter Your Last name"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              ref={register()}

              placeholder="Enter Your E-mail Address"
            />
          </div>
          <div class="col">
            <select class="form-control" id="state"ref={register()}
>
              <option value="">Select Your State</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Bihar">Bihar</option>
              <option value="Assam">Assam</option>
              <option value="Goa">Goa</option>
              <option value="Manipur">Manipur</option>
            </select>
          </div>
        </div>
        <button
          style={{ margin: "2rem" }}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
function App() {
  const { register, handleSubmit } = useForm();
  const basicForm = (
    <div className="card mb-4">
      <div className="card-header">Basic Information</div>
      <div className="card-body">
        <div class="form-group">
          <label for="fullname">Full Name</label>
          <input
            type="text"
            class="form-control"
            id="fullname"
            name="fullname"
            ref={register}
          />
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            ref={register}
          />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input
            type="text"
            class="form-control"
            id="phone"
            name="phone"
            ref={register}
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            ref={register}
          />
        </div>
      </div>
    </div>
  );
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div classNameName="App">
      <div classNameName="container py-5"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {basicForm}
        <UserInformation register={register}/>
        
        <button
          style={{ margin: "2rem" }}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
