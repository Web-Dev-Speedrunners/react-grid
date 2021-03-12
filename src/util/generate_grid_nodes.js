export class GridCell {
  constructor(highlight = false) {
    this.highlight = highlight;
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

export default generateGridNode;
