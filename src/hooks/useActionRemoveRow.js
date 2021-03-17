// import InitialGridConfig from "../config/theme/initial_grid";
// import { GridCell } from "../util/generate_grid_nodes";

const useActionRemoveRow = (gridNodes, setGridNodes) => {
  const handleSelect = () => {

    // if length of gridNodes.length is not zero --> gridNodes pop
    // if it is zero (or no more gridNodes left), this also make sure it doesn't give any out of bound error
    // for the user it makes no difference. can press button as many times as uder desires
    if (!gridNodes.length == 0){ 
      gridNodes.pop();
    }
    
    setGridNodes([...gridNodes]);
};

  return {
    handleSelect,
  };
};



export default useActionRemoveRow;
