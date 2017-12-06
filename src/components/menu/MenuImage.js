import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MenuImage extends Component {
  render() {
    return (
      <span className="fooddetails-logo">
        <img alt={this.props.alt} title={this.props.title} src={this.props.src}/>
      </span>
    );
  }
}

MenuImage.propTypes = {
  alt: PropTypes.string.isRequired,
  title: PropTypes.name.isRequired,
  src: PropTypes.desc.isRequired
};

export default MenuImage;
