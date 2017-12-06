import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class MenuImage extends Component {
  render() {
    return (
      <section className="container menu-list">
        <div className="scroller">
          {this.props.children}
        </div>
      </section>
    );
  }
}

// MenuImage.propTypes = {
//   children: PropTypes.string,
//   title: PropTypes.name.isRequired,
//   src: PropTypes.desc.isRequired
// };

export default MenuImage;
