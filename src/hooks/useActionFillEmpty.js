/**
 * Iterate and set unhighlighted cells to
 *
 */
const useActionFillEmptyCells = (gridNodes, setGridNodes) => {
  const handleFillEmptyCells = () => {
    if (gridNodes.length === 0 || gridNodes[0].length === 0) {
      return gridNodes;
    }
    let newGrid = [];
    for (let i = 0; i < gridNodes.length; i++) {
      let row = gridNodes[i].slice();
      for (let j = 0; j < row.length; j++) {
        row.forEach((cell) => (cell.highlight = true));
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
