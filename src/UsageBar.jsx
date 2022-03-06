import React from "react";

class UsageBar extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.usage = props.usage;
    this.backgroundColor = `rgb(${(100 - props.usage) * 2.55}, ${
      props.usage * 2.55
    }, 0)`;
  }

  render() {
    return (
      <div className="usageBar">
        <div
          className="bar"
          style={{
            width: this.usage + "%",
            backgroundColor: this.backgroundColor,
          }}
        >
        </div>
        <span>{this.name} {this.usage}</span>
      </div>
    );
  }
}

export default UsageBar;
