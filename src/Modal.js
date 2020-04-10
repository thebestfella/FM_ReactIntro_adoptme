/*import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    //don't want to keep creating new elements as the new elements
    //will use too many new spaces
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    console.log("use modal child");
    //return the "clean up" function
    return () => modalRoot.removeChild(elRef.current);
    console.log("rmv child");
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
*/

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
