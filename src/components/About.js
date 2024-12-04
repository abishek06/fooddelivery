import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UserClass name={"first"}></UserClass>
      </div>
    );
  }
}

export default About;
