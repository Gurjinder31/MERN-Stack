import React from "react";
import axios from "axios";

import Style from "./CSS/style.css";
import DataList from "./DataList";

class App extends React.Component {
  state = {
    userName: "",
    email: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("/api/GetProduct", this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    this.setState({ userName: "" });
    this.setState({ email: "" });
  };

  render() {
    return (
      <div className="app ">
        <form
          method="post"
          onSubmit={this.submitHandler}
          className="mx-auto mt-5"
        >
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              className="form-control"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              className="form-control"
              onChange={this.handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </form>

        <DataList />
      </div>
    );
  }
}

export default App;
