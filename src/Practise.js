import './Practise.css'
import React from "react";

class Person extends React.Component{
    constructor() {
        super();
        this.state = {
          subject: "ReactJS"
        };
      }
      
      render() {
        return (
          <div style={{ textAlign: "center" }} className="tutorial">
            <p><b style={{ color: "#68cf48" }}>{this.state.subject}</b> Tutorial</p>
          </div>
        )
      }
}

export default Person