import React, { useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children?: React.ReactNode;
  title?: string;
}
const CustomIframe = ({ children, ...props }: Props) => {
  const [contentRef, setContentRef] = useState<any>();

  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <div>
      <iframe
        {...props}
        ref={setContentRef}
        width="800"
        height={300}
        style={{ border: "0" }}
      >
        {mountNode && createPortal(children, mountNode)}
      </iframe>
    </div>
  );
};

export default CustomIframe;
