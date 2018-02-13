import React from 'react'

const AddEventIcon = props => {
  const {onClickIcon} = props
  return (
    <div className='add-event-icon' onClick={onClickIcon}>
      <div>+</div>
    </div>
  )
}
export default AddEventIcon
