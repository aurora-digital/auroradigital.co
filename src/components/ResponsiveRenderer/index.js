import PropTypes from "prop-types";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const breakpointMobile = 768;
const breakpointDesktop = 1268;

export default function ResponsiveRenderer(props) {
  const { renderDefault, renderDesktop, renderTablet, renderMobile } = props;
  const { width } = useWindowDimensions();

  if (!width) return renderDefault();

  if (width >= breakpointDesktop) {
    return renderDesktop();
  }

  if (width < breakpointMobile) {
    return renderMobile();
  }

  return renderTablet();
}

ResponsiveRenderer.propTypes = {
  width: PropTypes.number,
  renderDefault: PropTypes.func,
  renderDesktop: PropTypes.func.isRequired,
  renderTablet: PropTypes.func.isRequired,
  renderMobile: PropTypes.func.isRequired,
};

ResponsiveRenderer.defaultProps = {
  renderDefault: null,
  width: null,
};
