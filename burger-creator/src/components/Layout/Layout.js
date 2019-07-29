import React from 'react';

import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Aux from '../../hoc/_Aux/_Aux';

const layout = (props) => (
  <Aux>
    <Toolbar/>
    <main className="Content">
      {props.children}
    </main>
  </Aux>
);

export default layout;