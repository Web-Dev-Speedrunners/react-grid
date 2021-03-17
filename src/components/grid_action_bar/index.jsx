import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import PropType from "prop-types";
import ColorPicker from "../color_picker";
import { act } from "react-dom/test-utils";

const ActionButton = ({ ...buttonProps }) => (
  <Button color="secondary" {...buttonProps} />
);

const GridActionBar = ({
  onSelectAddRow,
  onSelectAddCol,
  onSelectDelCol,
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
        <ActionButton onClick={onSelectAddCol}>Add Column</ActionButton>
        <ActionButton onClick={onSelectDelCol}>Delete Column</ActionButton>
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
