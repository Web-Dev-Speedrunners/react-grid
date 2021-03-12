import InitialGridConfig from "../config/theme/initial_grid";
import { GridCell } from "../util/generate_grid_nodes";

const useActionAddRow = (gridNodes, setGridNodes) => {
  const handleSelect = () => {
    let colCount = InitialGridConfig.COLUMN_COUNT;
    if (gridNodes.length && gridNodes[0].length) {
      colCount = gridNodes[0].length;
    }
    const newRow = [];
    for (let i = 0; i < colCount; i++) {
      newRow.push(new GridCell());
    }
    setGridNodes([...gridNodes, newRow]);
  };

  return {
    handleSelect,
  };
};

export default useActionAddRow;
