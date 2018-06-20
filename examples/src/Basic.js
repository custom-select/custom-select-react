import React, { Component } from 'react';
import CustomSelect from './lib/CustomSelect';
import optionsTree from './data';

class Basic extends Component {
  render() {
    return (
      <div >
        <CustomSelect optionsTree={optionsTree} id="myCustomSelect" name="my-custom-select" required/>
      </div>
    );
  }
}

export default Basic;
