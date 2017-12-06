import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MenuImage extends Component {
  render() {
    return (
      <span>
        <span className="cartbutton-entitybutton">
          <a href="javascript:" role="button" aria-label={this.props.label}>
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use>
            </svg>
          </a>
        </span>
      </span>
    );
  }
}

MenuImage.propTypes = {
  label: PropTypes.string.isRequired
};

export default MenuImage;
