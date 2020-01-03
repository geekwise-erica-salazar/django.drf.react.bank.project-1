import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        branch_name: '',
        branch_location: '',
      },
      bankApp: []
    };
  }
  componentDidMount() {
    axios
      .get("https://vs-code-12-16-19.herokuapp.com/branch/")
      .then(res => this.setState({ bankApp: res.data }))
      .catch(err => console.log(err));
  }
}
handleSubmit() {
  axios
    .post("https://vs-code-12-16-19.herokuapp.com/branch/")
    .then(res => this.componentDidMount());
}
renderTabList = () => {
  return (
    <div className="my-5 tab-list">
      <span
        onClick={() => this.displayBranch(true)}

      >
        Branch
        </span>
      <span
        onClick={() => this.displayCustomer(false)}

      >
        Customer
        </span>
      <span
        onClick={() => this.displayProducts(false)}

      >
        Products
        </span>
      <span
        onClick={() => this.displayAccount(false)}

      >
        Account
        </span>
    </div>
  );
};
renderItems = () => {
  // const { viewCompleted } = this.state;
  // const newItems = this.state.todoList.filter(
  //   item => item.completed === viewCompleted
  // );
  let newItems = [];
  newItems = this.state.bankApp

  return newItems.map(item => (
    <div key={item.id}>
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className="todo-title mr-2"
          title={item.branch_name}
        >
          {item.branch_name}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            {" "}
            Edit{" "}
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete{" "}
          </button>
        </span>
      </li>
    </div>
  ));
};
toggle = () => {
  this.setState({ modal: !this.state.modal });
};
handleSubmit = item => {
  this.toggle();
  if (item.id) {
    axios
      .put(`https://vs-code-12-16-19.herokuapp.com/branch/${item.id}/`, item)
      .then(res => this.refreshList());
    return;
  }
  axios
    .post("https://vs-code-12-16-19.herokuapp.com/branch/", item)
    .then(res => this.refreshList());
};
handleDelete = item => {
  axios
    .delete(`https://vs-code-12-16-19.herokuapp.com/branch/${item.id}`)
    .then(res => this.refreshList());
};
createItem = () => {
  const item = { branch_name: "", branch_location: "" };
  this.setState({ activeItem: item, modal: !this.state.modal });
};
editItem = item => {
  this.setState({ activeItem: item, modal: !this.state.modal });
};
render() {
  return (
    <main className="content">
      <h1 className="text-white text-uppercase text-center my-4">Bank App</h1>
      <div className="row ">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="">
              <button onClick={this.createItem} className="btn btn-primary">
                Add Account
                </button>
            </div>
            {this.renderTabList()}
            <ul className="list-group list-group-flush">
              {this.renderItems()}
            </ul>
          </div>
        </div>
      </div>
      {this.state.modal ? (
        <Modal
          activeItem={this.state.activeItem}
          toggle={this.toggle}
          onSave={this.handleSubmit}
        />
      ) : null}
    </main>
  );
}
}
export default App;