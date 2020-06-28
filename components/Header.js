import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h1>{this.props.header}</h1>
        </div>
      </React.Fragment>
    )
  }
}

// Header.PropTypes = {
//   header: PropTypes.string
// }

export default Header;