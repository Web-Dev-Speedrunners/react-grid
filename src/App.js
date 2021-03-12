import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import GridController from "./components/grid_controller";
import MUIThemeOptions from "./config/theme/umi_theme_options";

const theme = createMuiTheme(MUIThemeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GridController />
    </ThemeProvider>
  );
}

export default App;
