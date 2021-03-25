import InitialGridConfig from "../config/theme/initial_grid";

export class GridCell {
  constructor(cellColor = InitialGridConfig.UNSELECTED_CELL_COLOR) {
    this.cellColorCode = cellColor;
  }
}

const generateGridNode = (rowCount, colCount) => {
  const gridNodes = [];
  for (let row = 0; row < rowCount; row++) {
    gridNodes.push([]);
    for (let col = 0; col < colCount; col++) {
      gridNodes[gridNodes.length - 1].push(new GridCell());
    }
  }
  return gridNodes;
};

/**
 * Create new gridCell as above but now highlighted by default
 */
export const generateFilledGrid = (rowCount, colCount, highlightColor) => {
  const gridNodes = [];
  for (let row = 0; row < rowCount; row++) {
    gridNodes.push([]);
    for (let col = 0; col < colCount; col++) {
      gridNodes[gridNodes.length - 1].push(new GridCell(highlightColor));
    }
  }
  return gridNodes;
};

export default generateGridNode;
