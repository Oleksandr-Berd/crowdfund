import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const portalRoot = document.getElementById("portal-project");
  return portalRoot ? createPortal(children, portalRoot) : null;
};

export default Portal;
