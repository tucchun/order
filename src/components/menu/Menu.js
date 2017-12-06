import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class MenuImage extends Component {
  render() {
    return (
      <dl role="menu">
        {this.props.children}
      </dl>
    );
  }
}

// MenuImage.propTypes = {
//   children: PropTypes.string,
//   title: PropTypes.name.isRequired,
//   src: PropTypes.desc.isRequired
// };

export default MenuImage;
