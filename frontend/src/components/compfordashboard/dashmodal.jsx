import React from 'react'
import Modal from 'react-modal'

const DashModal = ({children, isOpen, closeModal}) => {
    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
        
      };
  return (
     <Modal
    isOpen={isOpen}
    shouldCloseOnOverlayClick={true}
    onRequestClose={closeModal}
    style={customStyles}
  >
    {children}
  </Modal>
  )
}

export default DashModal