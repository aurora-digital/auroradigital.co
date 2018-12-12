import { Component } from "react";
import PropTypes from "prop-types";
import withWindowDimensions from "root/containers/withWindowDimensions";

const breakpointMobile = 768;
const breakpointDesktop = 1268;

@withWindowDimensions
export default class ResponsiveRenderer extends Component {
  static propTypes = {
    width: PropTypes.number,
    renderDefault: PropTypes.func.isRequired,
    renderDesktop: PropTypes.func.isRequired,
    renderTablet: PropTypes.func.isRequired,
    renderMobile: PropTypes.func.isRequired,
  };

  static defaultProps = {
    width: null,
  };

  render() {
    const {
      width,
      renderDefault,
      renderDesktop,
      renderTablet,
      renderMobile,
    } = this.props;

    if (!width) return renderDefault();

    if (width >= breakpointDesktop) {
      return renderDesktop();
    }

    if (width < breakpointMobile) {
      return renderMobile();
    }

    return renderTablet();
  }
}
