import React from 'react'

const ButtonPanel = ({ buttons, onClick }) => {
  return (
    <div className="buttons-grid">
      {buttons.map(button => (
        <button key={button} onClick={() => onClick(button)}>{button}</button>
      ))}
    </div>
  )
}

export default ButtonPanel