import React from 'react'

function Modal({ id,header,body,footer,onClose }) {
  return (
    <div id={id || 'Modal'} className='modal'>
      <div className='modal-content'>
        <div className="header">
           <span onClick={onClose} className="close-modal-icon">&times;</span>
           <h2>{header ? header : 'header'}</h2>
        </div>
        <div className="body">
          {
            body ? body : <div>
              <p>this is our model body</p>
            </div>
          }
        </div>
        <div className="footer">
          {
            footer ? footer : <h2>footer</h2>
          }
        </div>
      </div>
    </div>
  )
}

export default Modal
