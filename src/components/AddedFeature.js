import React from 'react';

import { removeFeature } from "../actions";
import {connect} from "react-redux";

const AddedFeature = props => {

    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.target);
    };

  return (
    <li>
      <button className="button" onClick={handleClick}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = { removeFeature };

export default connect(mapDispatchToProps)(AddedFeature);
