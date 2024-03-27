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
          width: "80%", // Adjust the width as needed
          height: "40%",
        maxWidth: "600px", // Set a maximum width if necessary
        maxHeight: "80%", // Set a maximum height if necessary
        overflow: "auto"
        },
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)" // Adjust the overlay background color
        }
        
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