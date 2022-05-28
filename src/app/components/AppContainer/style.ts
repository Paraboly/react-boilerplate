import { createStyles, makeStyles, Theme } from "@mui/material";

const drawerWidth = 240;

const useStyles = (): any =>
  makeStyles((theme: Theme) =>
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
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        })
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      menuButton: {
        marginRight: "1rem"
      },
      hide: {
        display: "none"
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
        width: theme.spacing(5) + 1,
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(7) + 1
        }
      },
      toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        background: `url(${require("@assets/img/logo/logo.png").default})`,
        backgroundPosition: "center",
        backgroundSize: "180px 120px",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "10px",
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
      },
      gap: {
        flex: "1 1 auto"
      },
      "@keyframes bounce": {
        "0%": { transform: "scale(1,1) translate(50%, -50%) translateY(5px)" },
        "10%": {
          transform: "scale(1.1,.9) translate(50%, -50%) translateY(5px)"
        },
        "30%": {
          transform: "scale(.9,1.1) translate(50%, -50%) translateY(-3px)"
        },
        "50%": {
          transform: "scale(1.05,.95) translate(50%, -50%) translateY(5px)"
        },
        "57%": {
          transform: "scale(1,1) translate(50%, -50%) translateY(2px)"
        },
        "64%": {
          transform: "scale(1,1) translate(50%, -50%) translateY(5px)"
        },
        "100%": {
          transform: "scale(1,1) translate(50%, -50%) translateY(5px)"
        }
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
