import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import PropType from "prop-types";
import ColorPicker from "../color_picker";

const ActionButton = ({ ...buttonProps }) => (
  <Button color="secondary" {...buttonProps} />
);

const GridActionBar = ({
  onSelectAddRow,
  onSelectRemoveRow,
  onSelectAddCol,
  onSelectDelCol,
  onSelectReset,
  highlightColor,
  onChangeHighlightColor,
  onFillAllCells,
  onFillEmptyCells,
}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Actions */}
        <ActionButton onClick={onSelectReset}>Reset</ActionButton>
        <ActionButton onClick={onSelectAddRow}>Add Row</ActionButton>
        <ActionButton onClick={onSelectAddCol}>Add Column</ActionButton>
        <ActionButton onClick={onSelectRemoveRow}>Remove Row</ActionButton>
        <ActionButton onClick={onSelectDelCol}>Remove Column</ActionButton>
        <ActionButton onClick={onFillAllCells}>Fill All</ActionButton>
        <ActionButton onClick={onFillEmptyCells}>Fill Empty</ActionButton>
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
  onSelectAddCol: PropType.func,
  onSelectDelCol: PropType.func,
  onSelectRemoveRow: PropType.func,
  onSelectReset: PropType.func,
  onFillAllCells: PropType.func,
  onFillEmptyCells: PropType.func,
  highlightColor: PropType.string,
  onChangeHighlightColor: PropType.func,
};

export default GridActionBar;
