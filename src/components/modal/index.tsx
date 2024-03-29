import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-[#00000088] z-[9999] flex justify-center items-center">
      {children}
    </div>
  );
}

export default Modal;
