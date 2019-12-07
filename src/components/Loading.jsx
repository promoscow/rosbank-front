import React from "react";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";

function Loading({ loading, color, size, className }) {
  return (
    <Fade
      in={loading}
      style={{
        transitionDelay: loading ? "800ms" : "0ms"
      }}
      unmountOnExit
    >
      <CircularProgress className={className} color={color} size={size} />
    </Fade>
  );
}

export default Loading;
