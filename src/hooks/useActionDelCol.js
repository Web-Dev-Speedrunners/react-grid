const useActionDelCol = (gridNodes, setGridNodes) => {
  const handleSelect = () => { 
    let newGridNodes = [...gridNodes];

    for (let i = newGridNodes.length - 1; i >= 0; i--) {
      newGridNodes[i] = [...newGridNodes[i]];
      newGridNodes[i].pop();

      if (!newGridNodes[i].length) {
        newGridNodes.pop(i);
      }
    }

    setGridNodes(newGridNodes);
  };

  return {
    handleSelect,
  };
};

export default useActionDelCol;
