import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#60495a",
    },
    secondary: {
      main: "#d6d5c9",
    },
  },
});

export default Theme;
