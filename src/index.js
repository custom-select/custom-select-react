import React, { Component } from "react";
import PropTypes from 'prop-types';

class CustomSelect extends Component{
  render(){
    const { data, vw } = this.props;
    console.log(data);

    const sty = this._Styles();

    return (
      <div>Hallo World</div>
    );
  }

}

CustomSelect.propTypes = {
  optionsTree: PropTypes.object.isRequired,
};

export default CustomSelect;