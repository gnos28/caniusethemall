import React from "react";
import { browserDistribution } from "./browserDistribution";
const caniuse = require('caniuse-api')


class Result extends React.Component {
  constructor(props)
  {
    super(props)
    this.data = props.data
    this.state = {
      result : ""
    }
  }
  
  getResult = () => {
    const result = caniuse.getSupport('flexbox')
    this.setState({
      result : JSON.stringify(result)
    })
  }

  componentDidMount()
  {
    this.getResult()
  }
  
  componentWillUpdate()
  {
    const toto = () => this.getResult()
    console.log('boloss')
  }

  render()
  {
    
    
    return (
      <div className="form-control">
        {this.state.result}
      </div>
    );
  }
}

export default Result;
