import React from 'react'

const DisplayBox = ({ value }) => {
  return <div className="display" data-testid="display" >{value}</div>
}

export default DisplayBox