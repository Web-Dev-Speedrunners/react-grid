import { makeStyles } from "@material-ui/core";
import proptypes from "prop-types";

const useStyles = makeStyles({
  cell: {
    width: "25px",
    height: "25px",
    padding: "0px",
    border: "1px solid black",
  },
});

const Grid = ({ gridNodes, onSelectNode, highlightColor }) => {
  // TODO: Optional, we can handle onSelectNode to be called on long press. 
  // First We need to build long press (preferably with hooks)
  const classes = useStyles();

  const renderCell = (cellProp, row, col) => {
    const tdStyle = cellProp.highlight
      ? { backgroundColor: highlightColor }
      : {};
    return (
      <td
        key={`${row}-${col}`}
        onClick={() => onSelectNode(row, col)}
        className={classes.cell}
        style={tdStyle}
      />
    );
  };

  return (
    <table>
      <tbody>
      {gridNodes.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((node, colIndex) => renderCell(node, rowIndex, colIndex))}
        </tr>
      ))}
      </tbody>
    </table>
  );
};

Grid.propTypes = {
  gridNodes: proptypes.array,
  /** gridNode example
  [
    [{highlight: true}, {highlight: true}],
    [{highlight: true}, {highlight: false}]
  ]
   */
  onSelectNode: proptypes.func, // (row, col) => void,
  highlightColor: proptypes.string, // Hex Color: #FFFFFF
};

export default Grid;
