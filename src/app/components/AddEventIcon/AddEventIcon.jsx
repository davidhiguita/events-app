import React from 'react'

const AddEventIcon = props => {
  const {onClick} = props
  return (
    <div className='add-event-icon' onClick={onClick}>
      <div>+</div>
    </div>
  )
}
export default AddEventIcon
