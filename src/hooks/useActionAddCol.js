import InitialGridConfig from "../config/theme/initial_grid";
import { GridCell } from "../util/generate_grid_nodes";

const useActionAddCol = (gridNodes, setGridNodes) => {
  const handleSelect = () => {
    if (!gridNodes.length) {
        gridNodes.push([]);
    }
    
    for (let i = 0; i < gridNodes.length; i++) {
        gridNodes[i].push(new GridCell());
    }

    setGridNodes([...gridNodes]);
  };

  return {
    handleSelect,
  };
};

export default useActionAddCol;
