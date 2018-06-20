import React, { Component } from "react";
import PropTypes from 'prop-types';

class CustomSelect extends Component{
  render(){
    const { optionsTree, name, id, required } = this.props;
    console.log(optionsTree);

    const optionalProps = {}

    if (name) {
      optionalProps.name = name;
    }
    if (id) {
      optionalProps.id = id;
    }
    if (required) {
      optionalProps.required = required;
    }

    return (
      <select {...optionalProps}>
      </select>
    );
  }
}

CustomSelect.propTypes = {
  optionsTree: PropTypes.array.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
};

export default CustomSelect;