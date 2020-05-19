import React, { useState } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import ReactLogo from "../../static/stack/react-native.svg"

import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { red, blue, green } from "@material-ui/core/colors"
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel"

//import Button from "@material-ui/core/Button"
import { Link, graphql, useStaticQuery } from "gatsby"

const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
  return (
    <div>
      {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
      <AutoRotatingCarousel
        //label="Get started"
        open={handleOpen.open}
        //open={true}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: "absolute", height: 200, width: 200 }}
      >
        <Slide
          media={
            <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
          }
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="Coming Soon..."
          subtitle={
            <Button variant="contained" color="primary">
              <Link
                to="/services"
                style={{ color: "white", textDecoration: "none" }}
              >
                See Details
              </Link>
            </Button>
          }
        />
        <Slide
          media={
            <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
          }
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title="Coming Soon..."
          subtitle={
            <Button variant="contained" color="primary">
              <Link
                to="/services"
                style={{ color: "white", textDecoration: "none" }}
              >
                See Details
              </Link>
            </Button>
          }
        />
        <Slide
          media={
            <img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title="Coming Soon..."
          subtitle={
            <Button variant="contained" color="primary">
              <Link
                to="/services"
                style={{ color: "white", textDecoration: "none" }}
              >
                See Details
              </Link>
            </Button>
          }
        />
      </AutoRotatingCarousel>
    </div>
  )
}

const Header = () => {
  const [handleOpen, setHandleOpen] = useState({ open: false })
  const handleClick = () => {
    setHandleOpen({ open: true })
  }
  const matches = useMediaQuery("(max-width:600px)")

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <CssBaseline />

      <AutoRotatingCarouselModal
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />

      <AppBar
        /** Menu Bar */
        style={{
          backgroundColor: "#141821",
          //backgroundImage: url("stars", true),
          backgroundSize: "cover",
        }}
      >
        <Toolbar>
          <Typography style={{ marginRight: "auto" }} variant="h4">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              {data.site.siteMetadata.title}
            </Link>
          </Typography>
          {/** <img src={Logo} style={{ width: "5%", margin: "1%" }}></img> */}
          <Button color="inherit">
            <Link
              to="/services"
              style={{ color: "white", textDecoration: "none" }}
            >
              Services
            </Link>
          </Button>
          <Button color="inherit" onClick={handleClick}>
            Projects
          </Button>
          <Button color="inherit">
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              about
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>
              Blog
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
