import React from 'react';
import './Modal.css';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <button onClick={onClose}>Close</button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;