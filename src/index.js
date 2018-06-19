import React, { Component } from "react";
import PropTypes from 'prop-types';

class CustomSelect extends Component{
  render(){
    const { optionsTree } = this.props;
    console.log(optionsTree);

    return (
      <div>Hallo Custom Select</div>
    );
  }
}

CustomSelect.propTypes = {
  optionsTree: PropTypes.object.isRequired,
};

export default CustomSelect;