import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      responsible: "",
      description: "",
      priority: "low",
    };
  }

  handleInput(e) {
    console.log(e.target.value, e.target.name);
  }

  render() {
    return (
      <div className="card">
        <form className="card-body">
          <div className="form-group">
            <input
              type="text"
              onChange={this.handleInput}
              name="title"
              className="form-control"
              placeholder="Title"
            ></input>
          </div>

          <div className="form-group">
            <input
              type="text"
              onChange={this.handleInput}
              name="responsible"
              className="form-control"
              placeholder="Responsible"
            ></input>
          </div>

          <div className="form-group">
            <input
              type="text"
              onChange={this.handleInput}
              name="description"
              className="form-control"
              placeholder="Description"
            ></input>
          </div>

          <div className="form-group">
            <button type="button" class="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default TodoForm;
