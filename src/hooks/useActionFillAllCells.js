import InitialGridConfig from "../config/theme/initial_grid";
import { generateFilledGrid } from "../util/generate_grid_nodes";

/**
 * Implement fillAllCells by generating an entirely new grid with cells
 * highlighted
 */
const useActionFillAllCells = (gridNodes, setGridNodes) => {
  const handleFillAllCells = () => {
    console.log(gridNodes);

    setGridNodes(
      generateFilledGrid(
        InitialGridConfig.COLUMN_COUNT,
        InitialGridConfig.ROW_COUNT
      )
    );
  };

  return {
    handleSelect: handleFillAllCells,
  };
};

export default useActionFillAllCells;
