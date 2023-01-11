import React from "react";

const inputTitle = document.getElementsByName("todo_title");

export class TodoList extends React.Component {
  state = {
    // dummy data
    items: [
      { id: 1, title: "Call Katherine about the trip", completed: false },
      { id: 2, title: "Buy tickets", completed: true },
      { id: 3, title: "Finish the presentation", completed: false },
      { id: 4, title: "Invite John", completed: true },
      { id: 5, title: "Rent a car", completed: false },
    ],
  };

  handleClickButton = () => {
    let idCounter = this.state.items.length + 1;

    this.setState((myState) => {
      // console.log("here later");
      return myState.items.push({
        id: idCounter,
        title: inputTitle[0].value,
        completed: false,
      });
    });
    // console.log("here first");
  };

  componentDidMount() {
    console.log("componentDidMount: ", this.state.items);
    // console.log(this.props.todos);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate: ", this.state.items);
    inputTitle[0].value = "";
  }

  render() {
    return (
      <div>
        <ul>
          {/* {this.props.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))} */}
          {/* {this.state.items.map((item, index) => (
            <li key={item + index}>{item.title}</li>
          ))} */}
          {this.state.items.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <input name="todo_title" />
        <br />
        <br />
        <button onClick={this.handleClickButton}>Add to List</button>
      </div>
    );
  }
}
