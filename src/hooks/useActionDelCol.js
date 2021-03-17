const useActionDelCol = (gridNodes, setGridNodes) => {
  const handleSelect = () => { 
    for (let i = gridNodes.length - 1; i >= 0; i--) {
      gridNodes[i].pop();
      
      if (!gridNodes[i].length) {
        gridNodes.pop(i)
      }
    }

    setGridNodes([...gridNodes]);
  };

  return {
    handleSelect,
  };
};

export default useActionDelCol;
