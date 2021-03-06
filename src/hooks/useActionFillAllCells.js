import { generateFilledGrid } from "../util/generate_grid_nodes";

/**
 * Implement fillAllCells by generating an entirely new grid with cells
 * highlighted
 */
const useActionFillAllCells = (gridNodes, setGridNodes) => {
  const handleFillAllCells = (highlightColor) => {
    if (gridNodes.length === 0 || gridNodes[0].length === 0) {
      return gridNodes;
    }

    setGridNodes(
      generateFilledGrid(gridNodes.length, gridNodes[0].length, highlightColor)
    );
  };

  return {
    handleSelect: handleFillAllCells,
  };
};

export default useActionFillAllCells;
