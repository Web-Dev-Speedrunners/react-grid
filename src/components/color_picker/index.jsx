import React from "react";
import PropType from "prop-types";

const ColorPicker = ({ color, onSetColor }) => {
  return (
    <span>
      Color Picker :{" "}
      {
        <input
          type="color"
          value={color}
          onChange={(t) => onSetColor(t.target.value)}
        />
      }
    </span>
  );
};

ColorPicker.propTypes = {
  color: PropType.string,
  onSetColor: PropType.func,
};

export default ColorPicker;
