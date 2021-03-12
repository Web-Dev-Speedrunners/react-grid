const useActionSelectNode = (gridNodes, setGridNodes) => {
  const handleSelect = (row, col) => {
    // TODO: Handle When Node is Selected
    console.log(`Node Selected: ${row} - ${col}`);
  };

  return {
    handleSelect,
  };
};

export default useActionSelectNode;
