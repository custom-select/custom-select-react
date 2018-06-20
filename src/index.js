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
        {optionsTree.map((item) => this._RenderTree(item))}
      </select>
    );
  }

  _RenderTree = (item) => {
    if (item.children) {
      return this._RenderOptgroup(item)
    }
    return this._RenderOption(item)
  }

  _RenderOption = (item) => <option key={`${item.label}-${item.value}`} value={item.value}>{item.label}</option>

  _RenderOptgroup = (item) => (
    <optgroup key={item.label} label={item.label}>
      { item.children && item.children.filter(option => option.label && option.value).map(option => this._RenderOption(option))}
    </optgroup>
  )
}

CustomSelect.propTypes = {
  optionsTree: PropTypes.array.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
};

export default CustomSelect;