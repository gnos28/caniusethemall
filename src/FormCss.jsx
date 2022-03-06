import React from "react";

class FormCss extends React.Component {
  constructor(props) {
    super(props);
    this.textarea = props.textarea
    this.handleClick = props.handleClick
    this.handleChange = props.handleChange
  }

//   componentWillUpdate()
//   {
//     this.textarea = this.props.textarea
//   }

  render() {
    this.textarea = this.props.textarea

    return (
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
            value={this.textarea}
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
    );
  }
}

export default FormCss;
