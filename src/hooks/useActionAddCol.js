import InitialGridConfig from "../config/theme/initial_grid";
import { GridCell } from "../util/generate_grid_nodes";

const useActionAddCol = (gridNodes, setGridNodes) => {
  const handleSelect = () => {
    let rowCount = InitialGridConfig.ROW_COUNT;
    let newGridNodes = Array.from(gridNodes);

    if (!newGridNodes.length) {
      for (let i = 0; i < rowCount; i++) {
        newGridNodes.push([]);
      }
    }
    for (let i = 0; i < newGridNodes.length; i++) {
      newGridNodes[i] = [...newGridNodes[i], new GridCell()];
    }

    setGridNodes(newGridNodes);
  };

  return {
    handleSelect,
  };
};

export default useActionAddCol;
