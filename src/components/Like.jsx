import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as hb } from "@fortawesome/free-solid-svg-icons";
import { faHeart as hw } from "@fortawesome/free-regular-svg-icons";

class Like extends Component {
  state = {};
  render() {
    if (this.props.liked)
      return (
        <FontAwesomeIcon
          icon={hb}
          onClick={this.props.onClick}
          style={{ cursor: "pointer" }}
        />
      );
    else
      return (
        <FontAwesomeIcon
          icon={hw}
          onClick={this.props.onClick}
          style={{ cursor: "pointer" }}
        />
      );
  }
}

export default Like;
