import React from "react";
import PropTypes from "prop-types";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";

function Loading({ isLoading, size, className }) {
  return (
    <Fade
      in={isLoading}
      style={{
        transitionDelay: isLoading ? "800ms" : "0ms"
      }}
      unmountOnExit
    >
      <CircularProgress className={className} size={size} />
    </Fade>
  );
}

Loading.propTypes = {
  isLoading: PropTypes.object,
  size: PropTypes.number,
  className: PropTypes.string | PropTypes.object
};

export default Loading;
