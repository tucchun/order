import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MenuItem extends Component {

  render() {
    //<img className="menu-category-icon" src="https://fuss10.elemecdn.com/5/da/3872d782f707b4c82ce4607c73d1ajpeg.jpeg?imageMogr/format/webp/thumbnail/18x/"/>
    return (
      <li role="button" aria-label={this.props.title} className="menu-category-active menu-category-item">
        <img className="menu-category-icon" src={this.props.icon} />
        <span className="menu-category-txt">{this.props.title}</span>
      </li>
    );
  }
}
MenuItem.propTypes = {
  title: PropTypes.string.isRequired
};
export default MenuItem;
