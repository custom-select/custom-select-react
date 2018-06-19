import React, { Component } from 'react';
import CustomSelect from './lib/CustomSelect';
import optionsTree from './data';

class Basic extends Component {
  render() {
    return (
      <div >
        <CustomSelect optionsTree={optionsTree} />
      </div>
    );
  }
}

export default Basic;
