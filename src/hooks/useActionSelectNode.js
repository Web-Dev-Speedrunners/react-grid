import { GridCell } from "../util/generate_grid_nodes";

const useActionSelectNode = (gridNodes, setGridNodes) => {
  const handleSelect = (row, col) => {
    let newGridNodes = [...gridNodes];
    newGridNodes[row] = [...gridNodes[row]];
    newGridNodes[row][col] = new GridCell(true);

    setGridNodes(newGridNodes);
  };

  return {
    handleSelect,
  };
};

export default useActionSelectNode;
