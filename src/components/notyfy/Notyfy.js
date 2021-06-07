import React from 'react'

const Notyfy = ({ errorMessage }) => {
  if (!errorMessage) return null
  return <div style={{ color: 'red', width: '100%', top: 0 }}>{errorMessage}</div>
}

export default Notyfy
