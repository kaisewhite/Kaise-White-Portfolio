import React from "react"
import { Parallax } from "react-spring/renderprops-addons"
import { useSpring, animated } from "react-spring"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import Logo from "../../static/Logo.png"
import AppsIcon from "@material-ui/icons/Apps"
import HomeSharpIcon from "@material-ui/icons/HomeSharp"
import ViewQuiltSharpIcon from "@material-ui/icons/ViewQuiltSharp"
import AccountTreeSharpIcon from "@material-ui/icons/AccountTreeSharp"
import LibraryBooksSharpIcon from "@material-ui/icons/LibraryBooksSharp"
import Button from "@material-ui/core/Button"

import "../styles.css"

/************************** START - *********************** */

/************************** END -  *********************** */

/************************** START - Load Graphics *********************** */
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`
/************************** END - Load Graphics *********************** */

/************************** START - Calculations for Animated Objects *********************** */
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
/************************** END - Calculations for Animated Objects *********************** */

/************************** Start - Styling for Menu *********************** */
const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,

    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#FFF",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    //backgroundColor: "#4a5568",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))
/************************** END - Styling for Menu *********************** */

const Index = () => {
  /************************** START - Hook for Animated Objects *********************** */

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  /************************** END - Hook for Animated Objects *********************** */

  /************************** START - Dependencies for Menu *********************** */
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  /************************** END - Dependencies for Menu *********************** */

  return (
    <div style={{ backgroundColor: "#141821" }}>
      <CssBaseline />

      <AppBar
        /** Menu Bar */
        style={{
          backgroundColor: "#141821",
          backgroundImage: url("stars", true),
          backgroundSize: "cover",
        }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            {/**<AppsIcon /> */}
          </IconButton>
          <Typography style={{ marginRight: "auto" }} variant="h4">
            K / W
          </Typography>
          {/** <img src={Logo} style={{ width: "5%", margin: "1%" }}></img> */}
          <Button color="inherit">Services</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Stack</Button>
        </Toolbar>
      </AppBar>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      ></main>
      {/********************************************************************************* */}
      <Parallax
        pages={3}
        style={{
          backgroundColor: "#141821",
          backgroundSize: "auto",
        }}
      >
        <Parallax.Layer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <Parallax.Layer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />

        <Parallax.Layer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        ></Parallax.Layer>

        <Parallax.Layer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={url("satellite4")}
            style={{ width: "15%", marginLeft: "70%" }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </Parallax.Layer>

        <Parallax.Layer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </Parallax.Layer>

        <Parallax.Layer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          {/** <img src={url("earth")} style={{ width: "60%" }} /> */}
        </Parallax.Layer>

        <Parallax.Layer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true),
          }}
        ></Parallax.Layer>

        <Parallax.Layer
          offset={0}
          speed={0.1}
          onClick={() => {}}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ marginLeft: 250, marginRight: 250 }}>
            <h1
              style={{
                fontFamily: "Helvetica Neue",
                //fontWeight: 600,
                lineHeight: 1.25,
                color: "#FFF",
                fontSize: 50,
                textShadow: 5,
                letterSpacing: 1,
                //marginTop: 0.5,
                marginBottom: 10,
              }}
            >
              Hi, I'm Kaise
            </h1>
            <p
              style={{
                display: "block",
                color: "#e2e8f0",
                fontFamily: "Arial",
                fontSize: 20,
              }}
            >
              I specialize in user experience, design, and full stack
              engineering to bring brilliant digital ideas into being.
            </p>
          </div>
        </Parallax.Layer>

        <Parallax.Layer
          offset={0.4}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <animated.img
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ width: "20%", transform: props.xys.interpolate(trans) }}
            src={url("server")}
          />
        </Parallax.Layer>

        <Parallax.Layer
          offset={1}
          speed={0.1}
          onClick={() => {}}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <animated.img
            src={url("bash")}
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ width: "40%", transform: props.xys.interpolate(trans) }}
          />
        </Parallax.Layer>

        <Parallax.Layer
          offset={1.45}
          speed={0.1}
          onClick={() => {}}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ marginLeft: 250, marginRight: 250 }}>
            <h1
              style={{
                fontFamily: "Helvetica Neue",
                //fontWeight: 600,
                lineHeight: 1.25,
                color: "#FFF",
                fontSize: 40,
                textShadow: 5,
                letterSpacing: 1,
                marginTop: 0.5,
                marginBottom: 10,
              }}
            >
              About Me
            </h1>
            <p
              style={{
                display: "block",
                color: "#e2e8f0",
                fontFamily: "Arial",
                fontSize: 20,
              }}
            >
              Creative full stack engineer with 8+ years of strong database
              development, administration, & performance tuning. 5+ years of
              backend development. 3+ years supporting cloud based solutions.
              Not too long ago I decided it was time to go full stack and
              combine everything I've learned over the course of my career in
              order to further continue my education and growth.
            </p>
          </div>
        </Parallax.Layer>

        <Parallax.Layer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => {}}
        >
          <animated.img
            src={url("clients-main")}
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ width: "40%", transform: props.xys.interpolate(trans) }}
          />
        </Parallax.Layer>
      </Parallax>
    </div>
  )
}

const styles = {}

export default Index
