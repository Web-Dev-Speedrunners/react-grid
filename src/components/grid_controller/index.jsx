import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import Grid from "../grid";
import GridActionBar from "../grid_action_bar";
import generateGridNode from "../../util/generate_grid_nodes";
import InitialGridConfig from "../../config/theme/initial_grid";
import useActionAddRow from "../../hooks/useActionAddRow";
import useActionSelectNode from "../../hooks/useActionSelectNode";
import useActionResetGrid from "../../hooks/useActionResetGrid";

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
  const {handleSelect : handleSelectNode} = useActionSelectNode(gridNodes, setGridNodes)
  const {handleSelect : handleResetGrid} = useActionResetGrid(gridNodes, setGridNodes)
  // TODO: Add your hooks here

  const classes = useStyles();

  return (
    <div>
      <GridActionBar 
        onSelectAddRow={handleAddRow}
        onSelectReset={handleResetGrid}
        highlightColor={highlightColor}
        onChangeHighlightColor={setHighlightColor}
      />
      <div className={classes.gridWrapper}>
        <Grid
          gridNodes={gridNodes}
          highlightColor={highlightColor}
          onSelectNode={handleSelectNode}
        />
      </div>
    </div>
  );
}

export default GridController;
