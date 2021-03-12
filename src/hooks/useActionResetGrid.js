import InitialGridConfig from "../config/theme/initial_grid";
import generateGridNode from "../util/generate_grid_nodes";

const useActionResetGrid = (_, setGridNodes) => {
  const handleSelect = () => {
    setGridNodes(
      generateGridNode(
        InitialGridConfig.COLUMN_COUNT,
        InitialGridConfig.ROW_COUNT
      )
    );
  };

  return {
    handleSelect,
  };
};

export default useActionResetGrid;
