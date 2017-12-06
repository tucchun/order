import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MenuTitle extends Component {
  render() {
    return (
      <dt role="heading" aria-label={this.props.label}>
        <div className="category-title">
          <strong className="category-name">{this.props.name}</strong>
          <span className="category-desc">{this.props.desc}</span>
        </div>
      </dt>
    );
  }
}

MenuTitle.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default MenuTitle;
