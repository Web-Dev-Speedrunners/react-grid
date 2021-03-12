import React from 'react'
import PropType from 'prop-types'

const ColorPicker = ({
  color,
  onSetColor
}) => {
  return <div>Color Picker : {color}</div>
}

ColorPicker.propTypes = {
  color: PropType.string,
  onSetColor: PropType.func
}

export default ColorPicker