import React, {Component} from 'react';

class Menu extends Component {
  render() {
    return (
      <ul className="menu-category">
        {this.props.children}
      </ul>
    );
  }
}

export default Menu;
