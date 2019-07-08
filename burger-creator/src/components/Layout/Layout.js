import React from 'react';

import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Aux from '../../hoc/Auxiliary';

const layout = (props) => (
  <Aux>
    <Toolbar/>
    <main className="Content">
      {props.children}
    </main>
  </Aux>
);

export default layout;