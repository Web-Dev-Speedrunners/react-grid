import InitialGridConfig from "../config/theme/initial_grid";
import { generateFilledGrid } from "../util/generate_grid_nodes";


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
