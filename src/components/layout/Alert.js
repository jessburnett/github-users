import React from 'react'

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" style={{marginRight: '.5rem'}}/>{alert.msg}
      </div>
    ) 
  )
}

export default Alert;
