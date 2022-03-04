import React from "react";
import "./App.css";
import Result from "./Result";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textarea: "",
      dataToSubmit: "",
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      dataToSubmit: this.state.textarea
    }, () => console.log(this.state));
    
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      textarea: e.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>CSS file analyzer using caniuse API</h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Paste your css file here
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Paste your css file here"
              value={this.state.textarea}
              onChange={(e) => this.handleChange(e)}
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => this.handleClick(e)}
            >
              Submit
            </button>
          </div>
        </form>
        <Result data={this.state.dataToSubmit} />
      </div>
    );
  }
}

export default App;
