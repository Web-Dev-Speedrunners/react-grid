import InitialGridConfig from "../config/theme/initial_grid";
import { GridCell } from "../util/generate_grid_nodes";

/**
 * Iterate and set color of uncolored cells to active color
 *
 */
const useActionFillEmptyCells = (gridNodes, setGridNodes) => {
  const handleFillEmptyCells = (highlightColor) => {
    if (gridNodes.length === 0 || gridNodes[0].length === 0) {
      return gridNodes;
    }
    let newGrid = [];
    for (let i = 0; i < gridNodes.length; i++) {
      let row = gridNodes[i].slice();
      for (let j = 0; j < row.length; j++) {
        if (row[j].cellColorCode === InitialGridConfig.UNSELECTED_CELL_COLOR) {
          // cell is empty
          row[j] = new GridCell(highlightColor);
        }
      }

      newGrid[i] = row;
    }

    setGridNodes(newGrid);
  };

  return {
    handleSelect: handleFillEmptyCells,
  };
};

export default useActionFillEmptyCells;
