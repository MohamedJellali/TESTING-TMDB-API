import React from "react";
import { StyledMovieModal } from "../styles/StyledMovieModal";

const Modal = ({ isVisible = false, children, onClose }) => {

  return !isVisible ? null : (
    <StyledMovieModal>
      <div className="modal" onClick={onClose}>
        <div className="modal-dialog">
          <div className="modal-header">
            <span className="modal-close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <div className="modal-content">{children}</div>
          </div>
        </div>
      </div>
    </StyledMovieModal>
  );
};

export default Modal;
