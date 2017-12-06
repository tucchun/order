import React, {Component} from 'react';
import PropTypes from 'prop-types';
class MenuItem extends Component {
  render() {
    return (
      <dd aria-label={this.props.label} role="menuitem" className="">
        <div className="fooddetails-root">
          <span className="fooddetails-logo">
            <img alt={this.props.imgAlt} title={this.props.imgTitle} src={this.props.imgSrc}/>
          </span>
          <section className="fooddetails-info">
            <p className="fooddetails-name">
              {this.props.name}
            </p>
            <p className="fooddetails-desc">{this.props.desc}</p>
            <p className="fooddetails-sales">
              <span>{this.props.sales}</span>
              <span>{this.props.praise}</span>
            </p>
            <div className="fooddetails-activityRow"></div>
            <strong className="salesInfo-price fooddetails-salesInfo">
              <span>{this.props.salesInfo}</span>
            </strong>
            <div className="fooddetails-button">
            </div>
          </section>
        </div>
      </dd>
    );
  }
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  sales: PropTypes.string.isRequired,
  praise: PropTypes.string.isRequired,
  salesInfo: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired
};

export default MenuItem;
