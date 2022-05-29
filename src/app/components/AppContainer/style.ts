import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: "calc(100vw - 57px)",
      height: "calc(100vh - 64px)",
      position: "absolute",
      overflowX: "hidden",
      top: "64px",
      left: "57px",
      "& > header > .MuiToolbar-root": {
        paddingRight: 0
      }
    },
    appBar: {
      "&.MuiAppBar-root": {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        })
      }
    },
    appBarShift: {
      "&.MuiAppBar-root": {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      }
    },
    menuButton: {
      marginRight: "1rem !important"
    },
    hide: {
      display: "none !important"
    },
    drawer: {
      position: "absolute",
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      marginLeft: 0,
      width: theme.spacing(5),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7)
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      background: `url(${require("@assets/img/logo/logo.png")})`,
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "10px",
      ...theme.mixins.toolbar
    },
    gap: {
      flex: "1 1 auto"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    active: {
      color: "#3F51B5",
      fontWeight: 600,
      "& .MuiListItemIcon-root": {
        color: "#3F51B5",
        fontWeight: 600
      }
    }
  })
);

export default useStyles;
