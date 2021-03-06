import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import Grid from "../grid";
import GridActionBar from "../grid_action_bar";
import generateGridNode from "../../util/generate_grid_nodes";
import InitialGridConfig from "../../config/theme/initial_grid";
import useActionAddRow from "../../hooks/useActionAddRow";
import useActionRemoveRow from "../../hooks/useActionRemoveRow.js";
import useActionSelectNode from "../../hooks/useActionSelectNode";
import useActionResetGrid from "../../hooks/useActionResetGrid";
import useActionAddCol from "../../hooks/useActionAddCol"
import useActionDelCol from "../../hooks/useActionDelCol"
import useLongPress from "../../hooks/useLongPress"
import useActionFillAllCells from "../../hooks/useActionFillAllCells"
import useActionFillEmptyCells from "../../hooks/useActionFillEmpty";

const useStyles = makeStyles({
  gridWrapper: {
    marginTop: "20px",
    marginLeft: "20px",
  },
});

function GridController() {
  // ========== States ==========
  const [gridNodes, setGridNodes] = useState(
    generateGridNode(
      InitialGridConfig.ROW_COUNT,
      InitialGridConfig.COLUMN_COUNT
    )
  );
  const [highlightColor, setHighlightColor] = useState(
    InitialGridConfig.HIGHLIGHT_COLOR
  );
  // ========== Hook Extensions ==========
  const {handleSelect : handleAddRow} = useActionAddRow(gridNodes, setGridNodes)
  const {handleSelect : handleRemoveRow} = useActionRemoveRow(gridNodes, setGridNodes)
  const {handleSelect : handleSelectNode} = useActionSelectNode(gridNodes, setGridNodes)
  const {handleSelect : handleResetGrid} = useActionResetGrid(gridNodes, setGridNodes)
  const {handleSelect : handleAddCol} = useActionAddCol(gridNodes, setGridNodes)
  const {handleSelect : handleDelCol} = useActionDelCol(gridNodes, setGridNodes)
  const {handleSelect : handleFillAllCells } = useActionFillAllCells(gridNodes, setGridNodes)
  const {handleSelect : handleFillEmptyCells } = useActionFillEmptyCells(gridNodes, setGridNodes)
  const {isLongPress, handleMouseDown, handleMouseUp} = useLongPress()
  // TODO: Add your hooks here

  const classes = useStyles();
  
  return (
    <div 
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}>
      <GridActionBar 
        onSelectAddRow={handleAddRow}
        onSelectRemoveRow={handleRemoveRow}
        onSelectAddCol={handleAddCol}
        onSelectDelCol={handleDelCol}
        onSelectReset={handleResetGrid}
        highlightColor={highlightColor}
        onChangeHighlightColor={setHighlightColor}
        onFillAllCells={() => handleFillAllCells(highlightColor)}
        onFillEmptyCells={() => handleFillEmptyCells(highlightColor)}
      />
      <div className={classes.gridWrapper}>
        <Grid
          gridNodes={gridNodes}
          highlightColor={highlightColor}
          isLongPress={isLongPress}
          onSelectNode={(row, col) => handleSelectNode(row, col, highlightColor)}
        />
      </div>
    </div>
  );
}

export default GridController;
