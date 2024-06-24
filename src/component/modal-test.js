import React, { useState } from 'react'
import Modal from './modal'
import './modal.css'
function ModalTest() {

  const [showModelPopup, setShowModelPopup] = useState(false)

  function handleToggleModelPopup() {
    setShowModelPopup(!showModelPopup)
  }

  function onClose(){
    setShowModelPopup(false)
  }
  return (
    <div className='open-modal-popup-body'>
      <button className='open-modal-popup' onClick={handleToggleModelPopup}>Open Model Popup</button>
      {
        showModelPopup && <Modal onClose={onClose} body={<div>Customize Body</div>} 
        header={<div>Customized Header</div>}
        footer={<div>Customized footer</div>}
        />
       
      }
    </div>
  )
}

export default ModalTest
