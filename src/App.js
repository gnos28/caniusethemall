import React from "react";
import "./App.css";
import FormCss from "./FormCss";
import Result from "./Result";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textarea: "",
      dataToSubmit: "",
    };
  }
  
  handleChange = (e) => {
    this.setState({
      textarea: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      dataToSubmit: this.state.textarea,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>CSS file analyzer using caniuse datas</h1>
        <FormCss handleClick={this.handleClick}  handleChange={this.handleChange} textarea={this.state.textarea}/>
        <Result data={this.state.dataToSubmit} />
      </div>
    );
  }
}

export default App;
