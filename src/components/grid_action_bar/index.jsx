import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import PropType from "prop-types";
import ColorPicker from "../color_picker";

const ActionButton = ({ ...buttonProps }) => (
  <Button color="secondary" {...buttonProps} />
);

const GridActionBar = ({
  onSelectAddRow,
  onSelectReset,
  highlightColor,
  onChangeHighlightColor,
}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Actions */}
        <ActionButton onClick={onSelectReset}>Reset</ActionButton>
        <ActionButton onClick={onSelectAddRow}>Add Row</ActionButton>
        <ColorPicker
          color={highlightColor}
          onSetColor={onChangeHighlightColor}
        />
      </Toolbar>
    </AppBar>
  );
};

GridActionBar.propTypes = {
  onSelectAddRow: PropType.func,
  onSelectReset: PropType.func,
  highlightColor: PropType.string,
  onChangeHighlightColor: PropType.func,
};

export default GridActionBar;
