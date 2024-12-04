import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        login: "",
        imageURL: "",
        location: "",
      },
    };
  }

  async componentDidMount() {
    var data = await fetch("https://api.github.com/users/abishek06");
    var json = await data.json();
    console.log(json);

    this.setState({ userInfo: json });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h3>The name is {name}</h3>
        <img className="w-56" src={avatar_url}></img>
        <h3> Location is : {location}</h3>
      </div>
    );
  }
}

export default UserClass;
